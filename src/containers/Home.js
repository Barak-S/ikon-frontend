import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';

import Galil from '../images/micro-galil-ikon.png'

const Home =()=> {

    let heading = useRef(null)
    let heading2 = useRef(null)

    useEffect(()=>{ 
        TweenMax.to(
            heading2,
            1,
            {
            opacity: 1,
            x: 5,
            ease: Power3.easeOut,
            delay: 1
            }
        )       
        TweenMax.to(
            heading,
            1,
            {
            opacity: 1,
            y: -10,
            ease: Power3.easeOut,
            delay: 2.3
            }
        )
    }, [])

    return (
        <div>
            <div className="home-banner-wrapper">
                <Col className="home-banner-wrapper" xs={12} sm={12} md={8} lg={8} className="align-auto">
                    <img ref={el => {heading2 = el}} className="secondHeader" src={Galil}></img>
                    <h2 className="firstHeader" ref={el => {heading = el}}>WE ARE IKON</h2>
                    {/* <p style={{color: "#ffffff"}} className="secondHeader" ref={el => {heading2 = el}}>
                        With attention to detail, we continue to shape the future of the tech industry.
                    </p> */}
                    {/* <button className="home-banner-button" onClick={()=>this.props.history.push('/shop')}>SHOP</button> */}
                </Col>
            </div>
            <Col xs={12} sm={12} md={7} lg={7} className="align-auto">
            </Col>
        </div>
    );


};

export default Home;