import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";


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

        axios.post("http://localhost:3000/registrations",{
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
            <div className="content-wrapper">
                <Col xs={12} sm={12} md={5} lg={5} className="align-auto">
                    <div className="auth-form">
                        <Form onSubmit={(e)=>this.handleSubmit(e)}>
                            <h3>Register</h3>
                            <hr/>
                            <Form.Group>
                                <Form.Control 
                                    onChange={(e)=>this.handleChange(e)} 
                                    type="text" 
                                    name="email" 
                                    value={this.state.email} 
                                    placeholder="Email" 
                                    required
                                />
                                <Form.Text style={{ fontWeight: "600" }}className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
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
                            <Form.Text className="text-muted" style={{ paddingBottom: 15, fontWeight: "600" }}>Dont have an account? <Link to="/login">Log In</Link></Form.Text>
                            <Button className="form-button" type="submit">Register</Button>
                        </Form>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Registration;