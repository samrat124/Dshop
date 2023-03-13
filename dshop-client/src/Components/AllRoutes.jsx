import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Category from './Category'
import Login from './Login'
import Product from './Product'
import ProductDetails from './ProductDetails'
// import Auth from './Auth'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Category/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/product/:name' element={<Product/>}/>
            <Route path='/details/:id' element={<ProductDetails/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes