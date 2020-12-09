import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Nav from './components/Nav'
import Home from './containers/Home'
import Shop from './containers/Shop'
import Repair from './containers/Repair'
import Contact from './containers/Contact'
import Login from './components/auth/Login'
import Register from './components/auth/Registration'

class App extends React.Component{

  state={
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }
  
  checkLoginStatus(){
    axios.get('http://localhost:3000/logged_in', { withCredentials: true })
    .then(response=>{
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN" ){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    })
    .catch(err=>console.log(err))
  }

  componentDidMount(){
    this.checkLoginStatus()
    console.log(this.state.loggedInStatus)
  }

  handleAuth=(data)=>{
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  handleLogout=()=>{
    axios.delete('http://localhost:3000/logout', { withCredentials: true })
    .then(resp=>{
      this.setState({
        loggedInStatus: "NOT_LOGGED_IN",
        user: {}
      })
    })
    .catch(err=>console.log(err))
  }


  render(){
    return (
        <BrowserRouter>
          <Nav
            loggedInStatus={this.state.loggedInStatus}
            handleLogout={this.handleLogout}
          />
          <div className="App">
          <Switch>
            <Route 
              exact 
              path= "/" 
              render={props=>(
                <Home {...props}/>
              )}/>
            <Route exact path= "/shop" render={(routerProps) => <Shop {...routerProps} />}/>
            <Route exact path= "/repair" render={(routerProps) => <Repair {...routerProps} />}/>
            <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps} />}/>
            <Route exact path= "/login" render={(routerProps) => <Login {...routerProps} handleAuth={this.handleAuth} loggedInStatus={this.state.loggedInStatus} />}/>
            <Route exact path= "/register" render={(routerProps) => <Register {...routerProps} handleAuth={this.handleAuth} />}/>
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
