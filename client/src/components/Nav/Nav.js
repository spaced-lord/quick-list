import React from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "../../components/GoogleAuth/Login";
import Logout from "../../components/GoogleAuth/Logout";
import "../../styles/Nav.css";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className="navBar container">
      <span className="bg-transparent hover:bg-green-300 font-bold mx-6">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 font-bold mx-6">
        <Link
          to="/NewRecipe"
          className={
            location.pathname === "/NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          New Recipe
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 font-bold mx-6">
        <Link
          to="/SavedRecipe"
          className={
            location.pathname === "/SavedRecipe"
              ? "nav-link active"
              : "nav-link"
          }
        >
          My Recipes
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 font-bold mx-6">
        <Link
          to="/GroceryList"
          className={
            location.pathname === "/GroceryList"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Grocery List
        </Link>
      </span>

      <span className="LogInOUT">
        <Login className=""></Login>
      </span>
      <span className="LogInOUT">
        <Logout className=""></Logout>
      </span>
      <h1 className="title text-green-500 text-6xl p-10">The Quick-List App</h1>
    </div>
  );
}

export default NavTabs;
