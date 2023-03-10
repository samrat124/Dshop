import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CatgCard from './CatgCard'
import ProductCard from './ProductCard'


const Product = () => {
  const[product,setProduct]=useState([])
    let {name}=useParams();
    console.log(name);
    useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{setProduct(res.data);console.log(res.data)})
    },[])

  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'5%',padding:'5%',marginTop:'20px'}}>
      {
      product.map((ele,index)=>{
        return  <ProductCard {...ele}/>
      })
      }</div>
  )
}

export default Product