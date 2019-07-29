//! Creating Navbar Function here

import React from 'react';
//to perform routing
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
  return (
    //navbar forming class ( light-blue lighten-2)
    <nav className="nav-wrapper blue-grey">
      <div className="container">
        <Link to='/' className="brand-logo">Soccer Fandom</Link>
        {
          props.loggedIn ?
            <SignedInLinks />
            :
            <SignedOutLinks />
        }
      </div>
    </nav>
  )
}

let mapStateToProps = state => ({ loggedIn: state.auth.loggedIn })
export default connect(mapStateToProps)(Navbar)