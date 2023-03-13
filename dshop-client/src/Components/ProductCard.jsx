import React from 'react'
import {Link} from 'react-router-dom'

const ProductCard = (props) => {
    let {category,id,image,title,price}=props;
  return (
    <Link to={`/details/${id}`}><div>
        <img style={{width:'80%',height:'150px'}} src={image} alt="" />
    <h3>{price}</h3>
    <h3>{title}</h3>
    </div></Link>
  )
}

export default ProductCard