import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{color: "#E62346", backgroundColor: '#191919'}}>
            <Container style={{paddingTop: 12}}>
                <Row>
                    <Col>
                        <img 
                            src="https://static.wixstatic.com/media/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.png/v1/fill/w_448,h_140,al_c,lg_1,q_85/3e1a59_e03c1ae76b324b4aa19b57e8032a8443~mv2.webp"
                            alt="Ikon Weapons Logo"
                            className="nav-logo">
                        </img>
                        <h4 className="list-unstyled">
                        <li>Florence, SC</li> 
                        <li>United States</li>
                        </h4>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <p>© 2020, Ikon Weapons</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}