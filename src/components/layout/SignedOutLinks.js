//! Navbar that the user will see when they are not signed in yet
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/'>Signup</NavLink></li>
      <li><NavLink to='/'>Login</NavLink></li>
    </ul>
  )
}

export default SignOutLinks