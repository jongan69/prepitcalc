import React from 'react';
import Button from '@material-ui/core/Button';
import '../styles/Homepage.css';
import logo from '../misc/logo.svg';
  
// {/* <Button
//         color="primary"
//         className="enter"
//         onClick={calc(input)}        
//         > 
//         Enter 
//         </Button> */}
function handleClick () {
  window.location.assign('/Calculator');
  //how to open pop up page passing parameters?    
}


const HomePage = () => (
    
    <header className="Homepage-header">
      <img src={logo} className="App-logo" alt="prepit logo" />
      <h1>
        Welcome to Prepit
        </h1>
         
      <Button
      className="Button"
      onClick={() => handleClick()}
      >
        Click here to learn about your budget!
      </Button>
    </header>
  );

export default HomePage;