import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Home =(props)=> {

    const [show, handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.scrollY > 1){
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    }, [])

    return (
            <div className={`home-banner-wrapper ${show && "hide"}`}>
                <Col xs={12} sm={12} md={6} lg={6} className="img-container">
                    <div className="photo-div">
                    <img onClick={()=>props.history.push('/repair')} className="header-pic" src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/handgun-disassembled-rich-legg.jpg'></img>
                    <h3 className="banner-center">REPAIR</h3>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} className="img-container">
                    <div className="photo-div">
                        <img onClick={()=>props.history.push('/shop')} className="header-pic" src='https://i.redd.it/n57czs8gng751.jpg'></img>
                        <h3 className="banner-center">SHOP</h3>
                    </div>
                </Col>
            <h3 className="icon-brand-text">"Our Vision: One satisfied customer at a time, forever."</h3>
            <div style={{paddingBottom:55}}>
                <ul id="horizontal-list">
                    <li>
                        <img src="https://i.pinimg.com/564x/3e/ff/b8/3effb8eb426b45fa1be837ea5f5acd78.jpg" alt="Ikon Weapons Facebook" className="buttonIcon" style={{height: 55, padding:8}} onClick={()=> window.open("https://www.facebook.com/Ikon-Weapons-1664909823613576/", "_blank")}></img>
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/564x/7a/f3/ea/7af3ea449e520c0dabddcc4310be1e5e.jpg" alt="Ikon Weapons Twitter" className="buttonIcon" style={{height: 55, padding:8,}} onClick={()=> window.open("https://twitter.com/ikonweapons", "_blank")}></img>
                    </li>
                    <li>
                        <img src="https://i.pinimg.com/564x/26/5d/a6/265da643ace42d3de8d0a5b4ef02d852.jpg" alt="Ikon Weapons Instagram" className="buttonIcon" style={{height: 55, padding:8}} onClick={()=> window.open("https://www.instagram.com/ikonweapons/", "_blank")}></img>
                    </li>
                </ul>
            </div>
            </div>
            
            
  

        
    );


};

export default Home;