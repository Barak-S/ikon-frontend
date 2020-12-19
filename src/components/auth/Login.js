import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Login extends Component {

    state={
        email: "",
        password: "",
        errors: {}
    }

    componentDidMount(){
        axios.get('http://localhost:3000/logged_in', { withCredentials: true })
        .then(response=>{
        if (response.data.logged_in ){
            this.props.history.push('/')
        }
        })
        .catch(err=>console.log(err))
    }

    handleSubmit(e){
        const { 
            email,
            password,
        } = this.state

        axios.post("http://localhost:3000/sessions",{
            user:{
                email: email,
                password: password,
            }
        },
        { withCredentials: true }
        ).then(response=>{
            if (response.data.logged_in){
                this.props.handleAuth(response.data)
                this.props.history.push('/')
            }
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
                <Col xs={12} sm={8} md={5} lg={4} className="align-auto">
                    <div className="auth-form">
                        <Form onSubmit={(e)=>this.handleSubmit(e)}>
                            {/* <h3>Log In</h3>
                            <hr/> */}
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
                        <Button className="form-button" type="submit">Login</Button>
                        <br/>
                        <Form.Text className="text-muted" style={{ paddingBottom: 15, fontWeight: "600" }}>Dont have an account? <Link to="/register">Sign Up</Link></Form.Text>
                        </Form>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Login;