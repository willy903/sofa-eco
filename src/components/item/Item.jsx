import React from 'react'
import './item.css'

const Item = (props) => {
  return (
    <div className='itemContainer'>
        <img src={props.image} alt=""/>
        <h1>{props.name} </h1>
        <div>
            <span>€{props.price} </span>
            <button>Add to card</button>
        </div>
    </div>
  )
}

export default Item