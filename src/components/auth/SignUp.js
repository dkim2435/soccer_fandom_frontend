import React, { Component } from 'react'
import { TextInput, Button } from 'react-materialize'
import '../auth/SignUp.css'
import * as actions from '../../store/actions/index'
import { connect } from 'react-redux'


class SignUp extends Component {
  state = {
    controls: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'username ',
          placeholder: 'User Name'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email ',
          placeholder: 'Email Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password ',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    }
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    return isValid;
  }

  inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        // valid: this.checkValidity(event.target.value, this.state.controls[controlName].validation),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.onSignUp(event.target)
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.controls) {
      formElementsArray.push({
        id: key,
        config: this.state.controls[key]
      })
    }

    // const form = formElementsArray.map(formElement => (
    //   <TextInput
    //     label={formElement.config.elementConfig.placeholder}
    //     key={formElement.id}
    //     elementType={formElement.config.elementConfig}
    //     value={formElement.config.value}
    //     invalid={!formElement.config.valid}
    //     shouldValidate={formElement.config.validation}
    //     touched={formElement.config.touched}
    //     onChange={(event) => this.inputChangedHandler(event, formElement.id)} />

    // ))
    const usernameForm =
      <TextInput
        icon="face"
        name='username'
        key={formElementsArray.id}
        label="User Name"
        onChange={(event) => this.inputChangedHandler(event, formElementsArray.id)}
      />

    const emailForm =
      <TextInput
        icon="email"
        email
        validate
        name='email'
        key={formElementsArray.id}
        label="Email"
        onChange={(event) => this.inputChangedHandler(event, formElementsArray.id)}
      />

    const passwordForm =
      <TextInput
        icon="vpn_key"
        password
        name='password'
        key={formElementsArray.id}
        label="Password"
        onChange={(event) => this.inputChangedHandler(event, formElementsArray.id)}
      />

    return (
      <div className="SignUp">
        <form onSubmit={this.submitHandler}>
          {usernameForm}
          {emailForm}
          {passwordForm}
          <Button btnType="Success"> SIGN UP </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: form => dispatch(actions.SignUp(form))
  }
}
export default connect(null, mapDispatchToProps)(SignUp)
