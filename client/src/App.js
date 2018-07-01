import React, { Component } from "react"
import "./App.css"
import Jumbotron from "./page_parts/Jumbotron"
import JoinForm from "./page_parts/JoinForm"
import { requestJoinCluster } from "./services/lambda"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null }
  }

  setUser = user => {
    this.setState({ user })
  }

  requestJoinCluster = user => {
    console.log("request join a cluster with user", user)
    requestJoinCluster(user)
  }

  render() {
    const { user } = this.state
    const joinFormState = user ? "open" : "closed"

    return (
      <div className="App">
        <Jumbotron onLogin={this.setUser} user={user} />
        <div className={`expanding-container ${joinFormState}-container`}>
          {user && (
            <JoinForm user={user} onRequestJoin={this.requestJoinCluster} />
          )}
        </div>
      </div>
    )
  }
}

export default App
