import React, {useState, useEffect} from "react";
import Card from "../Card"
import Header from "../shared/Header"
import Footer from "../shared/Footer"
import Search from "../Search"
import "./Home.css"

export default function Home(props) {
  const [queriedProducts, setQueriedProducts] = useState([])

  return (
    <div id="main-box">
      <Header />
      {/* <input type="text" placeholder="Search"/> */}
      <div id="main-card-box">
        <Card />
      </div>
      <Footer />
    </div>
  )
}
