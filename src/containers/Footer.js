import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{color: "#E62346", backgroundColor: '#111'}}>
            <Container style={{paddingTop: 12, fontSize: 16}}>
                <Row>
                    <Col>
                        <p>© 2020, Ikon Weapons | All rights reserved | Terms Of Service | Privacy</p>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}