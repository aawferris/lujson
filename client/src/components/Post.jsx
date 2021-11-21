import React from 'react'

export default function Post(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.name}</h2>
      <p>{props.body}</p>
      {props.id}
    </div>
  )
}
