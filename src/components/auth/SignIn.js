import React, { Component } from 'react'
import { TextInput, Button } from 'react-materialize'
import '../auth/SignIn.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'

class SignIn extends Component {

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onSignIn(event.target)
  }

  render() {
    return (
      <div className="SignIn">
        <form onSubmit={this.submitHandler}>
          <TextInput email validate label="Email" name='email' />
          <TextInput password label="password" name='password' />
          <Button btnType="Success"> SUBMIT </Button>
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