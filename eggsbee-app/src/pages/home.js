import React from "react";
import BannerImage from "../assets/home.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Write Your Eggsbee marketing sentence Blablabla</h1>
        {/* edit this before using in prod */}
        <p>fjiksjdfkljdsklgj akdjkfda dskjflkd awieje kmcklwmdew d widjf kjw 
            dfikjeklwe ewfoikowldm djhvfj
        </p>
      </div>
    </div>
  );
}

export default Home;

