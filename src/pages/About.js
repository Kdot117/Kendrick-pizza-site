import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";


function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Kendrick's Pizzeria is a fictional pizza shop founded in 2003 on S Sherman Blv in Redmond, WA. Starting with 3 employees and now expanding to over 50, this one stop shop destination has been serving unique dishes to Redmond natives for over 19 years and counting.
          We specialize in our pies by using only authentic Italian ingredients just as the founder envisioned it. At Kendrick's pizzeria, we appreciate your input and are always open to any new pie ideas you may have in mind! Our pizza family and partners would like to thank you for your business for these last two decades and hope there are many more to come!
        </p>
      </div>
    </div>
  );
}

export default About;
