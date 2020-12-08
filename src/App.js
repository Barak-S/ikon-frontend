import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Nav from './components/Nav'
import Home from './containers/Home'
import Shop from './containers/Shop'
import Repair from './containers/Repair'
import Login from './components/auth/Login'
import Register from './components/auth/Registration'

class App extends React.Component{

  state={
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }
  
  checkLoginStatus(){
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then(response=>console.log(response.data))
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.checkLoginStatus()
  }

  handleAuth=(data)=>{
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }


  render(){
    return (
        <BrowserRouter>
          <Nav
            loggedInStatus={this.state.loggedInStatus}
          />
          <div className="App">
          <Switch>
            <Route 
              exact 
              path= "/" 
              render={props=>(
                <Home {...props} loggedInStatus={this.state.loggedInStatus} handleLogin={this.handleLogin} />
              )}/>
            <Route exact path= "/shop" render={(routerProps) => <Shop {...routerProps} />}/>
            <Route exact path= "/repair" render={(routerProps) => <Repair {...routerProps} />}/>
            <Route exact path= "/login" render={(routerProps) => <Login {...routerProps} handleAuth={this.handleAuth} />}/>
            <Route exact path= "/register" render={(routerProps) => <Register {...routerProps} handleAuth={this.handleAuth} />}/>
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
