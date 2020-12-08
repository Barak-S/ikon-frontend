import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './containers/Home'
import Shop from './containers/Shop'
import Repair from './containers/Repair'

function App() {
  return (
      <BrowserRouter>
        <Nav/>
        <div className="App">
        <Switch>
          <Route exact path= "/" render={(routerProps) => <Home {...routerProps} />}/>
          <Route exact path= "/shop" render={(routerProps) => <Shop {...routerProps} />}/>
          <Route exact path= "/repair" render={(routerProps) => <Repair {...routerProps} />}/>
        </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
