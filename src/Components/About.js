import React, { useState } from 'react'
import './about.css';
import { AiOutlineCalendar } from "react-icons/ai";
import { BsFillGearFill } from 'react-icons/bs';
import AremResume from '../assests/images/AremResume.pdf';
import img1 from '../assests/images/img1.png';
import {HiDownload} from "react-icons/hi";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';
function About() {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
      setIsShowMore(!isShowMore);
    };
    return (
        <div >
            <section id="about" class="active">
                <div class="container page-title text-center">
                    <h2 class="text-center">about <span >me</span></h2>
                    <span class="title-head-subtitle">I design and code beautiful things, and I love what I do.</span></div>
                <div class="container infos"><div class="row personal-info"><div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                {/* <div class="col-12 resume-btn-container" ><a href="/" class="btn btn-resume">
                        <span><i class="fa fa-download"></i>Logout</span></a></div> */}
                   
                    <div   className=" Naa"
                  >
                    <div class="image-container">
                        <img class="img-fluid d-block" 
                        src={img1} alt=""  
                       /></div> </div> 
                <p class="d-block d-md-none"> </p></div><div class="row col-xl-6 col-lg-6 col-md-12"><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <ul class="list-1"><li><h6><span class="font-weight-600">First Name</span> Arem</h6></li><li><h6><span class="font-weight-600">Last Name</span> Atoui</h6></li><li><h6><span class="font-weight-600">Birthdate</span> 23-11-1996</h6></li><li><h6><span class="font-weight-600">Nationality</span> Tunisian</h6></li><li><h6><span class="font-weight-600">Address</span> Tunisia</h6></li></ul></div><div class="col-xl-6 col-lg-6 col-md-6 col-sm-6"><ul class="list-2" ><li><h6><span class="font-weight-600">Langages</span> Frensh</h6></li><li><h6><span class="font-weight-600">Phone</span> +216 27 793 044</h6></li><li><h6><span class="font-weight-600">Email</span> arem.atoui@isimg.tn</h6></li></ul></div>
                 
                
    <a href={AremResume} download className='btn primary' style={{marginLeft:"5px"}}>Download CV <HiDownload/></a>






                        
                        </div></div></div><div class="container col-12 mx-auto text-center">
                    <hr class="about-section" /></div>
                <div class="resume-container"><div class="container"><div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6"><h2 class="font-weight-600 uppercase title-section">Experience</h2>
                        <div class="resume-items">
                            <div class="item"><span class="bullet"></span>
                            <span className="vertical-line" />
                        <div class="">
                            <div class="card-header"><span class="year"><AiOutlineCalendar></AiOutlineCalendar><i class="fa fa-caret-right"></i>01-2021/09-2021</span>
                            <span class="d-block font-weight-400 uppercase">MASTER Degree<span class="separator"></span>
                                <span class="font-weight-700">Gabes</span></span></div>
                            <div class="card-body">
                                <p>Automatic evaluation of Arabic language abstracts based on the comparison between candidate abstracts and reference abstracts using Document embedding (using Doc2Vec) and/or Word embedding (using Word2Vec).
<br/> Languages:
Python, Deep learning</p></div></div></div>
                            <div class="item"><span class="bullet"></span>
                           
                            <span className="vertical-line" style={{height:"235px"}}/>
                            <div class="">
                                <div class="card-header"><span class="year">
                                    <AiOutlineCalendar></AiOutlineCalendar><i class="fa fa-calendar"></i>01-2019/07-2019</span>
                                    <span class="d-block font-weight-400 uppercase">fundamental licence-ISIM<span class="separator"></span>
                                        <span class="font-weight-700">Gabes</span></span></div>
                                <div class="card-body"><p >Web application consists of modernizing the IT management of a gym so as to be able to offer members and trainers several online services via their Smartphones.
The web application allows the administrator to :
Manage members and coaches.
Plan and share training...
The mobile application allows the trainer to :
Check their absences
Share and comment on photos/videos
Working environment
Languages: HTML, CSS, Javascript, PHP
Frameworks: angular, Ionic
DBMS: MySQL</p></div></div></div>
{/* 
<div class="item"><span class="bullet"></span>
                                <div class="">
                                    <div class="card-header"><span class="year"><i class="fa fa-calendar"></i>
                                    <i class="fa fa-caret-right"></i>2010 - 2014</span>
                                    <span class="d-block font-weight-400 uppercase">Consultant<span class="separator"></span>
                                        <span class="font-weight-700">Google</span></span></div>
                                    <div class="card-body"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet diam nonummy.</p></div></div></div> */}
                                    
                                    
                                    
                                    </div></div><div class="col-xl-6 col-lg-6 col-md-6 skills-container">
                        <h2 class="font-weight-600 uppercase title-section">Education</h2><div class="resume-items">
                            <div class="item"><span class="bullet"></span>
                            <span className="vertical-line" style={{height:"330px"}}/>
                            <div class="">
                                <div class="card-header"><span class="year">
                                <AiOutlineCalendar></AiOutlineCalendar><i class="fa fa-caret-right"></i>02-2023/06-2023</span>
                                <span class="d-block font-weight-400 uppercase">fULL-STACK-JS BOOTCAMP<span class="separator"></span><span class="font-weight-700">GoMyCode</span></span></div><div class="card-body"><p>Web application consists of modernizing the IT management of a gym so as to be able to offer members and trainers several online services via their Smartphones.
                                Participating in the design and creation of scalable software.<br/>
Writing clean, functional code on the front- and back end. <br/>
Createan e-commerce websiteand movie app.<br/>
Learn multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript).<br/>
Learn multiple back-end languagesand JavaScript frameworks (e.g. React, Node.js).<br/>
Familiarity with databases(e.g. MySQL, MongoDB).<br/>

