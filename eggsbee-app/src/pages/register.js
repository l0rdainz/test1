import React, {useState} from 'react';
import container from '../assets/container.png';
import "../styles/register.css";
import axios from 'axios';


function Register() {
    const[Submitted,SetSubmitted] = useState(false)
    const[Toggle,SetToggle] = useState(true)
    const[name,setName] = useState("")
    const[eggsbeeid,setEggsbeeid] = useState("")
    const handleClose = () => SetToggle(false);
  const handleShow = () => SetToggle(false);
  const registereggsbee = async()=>{

  }
  return (
    <div>
        {Toggle ? (
        <div className='register'>
        <img src={container} />
        <h2>No devices</h2>
        <button onClick={handleShow}>Add Device</button>
        </div>
        ):(
            // to register new eggsbee
            <div className='form'>
                <h1>Register</h1>
                 <input type="text" value={eggsbeeid} placeholder="EggsbeeId (xxx-xxxx-xxxxx)"
          onChange={(e) => setEggsbeeid(e.target.value)}/>
               <br></br>
               <input type="text" value={name} placeholder="Name (My Fav Eggsbee)"
          onChange={(e) => setName(e.target.value)}/>
          <br></br>
                <button onClick={()=>SetSubmitted(true)}> Submit</button>
                {Submitted ?(
                <h2>Your Eggsbee has been registered. </h2>):("")}
                </div>

        )}
    </div>
  )
}

export default Register