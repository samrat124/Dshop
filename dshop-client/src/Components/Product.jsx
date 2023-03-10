import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CatgCard from './CatgCard'
import ProductCard from './ProductCard'


const Product = () => {
  const[product,setProduct]=useState([])
  const[filter,setFilter]=useState(false);
  const [ftData,setFtData]=useState(null);
  const [price,setPrice]=useState([]);
    let {name}=useParams();
    console.log(name);
    useEffect(()=>{
      axios.get('https://api.escuelajs.co/api/v1/products').then((res)=>{
        setProduct(res.data)
        if(filter){
          if(ftData=='esc'){
          let data1=(res.data).sort((a,b)=>{
            return a.price-b.price
          })
          setProduct(data1);
        }
        else if(ftData=='desc'){
          let data2=(res.data).sort((a,b)=>{
            return b.price-a.price
          })
          setProduct(data2)
        }
        
        }
        setProduct(res.data);console.log(res.data)

    })
    },[product])
    let handleFilter=(e)=>{
      setFtData(e.target.value);
      setFilter(true);
      if(ftData=='asc')
       setPrice(product.sort(function(a,b){return a.price-b.price}))
      else{
        setPrice(product.sort(function(a,b){return b.price-a.price}))
      }
    }
    let showData=()=>{
      if(filter){
        // price.map((ele,index)=>{
        //   return  <ProductCard {...ele}/>
        // })
      }
      else{
   
    }
    }

  return (
    <div>
      <select name="Sort" id="" onChange={handleFilter}>
         
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'5%',padding:'5%',marginTop:'20px'}}>
      
      {
        product.map((ele,index)=>{
          return  <ProductCard {...ele}/>
        })
      }</div>
      </div>
  )
}

export default Product