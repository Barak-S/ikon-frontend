import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


import Galil from '../images/galil-ikon.png'

const Home =()=> {

    let heading = useRef(null)
    let heading2 = useRef(null)
    let collection = useRef(null)

    useEffect(()=>{ 
        TweenMax.to( heading2, 1, { opacity: 1, x: 5, ease: Power3.easeOut, delay: 0.2})       
        TweenMax.to( heading, 1, { opacity: 0.8, y: -10, ease: Power3.easeOut, delay: 1.2})
        TweenMax.to( collection, 1, {opacity: 0.9, y: -10, ease: Power3.easeIn, delay: 1.2})
    }, [])

    return (
        
            <div className="home-banner-wrapper">
                <Col xs={12} sm={12} md={7} lg={7} style={{textAlign: "center", zIndex: 4}}>
                    {/* <p className="mission-statement">We provide leading technology, deliver unmatched services, craftsmanship, and offer some of the best value in the industry.</p> */}
                    <img ref={el => {heading2 = el}} className="secondHeader" src={Galil}></img>
                    <h2 className="firstHeader" ref={el => {heading = el}}>WE ARE IKON</h2>
                    <Link to="/shop"><button ref={el => {collection = el}} className="home-banner-button">VIEW COLLECTION</button></Link>
                </Col>
            </div>

        
    );


};

export default Home;