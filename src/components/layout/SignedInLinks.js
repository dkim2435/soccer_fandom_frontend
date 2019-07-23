import React from 'react';

// need to export this to perform routing:
import { NavLink } from 'react-router-dom';

const SignInLinks = () => {
  return (
    // links to the right
    <ul className="right">
      <li><NavLink to='/'>New Team</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className="btn btn-floating red">EK</NavLink></li>
    </ul>
  )
}

export default SignInLinks