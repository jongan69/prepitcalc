import React, { useState } from 'react';
import '../styles/App.css';
import calc from './calc';
import Button from '@material-ui/core/Button';
import logo from '../misc/logo.svg';

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
  function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : input.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;

    return true;
  }
  
  return (
    
    <div className="App">
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="prepit logo" />

        <h1>
          Welcome to Prepit
        </h1>
        
        <p style={{ marginTop: '20px' }} >
          To get started, please enter how much you make.
        </p>

        
        <div className="money">
        <p className="dollar">
          $
          </p>
        <input
        className="box"
        placeholder="Enter monthly income"
        type="number"
        value={input} onInput={e => setInput(e.target.value)}
        onkeypress={isNumberKey(input)}
        />
        </div>
        

        <Button
        color="primary"
        className="enter"
        onClick={() => {calc(input)}}
        > 
        Enter 
        </Button>

        <Button
          style={{marginTop: '100px', color: 'white'}}
          href="https://Prepit.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Visit Prepit
        </Button>
      </header>

    

    </div>
  );
}

export default App;
