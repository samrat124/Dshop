import React from 'react'
import { useSelector } from 'react-redux'
import { redirect, useNavigate } from 'react-router-dom';
import { loginAction } from './Redux/Action'


const Auth = ({children}) => {
    // let navigate=useNavigate();
    let login=useSelector((e)=>e.loginData);
   if(login){
    return children
   }
   else{
    navigate('/login')
   }
}

export default Auth