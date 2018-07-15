import React, { Component } from "react"
import "./App.css"
import Jumbotron from "./page_parts/Jumbotron"
import JoinForm from "./page_parts/JoinForm"
import MatchesForming from "./page_parts/MatchesForming"
import { requestJoinCluster } from "./services/lambda"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null, joinState: "new" }
  }

  setUser = user => {
    this.setState({ user })
  }

  requestJoinCluster = user => {
    this.setState({ joinState: "requesting" })
    requestJoinCluster(user).then(() => {
      this.setState({ joinState: "forming" })
    })
  }

  shouldShowJoinForm() {
    const { user, joinState } = this.state
    return user && (joinState == "new" || joinState == "requesting")
  }

  shouldShowMatches() {
    return true
    const { user, joinState } = this.state
    return user && joinState == "forming"
  }

  render() {
    const { user, joinState } = this.state
    const showJoinForm = this.shouldShowJoinForm()

    return (
      <div className="App">
        <Jumbotron onLogin={this.setUser} user={user} />
        <div
          className={`expanding-container ${
            showJoinForm ? "open" : "closed"
          }-container`}
        >
          {showJoinForm && (
            <JoinForm
              user={user}
              onRequestJoin={this.requestJoinCluster}
              loading={joinState == "requesting"}
            />
          )}
        </div>
        {this.shouldShowMatches() && <MatchesForming />}
      </div>
    )
  }
}

export default App
