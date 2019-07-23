//! Creating Navbar Function here

import React from 'react';
//to perform routing
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';

const Navbar = () => {
  return (
    //navbar forming class
    <nav className="nav-wrapper light-blue lighten-2">
      <div className="container">
        <Link to='/' className="brand-logo">Soccer Fandom</Link>
        <SignedInLinks />
      </div>
    </nav>
  )
}

export default Navbar