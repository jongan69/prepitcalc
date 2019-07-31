import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/"> Home </Link>
      </li>
      <li>
        <Link to="/Calculator"> Calculator </Link>
      </li>
      <li>
        <Link to="http://prepit.org"> Prep it </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;