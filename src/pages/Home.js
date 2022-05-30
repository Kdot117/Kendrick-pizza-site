import React from "react";
import { Link } from "react-router-dom";
import ciclepizza from "../assets/ciclepizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${ciclepizza})` }}>
      <div className="headerContainer">
        <h1> Kendrick's Pizzeria </h1>
        <p> PIZZA FIT FOR ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
