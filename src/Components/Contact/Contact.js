import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfd55438-2cdc-4076-9cb2-1c5bdf87e4aa");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>Send us a Message <img src={msg_icon} alt="" /> </h3>
        <p>

          A bank is a financial institution that provides a wide range of financial services
          to individuals, businesses, and governments. These services typically include accepting
          deposits, lending money, facilitating payments, and managing investments. Banks play a crucial role
          in the economy by channeling funds from savers to borrowers and providing liquidity for
          the smooth functioning of markets. They also offer financial advice, investment opportunities,
          and a safe place for customers to store their money. Banks operate under regulatory frameworks to ensure safety,
          soundness, and fairness in their operations, aiming to build trust and confidence among their clients."</p>
        <ul>
          <li><img src={mail_icon} alt='' /> Contact@Samuel.dev</li>
          <li><img src={phone_icon} alt='' />13445545 556</li>
          <li><img src={location_icon} alt='' />CHENNAI</li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type='tel' name='phone' placeholder='Enter your mobile' required />
          <label>Write your Message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' reqiuired></textarea>
          <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
