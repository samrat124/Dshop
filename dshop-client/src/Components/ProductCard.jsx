import React from 'react'

const ProductCard = (props) => {
    let {category,title,price}=props;
  return (
    <div>
        <img style={{width:'100%',height:'300px'}} src={category.image} alt="" />
    <h3>{price}</h3>
    <h3>{title}</h3>
    </div>
  )
}

export default ProductCard