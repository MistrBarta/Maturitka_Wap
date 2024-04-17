import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [openned, setOpenned] = useState(false);

  const toggleNav = () => {
    setOpenned(!openned);
  };

  const closeNav = () => {
    setOpenned(false);
  };

  return (
    <nav className="navbar">
      <ul className={openned ? "nav-links-mobile" : "nav-links"}>
        <Link to="/" className="homepage" onClick={closeNav}>
          <li>Home page</li>
        </Link>
        <Link to="/catpage" className="catpage" onClick={closeNav}>
          <li>Cat page</li>
        </Link>
        <Link to="/dogpage" className="dogpage" onClick={closeNav}>
          <li>Dog page</li>
        </Link>
        <Link to="/boypage" className="boypage" onClick={closeNav}>
          <li>Boy page</li>
        </Link>
        <Link to="/girlpage" className="girlpage" onClick={closeNav}>
          <li>Girl page</li>
        </Link>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleNav}>
        {openned ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}

export default Navbar;