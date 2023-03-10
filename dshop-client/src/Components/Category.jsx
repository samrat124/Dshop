import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CatgCard from './CatgCard'; 


const Category = () => {
    const [category,setCategory]=useState([]);
    
     useEffect(()=>{
       axios.get('https://api.escuelajs.co/api/v1/categories').then((res)=>{
        setCategory(res.data);
       })
     },[])
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'5%',padding:'5%',marginTop:'20px'}}>{
        category.map((ele,index)=>{
            return <  CatgCard {...ele}/>
        })
        }</div>
  )
}

export default Category