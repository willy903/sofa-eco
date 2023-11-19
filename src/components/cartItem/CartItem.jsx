import React, { useContext } from "react";
import "./CartItem.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { ShopContext } from "../../context/ShopContext";

const CartItem = () => {
  const {getDefaultTotalItems,getTotalPrice,all_product,cartitems,addToCart,removeFromcart} = useContext(ShopContext)
  let totalOrder= 0
  return (
    <div className="containerCart">
      {all_product.map((e,i)=>{
        if(cartitems[e.id]>0){
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
        return null
      })}
      <div className="summary">
        <h4>Total : <span>{getTotalPrice()} $</span></h4>
        <h4>Total order : <span>{getDefaultTotalItems()} </span></h4>
      </div>
        <div className="actionCart">
          <button className="order">Checkout</button>
        </div>
      
    </div>
  );
};

export default CartItem;
