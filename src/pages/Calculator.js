import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
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
        <iframe src="https://www.mealpro.net/bmr/?color=435363"
          title="BMR Calculator" 
          style={{
          'marginTop': '80px',
          'max-width': '100%',
          'frameborder': "0",
          'width': '500',
          'height': '500px'
          }}>
        </iframe>
        <iframe 
        src="https://www.mealpro.net/bmi/?color=435363" 
        title="BMI Calculator"
        style={{
        'max-width': '100%',
        'frameborder': "0", 
        'width':  '500', 
        'height': '500px'
        }}></iframe>
        {/* <iframe
          title="Calorie Calculator"
          src="https://www.choosemyplate.gov/widgets-sm/myplate-plan-start"
          scrolling="no" style={{ 'min-height': '400px', 'marginTop': '80px' }}>
        </iframe> */}
        <p className="Instructions" >
          Enter your monthly income
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
        <div style={{marginBottom: '10px', paddingBottom: '60px'}}>
          {Calc(this.state.input)}
        </div>
          <p style={{paddingBottom: '20px'}}>
          *THIS WEBSITE IS IN DEVELOPMENT, FOR MORE INFORMATION VISIT THE 
          <a href='/LearnMore'> LEARN MORE </a>
          PAGE*
          </p>
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