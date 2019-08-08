import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Calc } from '../components/Calc';
import '../styles/Calculator.css';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#fafafa' },
    secondary: { main: '#fafafa' },
    text: '#fff',
  }
});

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
        {/* <img src={logo} className="App-logo" alt="prepit logo" /> */}
        <h1 className="Title">
          Welcome to the Calculator!
        </h1>
        <p className="Instructions" >
          To get started, please enter your monthly income.
            </p>
        <div className="Box">
          <p className="Money">
            $
        </p>
          <ThemeProvider theme={theme}>
            <TextField
              type="number"
              label="Enter Dollar Value"
              placeholder="Monthly Income"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
              autoFocus
              value={this.state.input}
              onChange={this.onUpdate}
            />
          </ThemeProvider>
        </div>

          {Calc(this.state.input)}
          
          {/* <Button
            color="secondary"
            className="Button"
            href="https://Prepit.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Prepit
          </Button> */}
      </header>
    );
  }
}

export default Calculator;