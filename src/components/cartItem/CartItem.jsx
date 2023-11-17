import React, { useContext, useState } from "react";
import "./CartItem.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const {all_product,cartitems,addToCart,removeFromcart} = useContext(ShopContext)
  let totalPrice = 0
  let totalOrder= 0
  return (
    <div className="containerCart">
      {all_product.map((e,i)=>{
        if(cartitems[e.id]>0){
          totalPrice = totalPrice + e.new_price*cartitems[e.id]
          totalOrder = totalOrder+1
          return <div className="CartItem" key={i}>
          <div className="ItemCart imagePresent">
            <img src={e.imageURL} alt="" />
          </div>
          <div className="ItemCart">
            <h1>{e.name} </h1>
            <h2>{e.new_price*cartitems[e.id]} $</h2>
          </div>
          <div className="ItemCart confItem">
            <div>
              <AiOutlinePlusCircle size={"30px"} onClick={() => addToCart(e.id)} />
            </div>
            <div>
              <h1 className="countCart">{cartitems[e.id]} </h1>
            </div>
            <div>
              <AiOutlineMinusCircle size={"30px"} onClick={() => removeFromcart(e.id,'false')} />
            </div>
          </div>
          <div className="itemsCart confItem">
            <button className="remove" onClick={() => removeFromcart(e.id,'x')}>x</button>
          </div>
        </div>
        }
      })}
      <div className="summary">
        <h4>Total : <span>{totalPrice} </span></h4>
        <h4>Total order : <span>{totalOrder} </span></h4>
      </div>
        <div className="actionCart">
          <button className="empty">Empty cart</button>
          <button className="order">Checkout</button>
        </div>
      
    </div>
  );
};

export default CartItem;
