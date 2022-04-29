import React, {useState} from 'react'
import container from '../assets/container.png'
import "../styles/register.css"


function Register() {
    const[toggle,SetToggle] = useState(false)
    const handleClose = () => SetToggle(false);
  const handleShow = () => SetToggle(true);
  return (
    <div>
        <div className='register'>
        <img src={container} />
        <h2>No devices</h2>
        <button onClick={handleShow}>Add Device</button>
        </div>
        
    </div>
  )
}

export default Register