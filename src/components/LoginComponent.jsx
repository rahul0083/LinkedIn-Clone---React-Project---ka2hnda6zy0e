import React, { useState } from 'react'
import { LoginAPI,RegisterAPI } from '../api/AuthAPI'

export default function LoginComponent() {

  const [credentials,setCredentials]=useState({});

  const login=()=>{

    try{
      let res= RegisterAPI(credentials.email,credentials.password);
      console.log(res);
    }
    catch(err){

    }
   
  };
  return (
    <div>
      <h1>Login Component</h1>
      <input  placeholder='email' onChange={(event)=>setCredentials({...credentials,email:event.target.value})} />
      <input  placeholder='password' onChange={(event)=>setCredentials({...credentials,password:event.target.value})} />
      <button onClick={login}>Login</button>
    </div>
  )
}
