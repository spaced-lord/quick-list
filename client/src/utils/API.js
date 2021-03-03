import axios from "axios";

export default {
  //Get route for grocery list
  //Get route for recipe list
  recipeList: function () {
    return axios.get("/api/recipes/");
  },
  //Post route for ingredient
  newIngredient: function (ingredient) {
    return axios.post("/api/ingredient/new", ingredient);
  },
  //Post route for recipe
  newRecipe: function (recipe) {
    console.log(recipe);
    return axios.post("/api/recipes/new", recipe);
  },
  //Delete for grocery list
  //Post for user login?
};
