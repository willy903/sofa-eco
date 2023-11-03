import React from "react";
import "./categorie.css";
import table from "./../assets/table-a-dinner.png";
import bookshell from "./../assets/etagere-a-livres.png";
import sofa from "./../assets/sofa.png";
import bed from "./../assets/lit-double.png";

const Categories = ({CatVal, onchangeCatVal}) => {
  return (
    <div className="container-categories">
      <div className="items-categories">
        <div className="item1">
          <h1>top categories</h1>
          <p>
            Explore our diverse collection of furniture, decor, textiles, and
            interior accessories.
          </p>
          <button onClick={(e)=> onchangeCatVal("all")}>view all</button>
        </div>
        <div className="item2">
          <label htmlFor="bed">
            <input type="radio" id="bed" name="categoryRadio"  onChange={(e)=>onchangeCatVal(e.target.value)} value="bed" />
            <img src={bed} alt="bed" />
          </label>
          <label htmlFor="table">
            <input type="radio" id="table" name="categoryRadio"  onChange={(e)=>onchangeCatVal(e.target.value)} value="table" />
            <img src={table} alt="drinking table" />
          </label>
          <label htmlFor="bookshell">
            <input type="radio" id="bookshell" name="categoryRadio"  onChange={(e)=>onchangeCatVal(e.target.value)} value="bookshell" />
            <img src={bookshell} alt="bookshell" />
          </label>
          <label htmlFor="sofa">
            <input type="radio" id="sofa" name="categoryRadio" onChange={(e)=>onchangeCatVal(e.target.value)} value="sofa" />
            <img src={sofa} alt="sofa" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Categories;
