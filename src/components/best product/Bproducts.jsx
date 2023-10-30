import React from "react";
import "./bproduct.css";
import Item from './../item/Item';
import all_product from './../../all_product';

const Bproducts = () => {
  return (
    <div className="best-prod">
      <div className="contbest">
        <div className="present">
          <h1>Our best products</h1>
          <p>
            Explore our handpicked selection of premium products. We take pride
            in offering top-quality items that cater to your needs and
            preferences. From cutting-edge technology to stylish accessories,
            discover the best of what we have to offer.
          </p>
        </div>
        <div className="itemBproduct">
          {all_product.map((item)=>{
            if(item.note>=5){
              return <Item  key={item.id} name={item.name} image={item.imageURL} price={item.new_price} />
            } 
          })}
        </div>
      </div>
    </div>
  );
};

export default Bproducts;
