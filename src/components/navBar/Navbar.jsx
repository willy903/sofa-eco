import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"
import {BiSearch} from 'react-icons/bi'
import {BsPersonCircle} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'
import logo from './../assets/logo.png'
import { ShopContext } from '../../context/ShopContext'

const Navbar = () => {
    const {getDefaultTotalItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
        <div className="nav-container">
            <div className="nav-logo">
           <img src={logo} alt="" />
            <Link to='/'><h3>HouseNiture</h3></Link>                
                
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Product'>Products</Link></li>
                    <li><Link to='/Support'>support</Link></li>
                    <li><a href='#contact'>contact</a></li>
                </ul>
            </div>
            <div className="nav-icon">
                <div className="icon-search"><BiSearch size={20}/> </div>
                <div className="icon-login"><Link to='/LoginSignup'><BsPersonCircle size={20} /></Link></div>
                <div className="icon-cart"><Link to='/Cart'><BsCart size={20} /><span className='circleCount'>{getDefaultTotalItems()}</span></Link></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar