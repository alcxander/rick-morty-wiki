import React from "react";
import {NavLink, Link} from 'react-router-dom';
import '../../App.css';

//to import css just path to the file. thats interesting why doesnt app.css apply globally inseard
// of having to import dedicated file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container">
      <Link to="/" className="ubuntu navbar-brand fs-3">
        Rick & Morty <span className="text-primary">WiKi</span>
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
            <style jsx>{`
                button[aria-expanded="false"] > .close{
                display: none}   
                
                button[aria-expanded="true"] > .open{
                display: none
                }

                `}
            </style>

          <i class="fa-solid fa-bars open fw-bold text-dark"></i>
          <i class="fa-solid fa-xmark close fw-bold text-dark"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink activeClassName="active" to="/" className="nav-link" >
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episodes
            </NavLink>
            <NavLink to="/location" className="nav-link">
                Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
