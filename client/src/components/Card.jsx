import React, {useState, useEffect} from 'react'
import axios from "axios"

import Post from "./Post"

export default function Card() {

  const [user, setUser] = useState([])
  const [post, setPost] = useState([])

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
    }
    getPosts()
  }, [])


  return (
    <div id="main-box">
      {post.map((post, index) => (
        <Post
          title={post.title}
          body={post.body}
          id={post.userId}
          index={index}
        />
      ))}
    </div>
  )
}
