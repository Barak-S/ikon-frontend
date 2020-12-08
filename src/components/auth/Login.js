import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {

    state={
        email: "",
        password: "",
        errors: {}
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
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <input 
                        onChange={(e)=>this.handleChange(e)} 
                        type="text" 
                        name="email" 
                        value={this.state.email} 
                        placeholder="Email" 
                        required>
                    </input>
                    <input 
                        onChange={(e)=>this.handleChange(e)} 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        placeholder="Password" 
                        required>
                    </input>
                    <button className="form-button" type="submit">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;