import React from 'react'
import "./navbar.css"
import {BiSearch} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import logo from './../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-container">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <h3>HouseNiture</h3>
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>support</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="nav-icon">
                <div className="icon-search"><BiSearch size={20}/> </div>
                <div className="icon-login"><BsPersonCircle size={20} /></div>
                <div className="icon-cart"><BsCart size={20} /><span className='circleCount'>0</span></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar