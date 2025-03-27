import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import React, { useState, useEffect } from "react";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:id" element={<CardDetails />}/>

        <Route path="/episodes" element={<Episodes />}/>
        <Route path="/episodes/:id" element={<CardDetails />}/>

        <Route path="/location" element={<Location />}/>
        <Route path="/location/:id" element={<CardDetails />}/>
      </Routes>
    </Router>
  )
/* so routes allow us basically to define paths as per the URL in the browser and what
we can do then is point that route at an element, and the element is what gets loaded on screen
so when the path is /episodes we load the episodes page on screen. I wonder can we do routing
updates inside those components then eventually or how do we handle those things when we want to update them

also note the navbar is set when done like this i.e. set once and the rest of the page works almost like a template
*/
}

// changing this from function to const allows us to use these as pages instead of just 
// a single function app. component structure sneaking in there I see. we defined
// a new function at the top which will be the whole app. 
const Home = () => {
  let [pageNumber, setPageNumber] = useState(1);
  // usestate here defines a variable then a function to update that variable
  // and use state allows us to give a default value in the brackets.

  let [search, setSearch] = useState("");
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");

  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData; // destructuring so we dont have to do var.thing every time we want.
  // also it means we can pass just the values we want to pass between places on the site

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  //this is a template literal, we use graves so that we can work with variables
  // inside the string we are working on e.g. updating page numbers

  useEffect(() => {
    //IIFE - immediately invoke functional expression
    // runs as soon as the js is opened/loaded
    // this function runs when the page is changed so that we can get fresh data
    // on button click
    (async function () {
      //fetch data
      let data = await fetch(api).then((res) => res.json());
      //await means wait a little bit, a la a promise. so it doesnt execute immidiately
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setSpecies={setSpecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
}

export default App;
