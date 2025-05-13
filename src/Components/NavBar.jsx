 import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";




function NavBar() {
    return(
        <nav className="navbar">
        <img src={logo} alt="logo" />
        <h4>BBC news</h4>
        </nav>

    );
}

export default NavBar;  
  
