import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Category from './Category'
import Login from './Login'
import Product from './Product'
// import Auth from './Auth'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Category/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product/:name' element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes