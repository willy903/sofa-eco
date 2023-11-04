import React from "react";
import all_product from "./../all_product";
import Item from "./../components/item/Item";
import "./items.css"

const Items = (props) => {
  return (
    <div className="boxProd">
      <div className="itemBproduct">
        {all_product.map((item, i) => {
          if (
            props.CategChecked === item.category &&
            props.CategChecked !== "all"
          ) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.imageURL}
                price={item.new_price}
              />
            );
          } else if (
            props.CategChecked !== item.category &&
            props.CategChecked === "all"
          ) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.imageURL}
                price={item.new_price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Items;
