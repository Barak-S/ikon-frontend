import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Nav from './components/Nav'
import Home from './containers/Home'
import Shop from './containers/Shop'
import Repair from './containers/Repair'

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

  handleLogin=(data)=>{
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render(){
    return (
        <BrowserRouter>
          <Nav/>
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
          </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
