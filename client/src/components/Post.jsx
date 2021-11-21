import React from 'react'
import "./Post.css"

export default function Post(props) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="post-box">
      <h1 className="title">{truncate(props?.title, 25)}</h1>
      <h2 className="name">{props.name}</h2>
      <p className="body">{truncate(props?.body, 250)}</p>
    </div>
  )
}
