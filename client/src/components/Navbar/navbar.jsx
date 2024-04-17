import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, } from "react-icons/fa";
import "./Navbar.css"

function Navbar() {
    /*variable for navbar button*/
    const [ openned, setOpenned] = useState(false);

    return (
      <nav className="navbar">
        <h3 className="logo">MARKET PLACE</h3>
        <ul className={openned? "nav-links-mobile": "nav-links"}>
            <Link to="/" className="home">
                <li>Home</li>
            </Link>
            <Link to="/skins" className="skins">
                <li>Skins</li>
            </Link>
            <Link to="/support" className="support">
                <li>Support</li>
            </Link>
            <Link to="/login" className="login">
                <li>Log In</li>
            </Link>
        </ul>
        {/*Fuction onClick on button*/}
        <button className="mobile-menu-icon"
        onClick={() => setOpenned(!openned)}>
            {openned? <FaTimes/> : <FaBars/>}
        </button>
      </nav>
    );
  }
  
  export default Navbar;
