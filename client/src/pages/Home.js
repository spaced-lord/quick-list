import React from "react";
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
// import NavTabs from "./NavTabs"
import {Link} from "react-router-dom"
// import {CardImg, Container} from "reactstrap"
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

</div>

=======

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
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </p>
    </div>
>>>>>>> 02baf642e705d7e6be5944000ab36c012feb7da2
>>>>>>> Stashed changes
  );
}

export default Home;