</p></div></div></div>
<div class="item"><span class="bullet"></span>
<span className="vertical-line" style={{height:"400px"}}/>
                                <div class="">
                                    <div class="card-header"><span class="year"><AiOutlineCalendar></AiOutlineCalendar>
                                    <i class="fa fa-caret-right"></i>09/2019-09/2021</span>
                                    <span class="d-block font-weight-400 uppercase">Master's degree<span class="separator"></span>
                                    <span class="font-weight-700">Gabes</span></span></div><div class="card-body"><p> master's degree in computer science and multimedia at the higher institute of computer science and multimedia-ISIMG</p></div></div></div><div class="item"><span class="bullet"></span>
                                    <div class="">
                                        <div class="card-header"><span class="year"><AiOutlineCalendar></AiOutlineCalendar><i class="fa fa-caret-right"></i>09/2016-07/2019</span><span class="d-block font-weight-400 uppercase">Degree in Computer Science and Multimedia<span class="separator"></span><span class="font-weight-700">Gabes</span></span></div>
                                        <div class="card-body"><p> 
Bachelor's degree in computer science and multimedia at the higher institute of computer science and multimedia</p></div></div>

<br/>
<div class="item"><span class="bullet"></span>
<div class="">
                                        <div class="card-header"><span class="year"><AiOutlineCalendar></AiOutlineCalendar><i class="fa fa-caret-right"></i>09/2015-06/2016</span><span class="d-block font-weight-400 uppercase">Bacalaureat National Degree
<span class="separator"></span><span class="font-weight-700">Mednine</span></span></div>
                                        <div class="card-body"><p> 
                                        Baccalaureate in Experimental science
Sidi-Mkhlouf, Mednine, Tunisia</p></div></div>



