import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';

class Registration extends Component {

    state={
        email: "",
        password: "",
        password_confirmation: "",
        errors: {}
    }

    handleSubmit(e){
        const { 
            email,
            password,
            password_confirmation
        } = this.state

        axios.post("http://localhost:3000/createadmin",{
            user:{
                email: email,
                password: password,
                password_confirmation: password_confirmation
            }
        },
        { withCredentials: true }
        ).then(response=>{
            if (response.data.status === "created"){
                this.props.handleAuth(response.data)
            }
            console.log(response)
        }).catch(err=>{
            console.log(err)
        })
        e.preventDefault()
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Col xs={12} sm={12} md={5} lg={5} className="align-auto">
                <p style={{color: "#E62346", fontWeight: "600"}}>For Creating Admins on Ikon Wepaons team only.</p>
                <div className="auth-form">
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="text" 
                                name="email" 
                                value={this.state.email} 
                                placeholder="Email" 
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="password" 
                                name="password" 
                                value={this.state.password} 
                                placeholder="Password" 
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control 
                                onChange={(e)=>this.handleChange(e)} 
                                type="password" 
                                name="password_confirmation" 
                                value={this.state.password_confirmation} 
                                placeholder="Confirm Password" 
                                required
                            />
                        </Form.Group>
                        <Button className="form-button" type="submit">Register</Button>
                    </Form>
                </div>
            </Col>
        );
    }
}

export default Registration;