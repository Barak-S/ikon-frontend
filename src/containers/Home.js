import React, { useRef, useEffect, useState } from "react";
import { gsap, TweenMax, TweenLite, Power3 }  from 'gsap';
import { Col } from 'react-bootstrap';

const Home =()=> {

    let heading = useRef(null)
    let heading2 = useRef(null)

    useEffect(()=>{        
        TweenMax.to(
            heading,
            1,
            {
            opacity: 1,
            y: 10,
            ease: Power3.easeOut,
            delay: 1
            }
        )
        TweenMax.to(
            heading2,
            .8,
            {
            opacity: 1,
            y: 15,
            ease: Power3.easeOut,
            delay: 2
            }
        )
    }, [])

    return (
        <div>
            <div className="home-banner-wrapper">
                <div style={{position: "absolute", top: "50%"}}>
                <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
                    <h2 style={{ color: "#ffffff", fontWeight: "500"}} className="firstHeader" ref={el => {heading = el}}>WE ARE IKON</h2>
                    <p style={{color: "#ffffff"}} className="secondHeader" ref={el => {heading2 = el}}>
                        With attention to detail, we continue to shape the future of the tech industry.
                    </p>
                    {/* <button className="home-banner-button" onClick={()=>this.props.history.push('/shop')}>SHOP</button> */}
                </Col>
                </div>
            </div>
            <Col xs={12} sm={12} md={7} lg={7} className="align-auto">
            </Col>
        </div>
    );


};

export default Home;