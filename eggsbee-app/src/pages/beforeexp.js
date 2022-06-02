import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import Select from 'react-select';
import '../styles/beforeexp.css';
import {useAuth0} from "@auth0/auth0-react";

const BASE_URL = process.env.REACT_APP_BASE_URL;
function Beforeexp() {
    const {user} = useAuth0();
    const [loading,Setloading]=useState(true)
    const [eggsbeeoptions,Seteggsbeeoptions] = useState([])
    const location = useLocation()
    const { recipe } = location.state //retrieve the prop passed to link
   
    useEffect(() => {  
        const fetcheggsbee = async()=>{
        const response = await fetch(BASE_URL+'eggsbee/owneremail?email='+user.email) //fetch eggsbee owned by loggedin user
        const eb = await response.json()
        if (eb.length !== 0){ //check whether there is any eggsbee owned by user
          const eggsbee = eb.map(item => { //remap it into an array with values and labels
            const container = {};
        
            container.value = item.Eggsbeeid;
            container.label = item.Name;
        
            return container;
        })
          Seteggsbeeoptions(eggsbee) //if yes save it in state
          console.log(eggsbee)
        }
      }
        fetcheggsbee()
        Setloading(!loading) //toggle loading only after information is fetched
        },[])
  
  return (

    <div className='mainbody'>
        {loading? <div>This is loading....Please wait as patiently as you can</div>: <div>
            <h1>Experiment Set-Up</h1>
            <br></br>
            <div className="row-flex">
            <div className='leftblock'>
            <img src={recipe.Img[0]} alt="recipeimage" /> </div>
            <div className='rightblock'>
            <h4> <b>Recipe Selected: </b>{recipe.Title}</h4>
            <h4><b>Description:</b></h4><p>  {recipe.Description}</p>
            <h4 id="ingredients"><b>Ingredients:</b> <ul>{recipe.Materials.map((item,idex)=>( <li>{item}</li>))}</ul></h4>
            </div>
            </div> 
            <div className='col-flex'>
            <div>
              <br></br>
            <h3>Select your Eggsbee :</h3> 
            <Select options={eggsbeeoptions} />
            </div>
            <br></br>
            <div><p>
              Please ensure that the following steps are completed before starting the experiment:
              </p><p>insert some pre-fermentation instruction or whatever you want me to show
              </p>
              <button>Start Fermentation</button>
              </div>
            </div>
           </div>}
    </div>
  )
}

export default Beforeexp