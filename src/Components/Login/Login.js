// import React, { useState } from 'react'
// import './Login.css'

// import user_icon from '../../assets/person.png'
// import email_icon from '../../assets/email.png'
// import password_icon from '../../assets/password.png'


// const Login = () => {


//     const [action,setAction] = useState("Login");

//     const [values, setValues] = useState({
//         email:" ";,
//         password:""
//     })

//   return (
//     <div>
//     <form action=''>
//     <div className='Lcontainer'>
        
//         <div className='Lheader'>
//             <div className='Ltext'>{action}</div>
//             <div className='underline'></div>
//         </div>

//         <div className='inputs'>
//             {action==="Login"?<div> </div> : <div className='input'>
//                 <img src={user_icon} alt=''/>
//                 <input type='text' placeholder='Name'/>
//             </div>}

            
//             <div className='input'>
//                 <img src={email_icon} alt=''/>
//                 <input type='email' placeholder='Email Id'/>
//             </div>

//             <div className='input'>
//                 <img src={password_icon} alt=''/>
//                 <input type='password 'placeholder='Password'/>
//             </div>
//         </div>
//         {action==="Sign Up"? <div> </div> :<div className='forgot-password'>Forgot Password? <span> Click Here!  </span></div>}
        
//         <div className='submit-container'>
//             <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//             <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
//         </div>
      
//     </div>
//     </form>
//     </div>
//   )
// }

// export default Login
