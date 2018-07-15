import React, { Component } from "react"
import "./App.css"
import Jumbotron from "./page_parts/Jumbotron"
import JoinForm from "./page_parts/JoinForm"
import MatchesForming from "./page_parts/MatchesForming"
import { requestJoinCluster, loadOpenClusters } from "./services/lambda"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { user: null, joinState: "new", stateLoading: false }
  }

  setUser = user => {
    this.setState({ user, stateLoading: false })
  }

  requestJoinCluster = user => {
    this.setState({ stateLoading: true })
    requestJoinCluster(user).then(this.loadFormingClusters)
  }

  loadFormingClusters = () => {
    this.setState({ joinState: "forming", stateLoading: true })
    loadOpenClusters().then(data => {
      this.setState({ joinState: "forming", stateLoading: false })
      console.log("loaded open clusters", data)
    })
  }

  shouldShowJoinForm() {
    const { user, joinState } = this.state
    return user && joinState == "new"
  }

  shouldShowMatches() {
    const { user, joinState } = this.state
    return user && joinState == "forming"
  }

  render() {
    const { user, joinState, stateLoading } = this.state

    return (
      <div className="App">
        <Jumbotron onLogin={this.setUser} user={user} />
        <div
          className={`expanding-container ${
            this.shouldShowJoinForm() ? "open" : "closed"
          }-container`}
        >
          {this.shouldShowJoinForm() && (
            <JoinForm
              user={user}
              onRequestJoin={this.requestJoinCluster}
              loading={stateLoading}
            />
          )}
        </div>
        {this.shouldShowMatches() && <MatchesForming />}
      </div>
    )
  }
}

export default App
