import React, {useState, useEffect} from "react";
import Card from "../Card"
import Header from "../shared/Header"
import Footer from "../shared/Footer"
import Search from "../Search"
import "./Home.css"

export default function Home(props) {


  return (
    <div id="main-box">
      <Header />
      <h1 id="main-title">Posts</h1>
      <div id="main-card-box">
        <Card />
      </div>
      <Footer />
    </div>
  )
}
