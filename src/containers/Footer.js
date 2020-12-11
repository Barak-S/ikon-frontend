import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{color: "#E62346", backgroundColor: '#111'}}>
            <Container style={{paddingTop: 12, fontSize: 16}}>
                <Row>
                    <Col>
                        <img 
                            src="https://static.wixstatic.com/media/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.png/v1/fill/w_448,h_140,al_c,lg_1,q_85/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.webp"
                            alt="Ikon Weapons Logo"
                            className="nav-logo">
                        </img>
                        <h4 className="list-unstyled"style={{color: "#E62346"}}>
                        <li>Florence, SC</li> 
                        <li>United States</li>
                        </h4>
                    </Col>
                    <Col>
                        <ui className="list-unstyled">
                        <li>Our Offices</li>
                        <li>Support</li>
                        <li>About</li>
                        <li><img className="thin-blue-line" src="https://cdn11.bigcommerce.com/s-ey7tq/images/stencil/1280x1280/attribute_rule_images/3697_source_1592327610.png"></img></li>
                        </ui>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p>© 2020, Ikon Weapons | All rights reserved | Terms Of Service | Privacy</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}