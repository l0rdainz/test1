import React,{useState} from 'react';
import {Link} from "react-router-dom";
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
          <Link to="/"> Home </Link>
          <Link to="/eggsbee"> Eggsbee </Link>
          <Link to="/simulator"> Simulator </Link>
          <Link to="/record"> Records </Link>
          <Link to="/register"> Register </Link>
          <button onClick={toggleNavbar}>
            <FaAlignJustify/>
          </button>
        </div>
      </div>
    );
  }
  
  export default Navbar;



