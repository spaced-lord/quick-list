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

    <div className="navBar container py-5 max-w-full border-b-2 border-green-500 border-opacity-50">
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-4">

        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-5 navLinks">
        <Link
          to="/NewRecipe"
          className={
            location.pathname === "/NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          New Recipe
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-5 navLinks">
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
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl  mx-6 px-5 py-5 navLinks">
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
      <div className="flex justify-end -my-8">
        <span className="LogInOUT">
          <Login className=""></Login>
        </span>
        <span className="LogInOUT">
          <Logout className=""></Logout>
        </span>
      </div>
      <h1 className="title text-green-500 text-6xl p-20 subpixel-antialiased">
        QuickList
      </h1>

    </div>
  );
}

export default NavTabs;
