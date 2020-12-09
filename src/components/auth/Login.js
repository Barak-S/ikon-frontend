import React, { Component } from 'react';
import axios from 'axios'
import { Button, Form, Col } from 'react-bootstrap';

class Login extends Component {

    state={
        email: "",
        password: "",
        errors: {}
    }

    componentDidMount(){
        console.log(this.props.loggedInStatus)
        // if (this.props.loggedInStatus === "LOGGED_IN"){
        //     this.props.history.push('/')
        // }
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
                <Col xs={12} sm={12} md={5} lg={4} className="align-auto">
                    <div className="auth-form">
                        <Form onSubmit={(e)=>this.handleSubmit(e)}>
                            <h3>Log In</h3>
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
                        </Form>
                    </div>
                </Col>
            </div>
        );
    }
}

export default Login;