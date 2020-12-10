import React from 'react';
import { Col } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="repair-content">
            <div className="contact-banner">
                <Col xs={12} sm={12} md={8} lg={8}>
                    <h3 className="contact-banner-text">CONTACT</h3>
                </Col>
            </div>
            <Col xs={12} sm={12} md={8} lg={8} className="align-auto">
                <h3 style={{color: "#1973BD"}}>IT'S NOT ABOUT US</h3>
                <p> With combined years of expertise and experience, Ikon Weapons is proud Manufacturer FFL07 and Importer FFL09 of quality products. Every decision is inspired by our main mission, which is to provide the highest standard of product and the best customer service to our loyal customers.
                </p>
                <h3 style={{color:"#E62346"}}>WHY IKON?</h3>
                <p>Our customers choose us because we provide leading technology, deliver unmatched services, craftsmanship, and offer some of the best value in the industry. Our approach to business has helped transform us from a small engineering upstart to a global provider of weapons solutions.</p>
                <h2>CONTACT US</h2>
                <p>We are here to help you
                    <br/>
                    please give us a call:
                    <br/>
                    <strong>(843) 251-6488</strong>
                    <br/>
                    or email us at:
                    <br/>
                    sales@ikonweapons.com</p>
            </Col>
        </div>
    );
};

export default Contact;