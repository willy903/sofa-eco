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
        if (x === 'x'){
            setCartitems((prev)=>({...prev, [itemId]:prev[itemId]*0}))
        }else{
            setCartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
        }

        
    }
    const getTotalPrice = () =>{
        let totalprice = 0
        
        for(const item in cartitems){
            if(cartitems[item]>0){
                const itemInfo = all_product.find((product) => product.id === Number(item))
                totalprice += itemInfo.new_price*cartitems[item]
            }
        }
        return totalprice
    }
    const getDefaultTotalItems = () =>{
        let totalItems = 0
        for (const item in cartitems){
            if(cartitems[item]>0){
                totalItems += cartitems[item]
            }
        }
        return totalItems
    }

    const contextValue = {getTotalPrice,getDefaultTotalItems,all_product,cartitems,addToCart,removeFromcart}

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;