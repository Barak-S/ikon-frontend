import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div style={{ textAling: 'center', color: "#fff", backgroundColor: '#111', paddingTop: 12, fontSize: 16, fontWeight: 600}}>
                <Row>
                    <Col>
                        <p className="ikon-footer">© 2020, Ikon Weapons | All rights reserved | Terms Of Service | Privacy</p>
                    </Col>
                </Row>
        </div>

    )
}