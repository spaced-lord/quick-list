import React from "react";
import "./App.css";
import NavTabs from "./components/Nav/Nav";
import NewRecipe from "./pages/NewRecipe";
import HomePage from "./pages/Home";
import Signup from "./pages/signup";
import GroceryList from "./pages/GroceryList";
import SavedRecipes from "./pages/SavedRecipes";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="App">
      {/* <NewRecipe /> */}
      <HomePage />
      <Signup />
    </div>
  );
}

export default App;
