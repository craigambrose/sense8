import React from "react"
import User from "./User"

const Cluster = ({ cluster }) => {
  const users = cluster.users || []
  return (
    <div className="cluster">
      {users.map(user => <User key={user.id} user={user} />)}
    </div>
  )
}

export default Cluster
