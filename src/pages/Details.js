import React from 'react';

// import Button from '@material-ui/core/Button';
import '../styles/Details.css';
import logo from '../misc/logo.svg';

const Details = () => (

  <header className="Homepage-header">
    <h1>
      Details
        </h1>
    <img src={logo} className="App-logo" alt="prepit logo" />
    <p>
      Hi there and welcome to the App!
      Here at Prepit we have one goal in mind: 
    </p>
    <p>
      Helping you to eat healthier while on a budget!
    </p>
  </header>
);

export default Details;