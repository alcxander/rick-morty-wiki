import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import React, { useState, useEffect } from 'react'
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";

function App() {

  let [pageNumber, setPageNumber] = useState(1);
  // usestate here defines a variable then a function to update that variable 
  // and use state allows us to give a default value in the brackets.

  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results} = fetchedData; // destructuring so we dont have to do var.thing every time we want. 
  // also it means we can pass just the values we want to pass between places on the site

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
  //this is a template literal, we use graves so that we can work with variables
  // inside the string we are working on e.g. updating page numbers

  useEffect(()=>{
    //IIFE - immediately invoke functional expression
    // runs as soon as the js is opened/loaded
    // this function runs when the page is changed so that we can get fresh data 
    // on button click
    (async function(){
      //fetch data
      let data = await fetch(api).then(res=>res.json());
      //await means wait a little bit, a la a promise. so it doesnt execute immidiately
      updateFetchedData(data);
    })();
  },[api])

  

  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>
      <Search />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Filters />
          </div>
          <div className="col-8">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
