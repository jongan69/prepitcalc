import React from 'react';
import calc from './calc';
import Button from '@material-ui/core/Button';
import '../styles/App.css';
import logo from '../misc/logo.svg';
  
// {/* <Button
//         color="primary"
//         className="enter"
//         onClick={calc(input)}        
//         > 
//         Enter 
//         </Button> */}



const HomePage = () => (
    
    <header className="App-header">
      <img src={logo} className="App-logo" alt="prepit logo" />
      <h1>
        Welcome to Prepit
        </h1>
         
      <Button>
        Click here to learn about your budget!
      </Button>
    </header>
  );

export default HomePage;