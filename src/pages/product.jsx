import React, { useState } from 'react'
import HeroProduct from '../components/heroPtoduct/HeroProduct';
import Categories from './../components/categories/Categories';
import Items from './../items/Items';

function Product() {
  const [valOfCat,stvalOfCat] = useState("")
  return (
      <>
        <HeroProduct/>
        <Categories CatVal={valOfCat} onchangeCatVal={stvalOfCat}/>
        <Items CategChecked={valOfCat} />
        
      </>
  )
}

export default Product