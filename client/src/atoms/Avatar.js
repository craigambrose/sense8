import React from "react"

const Avatar = ({ url, alt }) => {
  return <img alt={alt} src={url} className="avatar" />
}

export default Avatar
