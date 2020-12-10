import React from 'react';
import { Form, CardDeck, Card, Col, Image } from 'react-bootstrap';
import Galil1 from '../images/galil1.jpg'
import Galil2 from '../images/galil2.jpg'
import Galil3 from '../images/galil3.jpg'
import Galil4 from '../images/galil4.jpg'

const Shop = () => {
    return (
        <div className="repair-content">
            <div className="shop-banner">
                <Col xs={12} sm={12} md={9} lg={7}>
                    <h3 className="shop-banner-text">IKON SHOP</h3>
                </Col>
            </div>
            <Col xs={12} sm={12} md={9} lg={8} className="align-auto">
                <Form inline>
                    <Form.Control className="shop-search" placeholder="Search"></Form.Control>
                </Form>
                <div className="product-column">
                {[{name: "Galil Style Rifle- IKON ARG 223", img: Galil1, price: "$1,399.00"},
                    {name: "Micro Galil - IKON G223-GRY", img: Galil3, price: "$2,000.00"},
                    {name: "IKON AR-G RIFLE- GALIL STYLE POLY", img: Galil2, price: "$1,349.00"},
                    {name: "MICRO GALIL STYLE RIFLE - IKON G223-GRY", img: Galil4, price: "$2,075.00"}
                    ].map(product=>{
                        return(
                            <div className="product-card">
                                <Image
                                    src={product.img}
                                    alt={product.name}
                                    style={{marginBottom: 6}}
                                    thumbnail 
                                /> 
                                <h6>{product.name}</h6>
                                <p>{product.price}</p>
                            </div>
                        )
                    })}
                </div>
            </Col>
        </div>
    );
};

export default Shop;