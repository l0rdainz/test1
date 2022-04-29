import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/banner1.webp";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Write Your Recipe Blablabla</h1>
        <Link to="/submit">
          <button> WRITE NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;