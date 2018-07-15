import React from "react"
import Avatar from "./Avatar"

const User = ({ user }) => {
  if (!user || !user.picture || !user.picture.data || !user.picture.data.url)
    return null
  return <Avatar url={user.picture.data.url} alt={user.name} />
}

export default User
