import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div style={{width:'100%', display:'flex',justifyContent:'space-around',height:'80px',backgroundColor:'black',position:'sticky',zIndex:'5',top:'0',alignItems:'center'}}>
      <h1 className='logoNav'>DSHOP</h1>
        <Link to='/'>Home</Link>
        <Link to='/product/name'>Product</Link>
         <Link to='/login'>Login</Link>
    </div>
  )
}

export default Navbar