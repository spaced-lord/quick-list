import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "../../components/GoogleAuth/Login";
import Logout from "../../components/GoogleAuth/Logout";
import "../../styles/Nav.css";
import LoginContext from "../../utils/LoginContext";

function NavTabs({ login, logout }) {
  const { id } = useContext(LoginContext);
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <div className="navBar container grid-cols-12 py-5">
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-4">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-5">
        <Link
          to="/NewRecipe"
          className={
            location.pathname === "/NewRecipe" ? "nav-link active" : "nav-link"
          }
        >
          New Recipe
        </Link>
      </span>
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl mx-6 px-5 py-5">
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
      <span className="bg-transparent hover:bg-green-300 rounded font-bold text-xl  mx-6 px-5 py-5">
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
        {id ? (
          <span className="LogInOUT">
            <Logout className="" logout={logout}></Logout>
          </span>
        ) : (
          <span className="LogInOUT">
            <Login className="" login={login}></Login>
          </span>
        )}
      </div>
      <h1 className="title text-green-500 text-6xl p-20 subpixel-antialiased">
        Quick-List
      </h1>
    </div>
  );
}

export default NavTabs;
