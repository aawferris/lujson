import React, {useState, useEffect} from 'react'
import axios from "axios"

import Post from "./Post"
import Search from './Search'

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
    const newQueriedProducts = post.filter(post => post.id.includes(event.target.value))
    setQueriedProducts(newQueriedProducts)
  }

  return (
    <div id="main-box">
      <Search onSubmit={handleSubmit} onChange={handleSearch} />
      {post.map((post, index) => index < 10 ?
        <Post
          title={post.title}
          body={post.body}
          id={post.userId}
          index={index}
        />
        : null
      )}
      <button>Load more</button>
    </div>
  )
}
