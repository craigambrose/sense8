import React, { Component } from "react"
import "./App.css"
import Jumbotron from "./page_parts/Jumbotron"
import JoinForm from "./page_parts/JoinForm"
import OpenClusters from "./page_parts/OpenClusters"
import MyCluster from "./page_parts/MyCluster"
import {
  requestJoinCluster,
  loadOpenClusters,
  loadClusterForUser
} from "./services/lambda"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      stateLoading: false,
      clusters: null
    }
  }

  setUser = user => {
    this.setState({ user, stateLoading: false })
    this.loadUserData(user)
  }

  loadUserData = user => {
    loadClusterForUser(user).then(this.setMyCluster)
  }

  requestJoinCluster = user => {
    this.setState({ stateLoading: true })
    requestJoinCluster(user).then(() => this.loadUserData(this.state.user))
  }

  setMyCluster = ({ cluster }) => {
    this.setState({ stateLoading: false, cluster })
  }

  loadFormingClusters = () => {
    this.setState({ stateLoading: true })
    loadOpenClusters().then(data => {
      this.setState({
        stateLoading: false,
        clusters: data.clusters
      })
    })
  }

  shouldShowJoinForm() {
    const { user, cluster } = this.state
    return user && !cluster
  }

  shouldShowMatches() {
    const { user, cluster } = this.state
    return user && cluster
  }

  render() {
    const { user, stateLoading, clusters, cluster } = this.state

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
        {cluster && <MyCluster cluster={cluster} />}
        {this.shouldShowMatches() && <OpenClusters clusters={clusters} />}
      </div>
    )
  }
}

export default App
