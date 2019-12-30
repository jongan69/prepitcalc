import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Calculatorv2 from '../pages/Calculatorv2';
import Details from '../pages/Details';
import Homepage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Resources from '../pages/Resources';
import '../styles/App.css';

import Footer from './Footer';
import NavBar from './NavBar';



class App extends Component {
  
  render() {


    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
            <Route path="/" component={Calculatorv2} exact/>
            <Route path="/Calculator" component={Calculatorv2} exact />
            <Route path="/LearnMore" component={Details} exact />
            <Route path="/Resources" component={Resources} exact />
            <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer /> 
        </div>
      </Router>
    );
  }
}
export default App;
