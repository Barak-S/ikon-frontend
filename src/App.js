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
import Footer from './containers/Footer'

// Private Routes for Admin only
import PrivateRoute from "./private-route/PrivateRoute";

import AdminRegistration from './components/auth/AdminRegistration'
import AdminAddProducts from './containers/AddProducts'

class App extends React.Component{

  state={
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  }
  
  componentDidMount(){
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
            user={this.state.user}
          />
          <div className="App">
          <Switch>
            <Route exact path= "/" render={props=>(<Home {...props}/>)}/>
            <Route exact path= "/shop" render={(routerProps) => <Shop {...routerProps} />}/>
            <Route exact path= "/repair" render={(routerProps) => <Repair {...routerProps} />}/>
            <Route exact path= "/contact" render={(routerProps) => <Contact {...routerProps} />}/>
            <Route exact path= "/login" render={(routerProps) => <Login {...routerProps} handleAuth={this.handleAuth} loggedInStatus={this.state.loggedInStatus} />}/>
            <Route exact path= "/register" render={(routerProps) => <Register {...routerProps} handleAuth={this.handleAuth} />}/>

            {/* Private Admin routes below */}
            { this.state.user.admin && <PrivateRoute exact path="/admin/products" component={AdminAddProducts}  user={this.state.user} />}
            <Route exact path= "/register/admin/create" render={(routerProps) => <AdminRegistration {...routerProps} handleAuth={this.handleAuth} />}/>
            {/* <Route exact path= "/admin/products" render={(routerProps) => <AdminAddProducts {...routerProps} user={this.state.user} />}/> */}
          </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
    );
  }
}

export default App;
