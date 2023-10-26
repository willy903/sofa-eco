import React from 'react'
import './home.css'
import Hero from './../../components/hero/Hero';
import Categories from './../../components/categories/Categories';
import ProductsEx from './../../components/productsExplore/ProductsEx';
import Bproducts from './../../components/best product/Bproducts';

const Home = () => {
  return (
    <div>
            <Hero/>
            <Categories/>
            <ProductsEx/>
            <Bproducts/>
    </div>
  )
}

export default Home