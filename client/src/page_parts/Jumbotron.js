import React, { Component } from "react"
import LoginButton from "../atoms/LoginButton"

class Jumbotron extends Component {
  onResponse = response => {
    this.props.onLogin(response)
  }

  render() {
    const { onLogin, user } = this.props

    return (
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-4">Find Your Cluster</h1>
          <p className="lead">
            A cluster forms when 8 people of about the same age, maybe even born
            on the same day, are connected despite coming from very diverse
            backgrounds.
          </p>
          <hr className="my-4" />
          <p className="button-list">
            {user ? (
              <img
                src={user.picture.data.url}
                className="img-button"
                alt={user.name}
              />
            ) : (
              <LoginButton onLogin={onLogin} />
            )}
            <a
              className="btn btn-outline-dark btn-lg"
              href="https://www.facebook.com/groups/1612660195660988/"
              role="button"
            >
              Facebook Group
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Jumbotron
