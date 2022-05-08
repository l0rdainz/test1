import React,{useState} from 'react';
import {NavLink} from "react-router-dom";
import "../styles/navbar.css";
import { FaAlignJustify } from 'react-icons/fa';
import {useAuth0} from "@auth0/auth0-react";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);
  
    const toggleNavbar = () => {
      setOpenLinks(!openLinks);
    };
  
      const {loginWithRedirect} = useAuth0();
 

    
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
        <button onClick={() => loginWithRedirect()}>Login</button>
        <button onClick={() => loginWithRedirect()}>Log Out</button>
        
        
      </div>
    );
  }
  
  export default Navbar;



