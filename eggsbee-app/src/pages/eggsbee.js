import React from 'react'
import BannerImage from "../assets/explore.webp";
import '../styles/eggsbee.css'
function eggsbee() {
  return (
    <div>
    <div className="explore" style={{ backgroundImage: `url(${BannerImage})` }}>
     <h1>Explore Recipes</h1>
     </div>
     
    <div className="explorebody">
    <div className="sidenav"> 
    <h2><a>My Recipes </a> </h2> 
    <h2><a>Add Recipe </a></h2>
    <h2> <a>Top Recipes</a></h2>

    </div>
      <div className="results"> <h2>Add New Recipe</h2>
      <input type="text" placeholder='Title'></input>
      <textarea placeholder='Description'></textarea>
      <input type="text" placeholder='Materials eg. ["material1","material2","material2"]'></input>
      <textarea placeholder='Instructions eg. ["step1","step2","step3"]'></textarea>
      <span><input type="checkbox"  />This is a private recipe</span>
      <button> Add</button>
      </div>
      
    </div>
    </div>
  )
}

export default eggsbee

