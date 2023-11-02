import React from 'react'
import Hero from '../components/hero/Hero';
import Categories from '../components/categories/Categories';
import ProductsEx from '../components/productsExplore/ProductsEx';
import Bproducts from '../components/best product/Bproducts';
import WhoUs from '../components/whoUs/WhoUs';

const Home = () => {
  return (
    <div>
            <Hero/>
            <Categories/>
            <ProductsEx/>
            <Bproducts/>
            <WhoUs/>

    </div>
  )
}

export default Home