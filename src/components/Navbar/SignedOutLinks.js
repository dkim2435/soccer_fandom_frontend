//! Navbar that the user will see when they are not signed in yet
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>Signup</NavLink></li>
      <li><NavLink to='/signin'>Login</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks