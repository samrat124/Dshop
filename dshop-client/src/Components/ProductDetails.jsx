import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
    const[detail,setDetail]=useState({});
    let {id}=useParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res)=>{setDetail(res.data);console.log(res.data)})
    },[])
  return (
    <div>
        <img src={detail.image} alt="" />
     </div>
  )
}

export default ProductDetails