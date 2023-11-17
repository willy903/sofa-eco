import React, { createContext, useState } from 'react'
import all_product from '../all_product'

export const ShopContext =createContext(null)

const getDefaultproduct = ()=>{
    const cart = {}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0; 
    }   
    return cart; 
}
const ShopContextProvider = (props) => {
    const [cartitems,setCartitems] = useState(getDefaultproduct)
    const x = 'x'
    
    const addToCart = (itemId)=>{
        setCartitems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
    }
    const removeFromcart = (itemId,x)=>{
        if (x == 'x'){
            setCartitems((prev)=>({...prev, [itemId]:prev[itemId]*0}))
        }else{
            setCartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        }

        
    }


    const contextValue = {all_product,cartitems,addToCart,removeFromcart}

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;