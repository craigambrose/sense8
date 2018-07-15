import React from "react"
import ClusterList from "./ClusterList"

const OpenClusters = ({ clusters }) => {
  console.log("rendering with", clusters)
  return (
    <section className="light-section">
      <div className="container">
        <h2>Clusters forming...</h2>
        <ClusterList clusters={clusters} />
      </div>
    </section>
  )
}

export default OpenClusters
