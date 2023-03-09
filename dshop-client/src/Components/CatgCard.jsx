import React from 'react'
import { Link } from 'react-router-dom'

const CatgCard = (props) => {
    console.log(props)
    let{image,name}=props
  return (
   <Link to={`/product/${name}`}> <div >
        <img style={{width:'100%'}} src={image} alt={name} />
        <h3 style={{}}>{name}</h3>
    </div>
    </Link>
  )
}

export default CatgCard