</div></div></div></div>
{/* <hr style={{width:"1110px", position:"absolute", top:"1410px"}}/> */}
<div class="row"><div class="col-12"><h2 class="font-weight-600 uppercase title-section skills-title">skills</h2></div>
                        
                        
                        <div class="col-12 col-sm-6 col-md-4"><span class="skill-text">html</span>
                        <div class="chart-bar"><span class="item-progress" data-percent="80" style={{width:"80%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"182px"}}>80%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">javascript</span><div class="chart-bar"><span class="item-progress" data-percent="60" style={{width:"60%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"130px"}}>60%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">css</span><div class="chart-bar"><span class="item-progress" data-percent="75" style={{width:"75%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"170px"}}>75%<b class="arrow"></b></span></div></div>
                        {/* <div class="col-12 col-sm-6 col-md-4"><span class="skill-text">jquery</span><div class="chart-bar"><span class="item-progress" data-percent="65" style={{width:"65%"}}></span>
                        </div><span class="percent" style={{right:"calc(35% - 21px)"}}>65%<b class="arrow"></b></span></div> */}
                        </div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">react-js</span><div class="chart-bar"><span class="item-progress" data-percent="90" style={{width:"90%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"214px"}}>90%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">mongoose</span><div class="chart-bar"><span class="item-progress" data-percent="85" style={{width:"85%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"201px"}}>85%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">angular-js</span><div class="chart-bar"><span class="item-progress" data-percent="60" style={{width:"60%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"135px"}}>60%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">node-js</span><div class="chart-bar"><span class="item-progress" data-percent="75" style={{width:"75%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"174px"}}>75%<b class="arrow"></b></span></div></div><div class="col-12 col-sm-6 col-md-4"><span class="skill-text">MongoDB</span><div class="chart-bar"><span class="item-progress" data-percent="80" style={{width:"80%"}}></span><span class="percent" style={{right:"calc(20% - 21px)", color:"rgb(114, 182, 38)", postion:"absolute", left:"187px"}}>80%<b class="arrow"></b></span></div></div></div></div></div></section>


                        <div class="page animated" style={{animationDuration:"500ms"}}>
           
           <div id="switcher" class="" style={{display: "none"}}>
             <div class="content-switcher">
             <h4>STYLE SWITCHER</h4><ul><li><a href="BsFillGearFill" title="blue" class="color">
               <img src="img/styleswitcher/blue.png" alt="blue"/></a></li><li><a href="#" title="red" class="color">
                 <img src="img/styleswitcher/red.png" alt="red"/></a></li>
                 <li><a href="#" title="goldrenrod" class="color">
                   <img src="img/styleswitcher/goldenrod.png" alt="goldrenrod"/></a></li>
                   <li><a href="#" title="magenta" class="color"><img src="img/styleswitcher/magenta.png" alt="magenta"/></a></li><li><a href="#" title="yellowgreen" class="color">
                     <img src="img/styleswitcher/yellowgreen.png" alt="yellowgreen"/></a></li>
                     <li><a href="#" title="orange" class="color"><img src="img/styleswitcher/orange.png" alt="orange"/></a></li>
                     <li><a href="#" title="green" class="color"><img src="img/styleswitcher/green.png" alt="green"/></a></li>
                     <li><a href="#" title="yellow" class="color"><img src="img/styleswitcher/yellow.png" alt="yellow"/></a></li></ul>
                     <br/>
                     <a href="" class="waves-effect waves-light btn font-weight-600 purchase hoverable"> 
                     <span><BsFillGearFill style={{
               fontSize: "17px", position: "absolute",
               left: "40px",
               top: "500px", color: "white"
             }}> </BsFillGearFill> PURCHASE</span></a><div id="hideSwitcher">×</div></div></div>
                     <div id="showSwitcher" class="styleSecondColor" ><BsFillGearFill className="Bi"></BsFillGearFill>

                     
                     </div>


                     {/* <p>Spinning:</p>
<BsFillGearFill style={{fontSize:"24px", color:"aqua"}}></BsFillGearFill> */}


</div>
   

        </div>
        
    )
}

export default About