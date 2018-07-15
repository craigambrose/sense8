import React from "react"
import Cluster from "../atoms/Cluster"

const ClusterList = ({ clusters }) => {
  if (!clusters) return null

  return (
    <div className="cluster-list">
      {clusters.map(cluster => (
        <Cluster key={cluster.clusterId} cluster={cluster} />
      ))}
    </div>
  )
}

export default ClusterList
