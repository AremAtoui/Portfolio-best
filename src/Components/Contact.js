import React from 'react'
import './contact.css';
import {MdOutlineMailOutline} from 'react-icons/md';
import {BsFillGearFill, BsMessenger, BsWhatsapp} from 'react-icons/bs';
import {IoIosArrowDropupCircle} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';


function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jdig26m', 'template_4wtcdcm', form.current, 'HEy-cTgaDwwZhB7lE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact' >
    <div class="container page-title text-center"><h2 class="text-center" style={{fontSize: "48px"}}>get <span>in touch</span></h2>
    <span class="title-head-subtitle">I’m always open to discussing product design work or partnerships.</span></div>
   
        <div className="container contact_container">
          <div className='contact_options'>
          <article className="contact_option">
            <MdOutlineMailOutline className='contact_option-icon' style={{color:"#72b626"}}/>
            <h4>Email</h4>
            <h5 style={{fontSize:"0.8rem"}}>arem.atoui@isimg.tn</h5>
            <a href="https://mail.google.com/mail/u/0/?hl=fr#inbox" style={{color:"#72b626"}}>Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger  className='contact_option-icon' style={{color:"#72b626"}} />
            <h4>Messenger</h4>
            <h5 >Arem Atoui</h5>
            <a href="https://www.facebook.com/" style={{color:"#72b626"}}>Send a message</a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon' style={{color:"#72b626"}}/>
            <h4>WhatsApp</h4>
            <h5 >+21627793044</h5>
            <a href='https://web.whatsapp.com/send?phone=27793044' style={{color:"#72b626"}} >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' placeholder='Your Message' required></textarea>
          <button className='btn primary' type='submit' style={{background:"#72b626", width:"128px", height: "35px"}}>Send Message</button>
        </form>
      </div>
       {/*-------* Footer*/}

   
        {/* <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section> */}

        {/* <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section> */}
         <div id="switcher" class="" >
        <div class="content-switcher">
          <h4>STYLE SWITCHER</h4><ul><li><a href="BsFillGearFill" title="blue" class="color">
            <img src="img/styleswitcher/blue.png" alt="blue" /></a></li><li><a href="#" title="red" class="color">
              <img src="img/styleswitcher/red.png" alt="red" /></a></li>
            <li><a href="#" title="goldrenrod" class="color">
              <img src="img/styleswitcher/goldenrod.png" alt="goldrenrod" /></a></li>
            <li><a href="#" title="magenta" class="color"><img src="img/styleswitcher/magenta.png" alt="magenta" /></a></li><li><a href="#" title="yellowgreen" class="color">
              <img src="img/styleswitcher/yellowgreen.png" alt="yellowgreen" /></a></li>
            <li><a href="#" title="orange" class="color"><img src="img/styleswitcher/orange.png" alt="orange" /></a></li>
            <li><a href="#" title="green" class="color"><img src="img/styleswitcher/green.png" alt="green" /></a></li>
            <li><a href="#" title="yellow" class="color"><img src="img/styleswitcher/yellow.png" alt="yellow" /></a></li></ul>
          <br />
          <a href="" class="waves-effect waves-light btn font-weight-600 purchase hoverable">
            <span><BsFillGearFill> </BsFillGearFill> PURCHASE</span></a><div id="hideSwitcher">×</div></div></div>
      <div id="showSwitcher" class="styleSecondColor" ><BsFillGearFill className="Bi"></BsFillGearFill>

      </div>

      

      
     
    </section>
  )
}

export default Contact