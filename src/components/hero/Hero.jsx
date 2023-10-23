import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='heroSection'>
        <div className="descr">
            <h1>Best Fourniture<br/> for your interior</h1>
            <p>Welcome to HouseNiture, your online destination to discover the most stylish and practical interior home furnishings. At HouseNiture, we understand the importance of creating an interior that reflects your unique style. Explore our wide range of high-quality products to make your home even more cozy and welcoming.</p>
            <div className='ActionHero'>
                <button className='btn-buy'>buy now</button>
                <button className='btn-prod'>View products</button>
            </div>
        </div>
    </div>
  )
}

export default Hero