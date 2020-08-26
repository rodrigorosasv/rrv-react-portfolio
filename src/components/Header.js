import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link 
            to="/"
            className="navbar-brand"
            >
            <i className="fas fa-braille" style={{color: "white"}}></i> 
            Rodrigo Rosas Valdes
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navbar-text" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active": "nav-link"}
                    >
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio"
                    className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/projectm"
                    className={window.location.pathname === "/projectm" ? "nav-link active" : "nav-link"}
                    >
                    Project Management
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/itconsulting"
                    className={window.location.pathname === "/itconsulting" ? "nav-link active" : "nav-link"}
                    >
                    IT Consulting
                </Link>
            </li>
            </ul>
        </div>
        </nav>
    </header>
  );
}

export default Header;
