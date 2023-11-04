import React from "react";
import "./productDisplay.css";
import { AiFillStar } from "react-icons/ai";

const ProductDisplay = (props) => {
  const {product} = props
  return (
    <div className="fileProduct">
      <div className="container-descipt">
        <div className="container-item illustration">
          <img src={product.imageURL} alt="" />
        </div>
        <div className="container-item des">
          <h1>{product.name} </h1>
          <p className="priceDescript">€{product.new_price} </p>
          <div className="btnCard">
            <input type="submit" value="Add to card" />
          </div>
          <p className="textDescript">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            nam aliquid commodi magni vitae suscipit cum quisquam enim est
            adipisci similique distinctio officia eligendi, dignissimos iste
            laboriosam? Maiores, ut voluptatum? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Non harum eos ullam sed, dolorem quia
            in ducimus eligendi earum officiis aspernatur commodi voluptas
            corrupti quaerat hic sit suscipit! Obcaecati, rem?
          </p>
          <div className="star">
            <span>Avis:</span>
            <span className="siStar">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
