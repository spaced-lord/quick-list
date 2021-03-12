import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List/List";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";
import "../styles/SavedRecipes.css";

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
    <div className="py-8 px-8 m-40 bg-green-300 text-white font-bold text-center table-auto border-seperate rounded-xl sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      {id ? (
        <>
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
          <h1>Please login</h1>
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
