import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {

  const slider= useRef();
  let tx=0;


const slideForward = () => {
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;
}

const slideBackward = () => {
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform =`translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt=""/>
                <div>
                  <h3>Samuel</h3>
                  <span>Chennai,TN</span>
                </div>
              </div>
              <p>Testimonials have reached an all-time high in
                 importance as the internet is now a plethora of
                  reviews (synonymous with testimonials). Websites
                   such as Yelp!, Google Maps, TripAdvisor, and
                    many more have become 'go to' places for 
                    individuals who are seeking other customers
                     reviews/testimonials about a particular
                      business. To put the growth of this 
                      industry into perspective, for example,
                       Yelp.com's growth
                        alone can be noted: 
                        Yelp.com has more than 71 million monthly unique visitors as of January 2012</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_2} alt=""/>
                <div>
                  <h3>Innocent</h3>
                  <span>Chennai,TN</span>
                </div>
              </div>
              <p>Testimonials have reached an all-time high in
                 importance as the internet is now a plethora of
                  reviews (synonymous with testimonials). Websites
                   such as Yelp!, Google Maps, TripAdvisor, and
                    many more have become 'go to' places for 
                    individuals who are seeking other customers
                     reviews/testimonials about a particular
                      business. To put the growth of this 
                      industry into perspective, for example,
                       Yelp.com's growth
                        alone can be noted: 
                        Yelp.com has more than 71 million monthly unique visitors as of January 2012</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_3} alt=""/>
                <div>
                  <h3>Robart</h3>
                  <span>Chennai,TN</span>
                </div>
              </div>
              <p>Testimonials have reached an all-time high in
                 importance as the internet is now a plethora of
                  reviews (synonymous with testimonials). Websites
                   such as Yelp!, Google Maps, TripAdvisor, and
                    many more have become 'go to' places for 
                    individuals who are seeking other customers
                     reviews/testimonials about a particular
                      business. To put the growth of this 
                      industry into perspective, for example,
                       Yelp.com's growth
                        alone can be noted: 
                        Yelp.com has more than 71 million monthly unique visitors as of January 2012</p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_4} alt=""/>
                <div>
                  <h3>SamJo</h3>
                  <span>Chennai,TN</span>
                </div>
              </div>
              <p>Testimonials have reached an all-time high in
                 importance as the internet is now a plethora of
                  reviews (synonymous with testimonials). Websites
                   such as Yelp!, Google Maps, TripAdvisor, and
                    many more have become 'go to' places for 
                    individuals who are seeking other customers
                     reviews/testimonials about a particular
                      business. To put the growth of this 
                      industry into perspective, for example,
                       Yelp.com's growth
                        alone can be noted: 
                        Yelp.com has more than 71 million monthly unique visitors as of January 2012</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
