//! Navbar that the user will see once they are logged in
import React from 'react';
import { connect } from 'react-redux'

// need to export this to perform routing:
import { NavLink } from 'react-router-dom';

const SignedInLinks = (props) => {
  return (
    // links to the right
    <ul className="right">
      <li><NavLink to='/fandoms'>My Page</NavLink></li>
      <li><NavLink onClick={() => props.dispatch({ type: 'LOG_OUT' })} to='/'>Log Out</NavLink></li>
      <li><NavLink to='/highlights' >Highlights</NavLink></li>

    </ul>
  )
}

export default connect()(SignedInLinks)
