import React from 'react';
import Button from '@material-ui/core/Button';
import calc from '../components/calc';
import '../styles/Calculator.css';
import logo from '../misc/logo.svg';

const Calculator = () => (

  <header className="App-header">
    <img src={logo} className="App-logo" alt="prepit logo" />
    <h1>
      Welcome to the Calculator!
    </h1>
    <calc/>
    <Button/>
  </header>
);

export default Calculator;