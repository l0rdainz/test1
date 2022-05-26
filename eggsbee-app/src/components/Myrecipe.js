import React, {useState,useEffect} from 'react'
import {useAuth0} from "@auth0/auth0-react";


function Myrecipe() {
    const {user,isAuthenticated} = useAuth0();
  
    
  return (
    <div>{isAuthenticated ? (
        <span>Test</span>
    ): <span>Not logged in. Please log in to view your recipe.</span>}</div>
  )

}

export default Myrecipe

// check if user is logged in, will not display recipes if user is not