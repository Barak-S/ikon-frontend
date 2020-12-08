import React from 'react';
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'

class Home extends React.Component {

    handleAuth=(data)=>{
        this.props.handleLogin(data)
    }

    render(){
        return (
            <div>
                <h1>Home page</h1>
                <p>{this.props.loggedInStatus}</p>
                <Registration
                    handleAuth={this.handleAuth}
                />
                <Login
                    handleAuth={this.handleAuth}
                />
            </div>
        );

    }

};

export default Home;