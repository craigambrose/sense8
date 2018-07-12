import React from "react"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"

const responseFacebook = response => {
  console.log("facebook response", response)
}

const componentClicked = event => {
  console.log("clicked", event)
}

const LoginButton = ({ onLogin }) => (
  <FacebookLogin
    appId="1904644719557229"
    autoLoad={false}
    fields="name,email,birthday,picture,hometown"
    scope="public_profile,user_birthday,user_hometown"
    onClick={componentClicked}
    callback={onLogin}
    render={renderProps => {
      console.log("render props", renderProps)
      return (
        <button className="btn btn-dark btn-lg" onClick={renderProps.onClick}>
          Activate Psycellium
        </button>
      )
    }}
  />
)

export default LoginButton
