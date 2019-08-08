/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import '../styles/Details.css';
import logo from '../misc/logo.svg';

function Details (){
  
  const [pageInfo, setPageInfo] = useState({ visits: 0, comments: [] });
  function returnValue(e) {
    return pageInfo;
  }
  useEffect(() => {
    setPageInfo({ visits: 69 })
  }, [onclick=returnValue()]);

    return(
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
    )
};

export default Details;