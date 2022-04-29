import React,{useState} from 'react';
import {NavLink,Link} from "react-router-dom";
import "../styles/navbar.css";
import { FaAlignJustify } from 'react-icons/fa';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
         
          <div className="hiddenLinks">
            <Link to="/"> Home </Link>
            <Link to="/eggsbee"> Eggsbee </Link>
            <Link to="/simulator"> Simulator </Link>
            <Link to="/record"> Records </Link>
            <Link to="/register"> Register </Link>
          </div>
        </div>
        <div className="rightSide">
        <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/eggsbee"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Eggsbee
      </NavLink>
      <NavLink
        to="/simulator"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Simulator
      </NavLink>
      <NavLink
        to="/record"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Records
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Register
      </NavLink>
          <button onClick={toggleNavbar}>
            <FaAlignJustify/>
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;



