import React from "react";
import Card from "../Card"
import Header from "../shared/Header"
import Footer from "../shared/Footer"
import "./Home.css"

export default function Home() {
  return (
    <div id="main-box">
      <Header />
      <div id="main-card-box">
        <Card />
      </div>
      <Footer />
    </div>
  )
}
