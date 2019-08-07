import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Calculator from '../pages/Calculator';
import Homepage from '../pages/HomePage';
import Details from '../pages/Details';
import '../styles/App.css';
import NavBar from './NavBar';

// var Component = React.createClass({
//   getInitialState: App () {
//     return {
//       inputValue: ''
//     }
//   },
// updateInputValue: function(evt) {
//   this.setState({
//     inputValue: evt.target.value
//   });
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Route path="/" component={Homepage} exact/>
            <Route path="/Calculator" component={Calculator} exact />
            <Route path="/LearnMore" component={Details} exact />
          </div> 
        </div>
      </Router>
    );
  }
}
export default App;
