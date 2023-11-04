import React from 'react'
import { Link } from 'react-router-dom'
import './item.css'

const Item = (props) => {
  return (
    <div className='itemContainer'>
      <Link to={`/signleproduct/${props.id}`} ><img src={props.image} alt=""/></Link>
        <h1>{props.name} </h1>
        <div>
            <span>€{props.price} </span>
            <button>Add to card</button>
        </div>
    </div>
  )
}

export default Item