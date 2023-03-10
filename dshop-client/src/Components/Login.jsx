import React, { useState } from 'react'
import './login.css'

const Login = () => {
  // const [email,setEmail]=useState(null);
  // const[password,setPassword]=useState(null);
  const[input,setInput]=useState('');
  let handleSubmit=(e)=>{
   e.preventDefault()
   
  }
  let handleChange=(e)=>{
    e.preventDefault()
    let name=e.target.name;
     const value=e.target.value;
    let password=e.target.password;
    setInput(values=>({...values,[name]:value}))
     
     console.log(input);
    
  }
  return (
    <div  >
      <div  className='loginForm'> 
      <form onSubmit={handleSubmit}  >
        <h1>LOGIN</h1>
        <br/>
        <br/>
        <input type="email" placeholder='Enter Your Email Id'name='email' onChange={handleChange}/>
        <br/>
        <br/>
        <input type="password" placeholder='Enter Password' name='password' onChange={handleChange}/>
        <br/>
        <br/>
        <input type="submit" />
      </form>
      </div>
    </div>
  )
}

export default Login