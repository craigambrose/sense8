import React from "react"
import Cluster from "../atoms/Cluster"

const MyCluster = ({ cluster }) => {
  return (
    <section className="light-section">
      <div className="container">
        <h2>Your Cluster...</h2>
        <Cluster cluster={cluster} />
      </div>
    </section>
  )
}

export default MyCluster
