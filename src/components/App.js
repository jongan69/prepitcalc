import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Calculator from '../pages/Calculator';
import Homepage from '../pages/HomePage';
import Details from '../pages/Details';
import Resources from '../pages/Resources';
import '../styles/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import NotFoundPage from '../pages/NotFoundPage';



class App extends Component {
  
  render() {


    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Switch>
            <Route path="/" component={Homepage} exact/>
            <Route path="/Calculator" component={Calculator} exact />
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
