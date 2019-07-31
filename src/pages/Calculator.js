import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { calc } from '../components/calc';
import '../styles/Calculator.css';
import logo from '../misc/logo.svg';


// const [input, setInput] = useState('');

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };
    this.onUpdate = this.onUpdate.bind(this);
    
  }
  
  onUpdate(event) {
    this.setState({input: event.target.value });
    }
  
  render() {
    

    return (
      <header className="Calculator-header">
        <img src={logo} className="App-logo" alt="prepit logo" />
        <h1>
          Welcome to the Calculator!
        </h1>
        <p style={{ marginTop: '20px' }} >
          To get started, please enter your monthly income.
            </p>

        <div className="money">
          <p className="dollar">
            $
          </p>

          <input
            className="box"
            placeholder="Enter monthly income"
            type="number"
            pattern="[0-9]*"
            inputMode="numeric"
            value={this.state.input}
            onChange={this.onUpdate}
          />
        </div>

          {calc(this.state.input)}
          
          
          <Button
            style={{ marginTop: '150px', color: 'white' }}
            href="https://Prepit.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Visit Prepit
          </Button>
      </header>
    );
  }
}

export default Calculator;