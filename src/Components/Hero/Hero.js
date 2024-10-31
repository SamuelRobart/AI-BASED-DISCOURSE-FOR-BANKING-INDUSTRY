import React from 'react'
import './Hero.css'
import s1 from '../../assets/wal/1 (1).jpg'
import s2 from '../../assets/wal/1 (2).jpg'
import s3 from '../../assets/wal/1 (3).jpg'
import s4 from '../../assets/wal/1 (4).jpg'
import s5 from '../../assets/wal/1 (5).jpg'
import s6 from '../../assets/wal/1 (6).jpg'

import Marquee from 'react-fast-marquee'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>Saving Today for a secure Tomorrow.</h1>
        <p>A bank is a financial institution that provides a wide range of financial services to individuals, businesses, and governments.</p>
        <button className='btn'>Explore more<img  src={dark_arrow} alt=''/></button>
        
        

        </div>
      
    </div>
  )
}

export default Hero
