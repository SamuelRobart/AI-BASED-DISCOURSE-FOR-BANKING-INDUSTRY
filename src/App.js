// import React from 'react'
// import Login from './Components/Login/Login'
// import {BrowserRouter, Routes,Route} from 'react-router-dom'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Login />}></Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default App



import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'
import { Helmet } from 'react-helmet'
// import Login from './Components/Login/Login'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>

    <Helmet>
    <meta name="google-adsense-account" content="ca-pub-1298362010587940"/>
    <title>AI BASED DISCOURSE FOR BANKING INDUSTRY</title>
    </Helmet>
      
      <Navbar/>
      <Hero/>
      
      <div className='container'>
        <Title subTitle='Our Program' title='DOMESTIC AND INTERNATIONAL LOAN FOR ACADEMICS'  />
        <Program/>
        <About setPlayState={setPlayState} />
        <Title subTitle='Gallery' title='OUR PERSPECTIVES'  />
        <Campus/>
        <Title subTitle='TESTIMONIALS' title='OUR CUSTOMER SAYS'  />
        <Testimonials/>
        <Title subTitle='Any Query' title='Get in Touch'  />
        <Contact/>
        <Footer/>

      </div>
      <Video playState={playState} setPlayState={setPlayState}></Video>
    </div>
  )
}

export default App;
