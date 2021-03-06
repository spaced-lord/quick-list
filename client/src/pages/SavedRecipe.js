import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List/List";
import { BorderStar, SolidStar } from "../components/FontAwesome/FontAwesome";
import API from "../utils/API";

const SavedRecipe = () => {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    API.recipeList()
      .then((res) => {
        setRecipeList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleRecipeClick = (event) => {
    const recipeID = event.target.getAttribute("value");
    API.getRecipe(recipeID)
      .then((res) => {
        API.addToGroceryList(res.data.ingredients)
          .then((data) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <List>
        {recipeList.map((recipe) => (
          <ListItem
            name={recipe.name}
            data={recipe.ingredients}
            key={recipe._id}
            value={recipe._id}
            onClick={handleRecipeClick}
          />
        ))}
        <BorderStar />
        <SolidStar />
      </List>
    </div>
  );
};

export default SavedRecipe;
