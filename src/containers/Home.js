import React from 'react';
import Registration from '../components/auth/Registration'
import Login from '../components/auth/Login'

class Home extends React.Component {

    render(){
        return (
            <div>
                <h1>Home page</h1>
                <p>{this.props.loggedInStatus}</p>
            </div>
        );

    }

};

export default Home;