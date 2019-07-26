import React, { button } from 'react';
// import logo from './misc/logo.svg';
import './App.css';

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

function App() {

  return (
    <div className="App">
      
      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="niggers" /> */}

        <h1>
          Welcoem to Prepit
        </h1>
        
        <p style={{ marginTop: '20px' }} >
          To get started, please enter how much you make.
        </p>

        <input
        style={{ marginTop: '20px' }} 
        placeholder="Enter monthly income"
        //value="penis"
        />
        <button
        style={{ marginTop: '20px' }} 
        title="Enter"
        />
        <a
          style={{marginTop: '40px'}} 
          className="App-link"
          href="https://Prepit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Visit Prepit
        </a>
      </header>

    

    </div>
  );
}

export default App;
