/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import '../styles/Homepage.css';
import logo from '../misc/logo.svg';
  

function handleClick () {
  window.location.assign('/Calculator'); 
}



function HomePage () {
  const [pageInfo, setPageInfo] = useState({ visits: 0, comments: [] });
  function returnValue(e) {
    return pageInfo;
  }
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(`/api/Home/visits`);
      const body = await result.json();
      setPageInfo(body)
    }
    fetchData();
  }, [onclick = returnValue()]);
    return(
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
    <p> This page has been viewed {pageInfo.visits} times</p>
    </header>
  )};

export default HomePage;