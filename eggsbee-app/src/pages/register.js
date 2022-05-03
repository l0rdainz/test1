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
    axios.post('http://192.168.1.166:8082/api/eggsbee/',{
        Name: `${name}`,
        Eggsbeeid: `${eggsbeeid}`,
    })
    .then(res => {
        console.log(res);
        console.log(res.data);
      })
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
  )
}

export default Register