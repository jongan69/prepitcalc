import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Homepage from '../pages/HomePage';
import '../styles/App.css';
import calc from '../pages/calc';

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
          <Route path="/" component={Homepage} exact/>
          <Route path="/calc" component={calc} exact />
        </div>
      </Router>
    );
  }
}
export default App;
