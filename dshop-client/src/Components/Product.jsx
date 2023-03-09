import React from 'react'
import { useParams } from 'react-router-dom'


const Product = () => {
    let {name}=useParams();
    console.log(name);
  return (
    <div>Product</div>
  )
}

export default Product