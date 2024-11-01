import React from 'react'
import './Hero.css'



import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (

    
    <div className='hero container'>
        <div className='hero-text'>
        <h1>Saving Today for a secure Tomorrow....</h1>
        <p>A bank is a financial institution that provides a wide range of financial services to individuals, businesses, and governments.</p>
        <button className='btn'>Explore more<img  src={dark_arrow} alt=''/></button>
        
        

        </div>
      
    </div>
  )
}

export default Hero
