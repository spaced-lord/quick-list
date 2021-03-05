import axios from "axios";

export default {
  //Get route for ingredient type list
  ingredientTypeList: function () {
    return axios.get("/api/types/all");
  },
  //Get route for ingredients based on type selected
  ingredientMatchList: function (type) {
    return axios.post("/api/types/match", type);
  },

  //Get route for grocery list
  //Get route for recipe list
  recipeList: function () {
    return axios.get("/api/recipes/all");
  },
  //Get route for specific recipe
  getRecipe: function (recipe) {
    console.log(recipe);
  },
  //Post route for recipe
  newRecipe: function (recipe) {
    console.log(recipe);
    return axios.post("/api/recipes/new", recipe);
  },
  //Post route for ingredient
  newIngredient: function (ingredient) {
    console.log(ingredient);
    return axios.post("/api/ingredient/new", ingredient);
  },

  //Delete for grocery list item
  //Post for user login?
};
