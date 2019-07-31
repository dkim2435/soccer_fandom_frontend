import React, { Component } from 'react'
import { TextInput, Button } from 'react-materialize'
import '../auth/SignIn.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'
import '../../stylesheets/SignIn.css'


class SignIn extends Component {

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onSignIn(event.target)
  }

  render() {
    return (
      <div className="SignIn center">
        <form onSubmit={this.submitHandler}>
          <TextInput icon="email" email validate label="Email" name='email' />
          <TextInput icon="vpn_key" password label="Password" name='password' />
          <Button btnType="Success"> Login </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: form => dispatch(actions.SignIn(form))
  }
}
export default connect(null, mapDispatchToProps)(SignIn)