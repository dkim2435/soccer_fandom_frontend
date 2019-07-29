
export const SignUp = form => {
  console.log(form)
  return dispatch => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        user: {
          username: form.username.value,
          email: form.email.value,
          password: form.password.value,
        }
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.jwt) {
          localStorage.setItem('token', res.jwt)
          dispatch({ type: 'SET_USER', user: res.user })
        }
      })
  }
}
