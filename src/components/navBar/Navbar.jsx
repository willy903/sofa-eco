import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { BiSearch } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { IoMenuOutline } from "react-icons/io5";
import logo from "./../assets/logo.png";
import { ShopContext } from "../../context/ShopContext";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const { getDefaultTotalItems } = useContext(ShopContext);
  const [first, setFirst] = useState(false);
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <Link to="/">
            <h3>HouseNiture</h3>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Products</Link>
            </li>
            <li>
              <Link to="/Support">support</Link>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
        <div className="nav-icon">
          <div className="icon-login hideMobile">
            <Link to="/LoginSignup">
              <BsPersonCircle size={20} />
            </Link>
          </div>
          <div className="icon-cart hideMobile">
            <Link to="/Cart">
              <BsCart size={20} />
              <span className="circleCount">{getDefaultTotalItems()}</span>
            </Link>
          </div>
          <div className="icon-menu">
            {first ? (
              <IoCloseOutline size={30} onClick={() => setFirst(false)} />
            ) : (
              <IoMenuOutline size={30} onClick={() => setFirst(true)} />
            )}
          </div>
        </div>
      </div>
      {first ? (
        <div className="mobile">
          <ul>
            <li>
              <Link to="/" onClick={() => setFirst(false)}>Home</Link>
            </li>
            <li>
              <Link to="/Product" onClick={() => setFirst(false)}>Products</Link>
            </li>
            <li>
              <Link to="/Support" onClick={() => setFirst(false)}>support</Link>
            </li>
            <li>
              <a href="#contact" onClick={() => setFirst(false)}>contact</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
