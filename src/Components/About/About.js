import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play_icon' onClick={() => 
            {setPlayState(true)}} />
        </div>

        <div className='about-right'>
            <h3>About BANK</h3>
            <h2>Nurturing tommorow Leader Today</h2>
            <p>A bank is a financial institution that provides a wide range of 
              financial services to individuals, businesses, and governments.
               These services typically include accepting deposits, lending money, facilitating payments, 
               and managing investments. Banks play a crucial role in the economy by 
               channeling funds from savers to borrowers and providing liquidity for the smooth 
               functioning of markets. They also offer financial advice, investment opportunities,
                and a safe place for customers to store their money. Banks operate under regulatory
                 frameworks to ensure safety, soundness, 
              and fairness in their operations, aiming to build trust and confidence among their clients."</p>
        </div>
      
    </div>
  )
}

export default About
