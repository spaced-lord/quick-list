import React from "react";

import "../styles/Home.css";
import { Link, Route } from "react-router-dom";

function Home(props) {
  {
    console.log("props:", props);
  }
  return (
    <div className="article homeBackground">
      <br className=""></br>
      <h2 className="aside main">Enter ingredients to your favorite meals! </h2>
      <h2 className="aside">Have them stored to select at anytime! </h2>
      <h2 className="aside">Have a Grocery List in just a few Clicks! </h2>

      <p>
        Quick-list wants to make your life super easy and as stress free as possible during these times of COVID! This application will 
        help you to sync up your favorite meals, the ingredients you need make them, to create a grocery list that allows you to get in and out 
        of the grocery store quickly. Find that grocery item, delete it as you cruise the store aisles. Store that new favorite recipe for use in 
        the future. This application is your friend in so many ways!        
      </p>
    </div>
  );
}

export default Home;
