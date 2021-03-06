import React from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "../../components/GoogleAuth/Login";
import Logout from "../../components/GoogleAuth/Logout";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className="nav nav-tabs">
      <span className="section">
        <Login />
        <Logout />
      </span>
      <span className="nav-item sections">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </span>
      <span className="nav-item sections">
        <Link
          to="/NewRecipe"
          className={
            location.pathname === "/NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          New Recipe
        </Link>
      </span>
      <span className="nav-item sections">
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
      <span className="nav-item sections">
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
    </div>
  );
}

export default NavTabs;
