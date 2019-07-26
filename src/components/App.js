import React, { useState } from 'react';
import '../styles/App.css';
import calc from './calc';
// import logo from './misc/logo.svg';
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
  const [input, setInput] = useState('');
  return (
    <div className="App">
      
      <header className="App-header">
        
        {/* <img src={logo} className="App-logo" alt="niggers" /> */}

        <h1>
          Welcome to Prepit
        </h1>
        
        <p style={{ marginTop: '20px' }} >
          To get started, please enter how much you make.
        </p>

        <input
        style={{ marginTop: '20px' }} 
        placeholder="Enter monthly income"
        value={input} onInput={e => setInput(e.target.value)}
        />

        <button
        style={{ marginTop: '20px' }} 
        title="Enter"
        onClick={calc(input)}
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
