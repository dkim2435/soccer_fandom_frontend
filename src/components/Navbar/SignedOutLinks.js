//! Navbar that the user will see when they are not signed in yet
import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/signup'>
        <i class="material-icons">event_note</i>
      </NavLink></li>
      <li><NavLink to='/signin'>
        <i class="material-icons">fingerprint</i>
      </NavLink></li>
    </ul>
  )
}

export default SignedOutLinks