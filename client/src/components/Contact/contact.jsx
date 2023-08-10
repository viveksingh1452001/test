import React from 'react'
import './style.css'

function Contact() {
  return (
    <div className="container">

     <h1>CONTACT US</h1>
      <div className="main">
        <div className="child item-1">
          <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
          <p>PHONE: <span>8865054199</span></p>
          <div class="hoverEffect">
            <div>
            </div>
          </div>
        </div>
        <div className="child item-2">
          <i class="fa fa-bug fa-lg" aria-hidden="true"></i>
          <p>BUG: <span>2xbt45rfd</span></p>
          <div class="hoverEffect">
            <div>
            </div>
          </div>
        </div>
        <div className="child item-3">
          <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
          <p>EMAIL: <span>xugudgyudxxxx@gmail.com</span></p>
          <div class="hoverEffect">
            <div>
            </div>
          </div>
        </div>

      </div>
      

      <div className="contact">
        <h2>Get in touch</h2>
         <form className='form'>
          <input className='items name' type="text" name="name" placeholder='Name' />
          <input className='items email' type="text" name="emial" placeholder='Email' />
          <input className='items phone' type="text" name="phone" placeholder='Phone' />
          <textarea className=' textarea' name="message"  id="msg" cols="30" rows="10" placeholder='Message'></textarea>
          <button type="submit">Submit</button>
         </form>
      </div>


    </div>
  )
}

export default Contact