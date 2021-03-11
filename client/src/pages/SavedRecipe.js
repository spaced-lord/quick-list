import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List/List";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";

const SavedRecipe = () => {
  const { id } = useContext(LoginContext);
  const [recipeList, setRecipeList] = useState([]);
  const [favRecipeList, setFavRecipeList] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    API.recipeList({ user: id })
      .then((res) => {
        const favoritesList = res.data.filter((recipe) => {
          if (recipe.favorite) {
            return recipe;
          }
        });

        setFavRecipeList(favoritesList);
        setRecipeList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleRecipeClick = (event) => {
    const recipeID = event.target.getAttribute("value");
    API.getRecipe(recipeID)
      .then((res) => {
        const groceryArray = res.data.ingredients.map((item) => {
          return { name: item, user: id };
        });
        API.addToGroceryList(groceryArray)
          .then((data) => {})
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  const favFunction = (event) => {
    API.updateFav(event.target.getAttribute("value"))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFunction = (event) => {
    API.deleteRecipe(event.target.getAttribute("value"))
      .then((res) => {
        getRecipes();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {id ? (
        <>
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
        <h1>Please login to see recipes...</h1>
      )}
    </div>
  );
};

export default SavedRecipe;
