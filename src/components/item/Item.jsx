import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './item.css'
import { ShopContext } from './../../context/ShopContext';

const Item = (props) => {
  const {addToCart} = useContext(ShopContext)
  
  return (
    <div className='itemContainer'>
      <Link to={`/signleproduct/${props.id}`} onClick={()=> window.scrollTo({top:0,left:0,behavior:"smooth"})} ><img src={props.image} alt=""/></Link>
        <h1>{props.name} </h1>
        <div>
            <span>€{props.price} </span>
            <button onClick={()=>{addToCart(props.id)}}>Add to card</button>
        </div>
    </div>
  )
}

export default Item