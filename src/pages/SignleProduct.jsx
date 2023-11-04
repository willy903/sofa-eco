import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from './../context/ShopContext';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import ProductDisplay from './../components/productDisplay/ProductDisplay';

const SignleProduct = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
const product = all_product.find((e)=> e.id === Number(productId))
console.log(product)
  return (
    <div>
      <Breadcrumbs product = {product} />
      <ProductDisplay product = {product} />
    </div>
  )
}

export default SignleProduct