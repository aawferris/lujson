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
    const getUser = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users")
      console.log(response.data);
      setUser(response.data)
    }
    getUser()
  }, [])

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
      console.log(response.data);
      setPost(response.data)
      setQueriedProducts(post)
    }
    getPosts()
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
