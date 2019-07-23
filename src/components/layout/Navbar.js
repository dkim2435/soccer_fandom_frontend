//! Creating Navbar Function here

import React from 'react';
//to perform routing
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    //navbar forming class ( light-blue lighten-2)
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to='/' className="brand-logo">Soccer Fandom</Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  )
}

export default Navbar