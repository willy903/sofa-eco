import React from 'react'
import './productExplore.css'
import exp1 from './../assets/exp1.jpg'
import exp2 from './../assets/exp2.jpg'
import exp3 from './../assets/exp3.jpg'

const ProductsEx = () => {
  return (
    <div className='prod-section'>
        <div className="secion-products">
            <div className='prod'>
                <div className="item itemspecifi">
                    <h1>Designed to create<br/> great experience</h1>
                    <p>Explore our exquisite range of home interior products designed to elevate your living space.</p>
                    <button className='exp1'>explore now</button>
                </div>
                <div className="item">
                    <img src={exp1} alt="" />
                </div>
            </div>
            <div className='prod'>
            <div className="item">
                    <img src={exp2} alt="" />
                </div>
                <div className="item itemspecifi">
                    <h1>make a magic world with us</h1>
                    <p>We take pride in presenting a diverse selection of high-quality furnishings and decor items tailored to your unique style and preferences.</p>
                    <button className='exp2'>ask for a quotation</button>
                </div>
            </div>
            <div className='prod'>
                <div className="item itemspecifi">
                    <h1>Trust us for your design.</h1>
                    <p>Put your trust in us for top-notch design solutions. Our expertise and creativity are at your service, ensuring your vision becomes a stunning reality. We're dedicated to making your design dreams come true.</p>
                    <button className='exp3'>contact us</button>
                </div>
                <div className="item">
                    <img src={exp3} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductsEx