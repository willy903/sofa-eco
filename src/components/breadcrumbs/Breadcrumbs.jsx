import React from 'react'
import './breadcrumbs.css'
const Breadcrumbs = (props) => {
    const {product} = props
  return (
    <div className='containerBreadcrumbs'>
        <div><span>Home ></span><span>Product ></span><span>{product.name} </span></div>
    </div>
  )
}

export default Breadcrumbs