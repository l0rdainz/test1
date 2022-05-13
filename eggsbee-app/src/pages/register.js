import React, {useState,useEffect} from 'react';
import container from '../assets/container.png';
import "../styles/register.css";
import axios from 'axios';
import {useAuth0} from "@auth0/auth0-react";
import fakeeb from "../assets/fakeeb.png"
import { Row,Col} from "react-bootstrap";
import {FaPlus} from 'react-icons/fa';
import Linechart from './../components/linechart.js'
const BASE_URL = process.env.REACT_APP_BASE_URL;


function Register() {
    const {user} = useAuth0();
    const [Haseggsbee, SetHaseggsbee] = useState ([])
    
    const[Submitted,SetSubmitted] = useState(false)
    const[Toggle,SetToggle] = useState(true)
    const[name,setName] = useState("")
    const[eggsbeeid,setEggsbeeid] = useState("")
    const handleClose = () => SetToggle(false);
  const handleShow = () => SetToggle(false);
  const addeggsbee=()=>{
    console.log("hi")
    document.getElementById('collection').style.display = 'none';
      document.getElementById('register').style.display = 'block';
      SetToggle(false)
  }
  const registereggsbee = async()=>{
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    console.log(BASE_URL)
    axios.post(BASE_URL+'eggsbee/',{
        Name: `${name}`,
        Eggsbeeid: `${eggsbeeid}`,
        OwnerEmail: user.email
    })
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  useEffect(() => {  
    const fetcheggsbee = async()=>{
    const response = await fetch(BASE_URL+'eggsbee/owneremail?email='+user.email)
    const recipes = await response.json()
    if (recipes.length != 0){
      SetHaseggsbee(recipes)
      console.log(recipes)
      document.getElementById('collection').style.display = 'block';
      document.getElementById('register').style.display = 'none';
    }
  }
    fetcheggsbee()
    },[])
    
    
     

  return (
    <div>
    <div>
        {Toggle ? (
        <div className='register' id='register'>
        <img src={container} />
        <h2>No devices</h2>
        <button onClick={handleShow}>Add Device</button>
        </div>
        ):(
            // to register new eggsbee
            <div className='form'>
                <h1>Register</h1>
                 <input type="text" value={eggsbeeid} placeholder="EggsbeeId (xxx-xxx-xxxx)"
          onChange={(e) => setEggsbeeid(e.target.value)}/>
               <br></br>
               <input type="text" value={name} placeholder="Name (E.g My Fav Eggsbee)"
          onChange={(e) => setName(e.target.value)}/>
          <br></br>
                <button onClick={()=>SetSubmitted(true)+registereggsbee()+setName("")+setEggsbeeid("")}> Submit</button>
                <br></br>
                {Submitted ?(
                <h2>Your Eggsbee has been registered. </h2>):("")}
                </div>

        )}
    </div>
    <div id='collection'>
      <h2><u>My Devices:</u></h2>
      <Row>
    {Haseggsbee.map((eggsbee) => (<Col xs={12} sm={6} md={4}><div>
      <button className='Product'><img src={fakeeb}/> <p>Name: {eggsbee.Name}<br></br>Status: Offline </p> </button>
      
      </div> </Col>))} 
      </Row> 
      <button onClick={addeggsbee}><FaPlus></FaPlus> Add a new Eggsbee</button>
    </div>
    <div >
      <Linechart></Linechart>
    </div>
    </div>
  )
}

export default Register