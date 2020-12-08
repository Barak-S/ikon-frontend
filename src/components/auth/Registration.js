import React, { Component } from 'react';
import axios from 'axios'

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
        ).then(resp=>{
            console.log(resp)
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
                    <input 
                        onChange={(e)=>this.handleChange(e)} 
                        type="password" 
                        name="password_confirmation" 
                        value={this.state.password_confirmation} 
                        placeholder="Confirm Password" 
                        required>
                    </input>
                    <button className="form-button" type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default Registration;