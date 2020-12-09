import React from 'react';
import { Col } from 'react-bootstrap';
// import { Link } from "react-router-dom";

class Home extends React.Component {

    render(){
        return (
            <div>
                <div className="home-banner-wrapper">
                    <button className="home-banner-button" onClick={()=>this.props.history.push('/shop')}>SHOP</button>
                </div>
                <Col xs={12} sm={12} md={7} lg={7} className="align-auto">
                </Col>
            </div>
        );

    }

};

export default Home;