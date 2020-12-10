import React from 'react';
import { Form, CardDeck, Card, Col, Image } from 'react-bootstrap';

const Shop = () => {
    return (
        <div className="repair-content">
            <div className="shop-banner">
                <Col xs={12} sm={12} md={9} lg={7}>
                    <h3 className="shop-banner-text">IKON SHOP</h3>
                </Col>
            </div>

            <Col xs={12} sm={12} md={8} lg={7} className="align-auto">
            <div className="product-column">
                <Form inline>
                    <Form.Control className="shop-search" placeholder="Search"></Form.Control>
                </Form>
                <div>
                {[{name: "Galil Style Rifle- IKON ARG 223", img: "https://atlantic-firearms-prod.s3.amazonaws.com/media/sylius_shop_product_original/product/galil-style-rifle-ikon-ar223-56.jpg", price: "$1,399.00"},
                    {name: "Micro Galil - IKON G223-GRY", img: "https://atlantic-firearms-prod.s3.amazonaws.com/media/sylius_shop_product_original/product/micro-galil-ikon-g223-gry-22.jpg", price: "$2,000.00"},
                    {name: "IKON AR-G RIFLE- GALIL STYLE POLY", img: "https://atlantic-firearms-prod.s3.amazonaws.com/media/detail_product_main/product/ikon-ar-g-rifle-galil-style-poly.jpg", price: "$1,349.00"},
                    {name: "MICRO GALIL STYLE RIFLE - IKON G223-GRY", img: "https://atlantic-firearms-prod.s3.amazonaws.com/media/detail_product_main/product/micro-galil-style-rifle-ikon-g223-gry.jpg", price: "$2,075.00"}
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
            </div>

            </Col>
        </div>
    );
};

export default Shop;