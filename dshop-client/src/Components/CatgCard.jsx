import React from 'react'

const CatgCard = (props) => {
    console.log(props)
    let{image,name}=props
  return (
    <div >
        <img style={{width:'100%'}} src={image} alt={name} />
        <h3 style={{}}>{name}</h3>
    </div>
  )
}

export default CatgCard