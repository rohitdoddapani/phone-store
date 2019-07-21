import React,{ Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import Details from './components/Details'
import Cart from './components/cart/'
import Default from './components/Default'
import Modal  from './components/Modal'



class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Router>
          <div id="page-wrapper">
            <Navbar />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route component={Default} />
            </Switch>
            <Modal />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
