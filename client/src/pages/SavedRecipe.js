import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List/List";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";
import "../styles/SavedRecipes.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const SavedRecipe = () => {
  //Pulls id from context and creates states
  const { id } = useContext(LoginContext);
  const [recipeList, setRecipeList] = useState([]);
  const [favRecipeList, setFavRecipeList] = useState([]);

  //Initial function for api call
  useEffect(() => {
    getRecipes();
  }, []);

  //Function to get all user recipes based on id
  const getRecipes = () => {
    API.recipeList({ user: id })
      .then((res) => {
        //Returns based on if recipe is favorit or not
        const favoritesList = res.data.filter((recipe) => {
          if (recipe.favorite) {
            return recipe;
          }
        });
        //Sets two lists
        setFavRecipeList(favoritesList);
        setRecipeList(res.data);
      })
      .catch((err) => console.log(err));
  };

  //Function to handle click on recipes
  const handleRecipeClick = (event) => {
    //Success notification to notify operator recipe was added
    createNotification("success");
    //Stores clicked on ID
    const recipeID = event.target.getAttribute("value");
    //Call to database to get ingredient with recipe ID value
    API.getRecipe(recipeID)
      .then((res) => {
        //Sets up data to be stored in grocery list collection
        const groceryArray = res.data.ingredients.map((item) => {
          return { name: item, user: id };
        });
        //Stores to grocery list collection
        API.addToGroceryList(groceryArray)
          .then((data) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  //Function to update favorites list
  const favFunction = (event) => {
    //Call to update database
    API.updateFav(event.target.getAttribute("value"))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Function to delete a recipe
  const deleteFunction = (event) => {
    //Call to delete recipe with selected ID
    API.deleteRecipe(event.target.getAttribute("value"))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => console.log(err));
  };

  //Function to return notification
  const createNotification = (type) => {
    switch (type) {
      case "success":
        return NotificationManager.success("Added To Grocery List", null, 100);
    }
  };

  //Return for page
  return (
    <div className="py-8 px-8 m-40 bg-green-300 font-bold text-center rounded-xl">
      {id ? (
        <>
          <NotificationContainer class="notification" />
          <h1>Favorites</h1>
          <List>
            {favRecipeList.map((recipe) => (
              <ListItem
                name={recipe.name}
                data={recipe.ingredients}
                key={recipe._id}
                value={recipe._id}
                onClick={handleRecipeClick}
                favorite={recipe.favorite}
                needFav="true"
                favFunc={favFunction}
                delFunc={deleteFunction}
              />
            ))}
          </List>
          <h1>Complete List</h1>
          <List>
            {recipeList.map((recipe) => (
              <ListItem
                name={recipe.name}
                data={recipe.ingredients}
                key={recipe._id}
                value={recipe._id}
                onClick={handleRecipeClick}
                favorite={recipe.favorite}
                needFav="true"
                favFunc={favFunction}
                delFunc={deleteFunction}
              />
            ))}
          </List>
        </>
      ) : (
        <div>
          <h1>Log in using Gmail credentials</h1>
          <p>
            Create titles for your favorite meals or even create a title for a
            list for your spouse with that forget memory so they never forget
            the kids milk again!
          </p>
        </div>
      )}
    </div>
  );
};

export default SavedRecipe;
