import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';

class AddProducts extends Component {

    state={
        name: "",
        description: "",
        price: 0,
        imageUrl: ""
    }

    async componentDidMount(){
        // const user = await this.props.user.admin;
        // user? console.log("im an admin"): console.log("not an admin")
    }

    createProduct(e){
        const { 
            name,
            description,
            price,
            imageUrl,
        } = this.state

        axios.post("http://localhost:3000/createadmin",{
            product:{
                name: name,
                description: description,
                price: price,
                imageUrl: imageUrl
            }
        }).then(response=>console.log(response))
        .catch(err=>{
            console.log(err)
        })
        e.preventDefault()
    }
    render() {
        return (
            <Col xs={12} sm={12} md={5} lg={5} className="align-auto">
                <p style={{color: "#E62346", fontWeight: "600"}}>For Adding Products to Ikon Shop - team only.</p>
                <div className="auth-form">
                    <Form onSubmit={(e)=>this.createProduct(e)}>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="text" 
                                name="name" 
                                value={this.state.name} 
                                placeholder="Product Name" 
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="text" 
                                name="description" 
                                value={this.state.description} 
                                placeholder="Product Description" 
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="number" 
                                name="price" 
                                value={this.state.price} 
                                placeholder="Price" 
                                required
                            />
                        </Form.Group>
                        <Button className="form-button" type="submit">Add Product</Button>
                    </Form>
                </div>
            </Col>
        );
    }
}

export default AddProducts;