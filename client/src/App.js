import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/Nav/Nav";
import NewRecipe from "./pages/NewRecipe";
import HomePage from "./pages/Home";
import Signup from "./pages/signup";
import GroceryList from "./pages/GroceryList";
import SavedRecipes from "./pages/SavedRecipes";
import history from "./utils/history";
import "tailwindcss/tailwind.css";

// function App() {
//   return (
//     <div className="App">
//       {/* <NewRecipe /> */}
//       <HomePage />
//       <Signup />
//     </div>
//   );
// }

function App() {
  return (
    <Router history={history}>
      <div>
        <NavTabs />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/Signup" component={Signup} />
        <Route path="/NewRecipe" component={NewRecipe} />
        <Route path="/GroceryList" component={GroceryList} />
      </div>
    </Router>
  );
}

export default App;
