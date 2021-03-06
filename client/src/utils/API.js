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
  getGroceryList: function () {
    return axios.get("/api/groceryList/all");
  },
  //Post route for grocery list
  addToGroceryList: function (ingredientsArray) {
    return axios.post("/api/groceryList/add", ingredientsArray);
  },
  //Get route for recipe list
  recipeList: function () {
    return axios.get("/api/recipes/all");
  },
  //Get route for specific recipe
  getRecipe: function (recipeID) {
    return axios.get("/api/recipes/" + recipeID);
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
  //Delete for recipe list
  //Post for user login?
};
