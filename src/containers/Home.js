import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Galil from '../images/galil-ikon.png'

const Home =(props)=> {

    // let heading = useRef(null)
    // let heading2 = useRef(null)
    // let collection = useRef(null)

    // useEffect(()=>{ 
    //     TweenMax.to( heading2, 1, { opacity: 1, x: 5, ease: Power3.easeOut, delay: 0.2})       
    //     TweenMax.to( heading, 1, { opacity: 0.8, y: -10, ease: Power3.easeOut, delay: 1.2})
    //     TweenMax.to( collection, 1, {opacity: 0.9, y: -10, ease: Power3.easeIn, delay: 1.2})
    // }, [])

    return (
        <div>
            <div className="home-banner-wrapper">
                <div className="img-container">
                    <div className="photo-div">
                    <img onClick={()=>props.history.push('/repair')} className="header-pic" src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/handgun-disassembled-rich-legg.jpg'></img>
                    <h3 className="banner-center">REPAIR</h3>
                    </div>
                </div>
                <div className="img-container">
                    <div className="photo-div">
                        <img onClick={()=>props.history.push('/shop')} className="header-pic" src='https://i.redd.it/n57czs8gng751.jpg'></img>
                        <h3 className="banner-center">SHOP</h3>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="icon-brand-text">"Our Vision: One satisfied customer at a time, forever."</h3>
            </div>
            <div style={{paddingBottom:55}}>
                <ul id="horizontal-list">
                    <li>
                        <img src="https://w7.pngwing.com/pngs/705/849/png-transparent-computer-icons-facebook-social-network-button-logo-black-and-white-social-networking-service.png" alt="Ikon Weapons Facebook" className="buttonIcon" style={{height: 55, padding:8}} onClick={()=> window.open("https://www.facebook.com/Ikon-Weapons-1664909823613576/", "_blank")}></img>
                    </li>
                    <li>
                        <img src="https://www.nicepng.com/png/detail/84-842524_twitter-logo-in-circular-black-button-twitter-logo.png" alt="Ikon Weapons Twitter" className="buttonIcon" style={{height: 55, padding:8,}} onClick={()=> window.open("https://twitter.com/ikonweapons", "_blank")}></img>
                    </li>
                    <li>
                        <img src="https://cpng.pikpng.com/pngl/s/8-81131_facebook-icon-png-white-fa-question-circle-o.png" alt="Ikon Weapons Instagram" className="buttonIcon" style={{height: 55, padding:8}} onClick={()=> window.open("https://www.instagram.com/ikonweapons/", "_blank")}></img>
                    </li>
                </ul>
            </div>
        </div>

        
    );


};

export default Home;