//! Creating Navbar Function here

import React, { Fragment } from 'react';
//to perform routing
import { Link } from 'react-router-dom';
import Sidenav from '../materialize/Sidenav'

import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
  return (
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