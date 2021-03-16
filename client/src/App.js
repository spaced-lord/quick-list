//Dependencies
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import NavTabs from "./components/Nav/Nav";
import NewRecipe from "./pages/NewRecipe";
import HomePage from "./pages/Home";
import GroceryList from "./pages/GroceryList";
import SavedRecipe from "./pages/SavedRecipe";
import LoginContext from "./utils/LoginContext";

function App() {
  //Sets up state for login info
  const [userLoginState, setUserLoginState] = useState({
    id: 0,
  });

  //Function to set login state
  const loginFunction = (id) => {
    setUserLoginState({ id: id });
  };

  //Function to clear login state
  const logoutFunction = () => {
    setUserLoginState({ id: 0 });
  };

  //Return with context for login
  return (
    <LoginContext.Provider value={userLoginState}>
      <Router>
        <div>
          <NavTabs login={loginFunction} logout={logoutFunction} />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/SavedRecipe" component={SavedRecipe} />
          <Route path="/NewRecipe" component={NewRecipe} />
          <Route path="/GroceryList" component={GroceryList} />
        </div>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
