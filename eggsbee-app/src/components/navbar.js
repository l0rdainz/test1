import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import "../styles/navbar.css";
import { FaAlignJustify } from 'react-icons/fa';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
    return (
      <div className="navbar">
        
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
        Recipes
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
        <button>Login</button>
      </div>
    );
  }
  
  export default Navbar;



