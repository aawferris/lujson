import React, {useState, useEffect} from 'react'
import axios from "axios"

import Post from "./Post"
import Search from './Search'
import "./Card.css"

export default function Card() {

  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [queriedProducts, setQueriedProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const userResp = await axios.get("https://jsonplaceholder.typicode.com/users");
      const postResp = await axios.get("https://jsonplaceholder.typicode.com/posts")
      setUser(userResp.data)
      setPost(postResp.data)
      console.log(userResp.data, postResp.data)
    }

    fetchData()
  }, [])


  const handleSubmit = event => event.preventDefault()

  const handleSearch = event => {
    const newQueriedProducts = post.filter(post => post.id.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedProducts(newQueriedProducts)
  }

  const handleClick = event => {
    post.map((post, idx) =>
      <Post
        title={post.title}
        name={user.name}
        body={post.body}
        id={post.id}
        index={idx}
      />
    )
  }

  return (
    <div id="main-box">
      <Search onSubmit={handleSubmit} onChange={handleSearch} />

      {post.map((post, index) => index < 10 ?
        <Post
          title={post.title}
          name={user.name}
          body={post.body}
          id={post.id}
          index={index}
        />
        : null 
      )}
      <button id="load-btn" onClick={handleClick}>Load more</button>
    </div>
  )
}
