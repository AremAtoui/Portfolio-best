import React from 'react'
import './home.css';

import { FaSuitcase } from "react-icons/fa";
import {AiFillBook, AiOutlineUser} from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";
import img1 from '../assests/images/img1.png';
import { Tilt } from 'react-tilt';
function Home() {
  return (
    <div className="App">
      <div className="Big">
   
        
        
        
        
         <Tilt style={{marginTop:"27px"}}>
      <div > <img className="Name" src={img1} /></div>
    </Tilt>
       
        <div class="main-text" id="selector"><h3 style={{color:"white"}}>Hi there !</h3>
        <h1 class="ah-headline d-flex" style={{color:"white"}}> I'M 
          <div><span>  a web developer</span><span class="sc-bdVaJa bBePZj"></span></div></h1>
          <p style={{color:"white"}}> 
            Am a graduate in research master's degree in Computer Science and Multimedia at the Higher Institute of Computer Science and Multimedia of Gabes.
            I am looking for an internship for a job offer. Dynamic and having an exellent sense of contact.
            I like to collaborate with various interlocutors.
            Voluntary, I distinguish myself by my commitment to the service of the collective and my taste for learning.
          </p>
          <div class="call-to-actions-home">
            <div class="text-left" style={{margin:"-7px"}}>
              <a href="/about" class="btn btn-secondary link-portfolio-two" >
                <span><i class="fa fa-suitcase"></i>MORE ABOUT ME</span></a>
              <a href="/portfolio" class="btn btn-secondary link-portfolio-two" >
                <span><FaSuitcase></FaSuitcase><i class="fa fa-suitcase"></i>PORTFOLIO</span></a>
                {/* <a href="/contact" class="btn btn-secondary link-portfolio-two" style={{ backgroundColor: "#72b626", borderRadius:"20px",  margin: "10px" }} >
                <span><AiFillBook></AiFillBook><i class="fa fa-suitcase"></i>CONTACT</span></a> */}
            </div></div>
      
            </div>
         
            </div>
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
            <span><BsFillGearFill > </BsFillGearFill> PURCHASE</span></a><div id="hideSwitcher">×</div></div></div>
      <div id="showSwitcher" class="styleSecondColor" ><BsFillGearFill className="Bi"></BsFillGearFill>

      </div>

   </div>


  )
}

export default Home