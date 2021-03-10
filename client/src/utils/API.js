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
  //Delete for grocery list item
  deleteGroceryItem: function (itemName) {
    return axios.delete("/api/groceryList/" + itemName);
  },
  //Clear grocery list
  clearList: function () {
    return axios.delete("/api/groceryList/clear/list");
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
    return axios.post("/api/recipes/new", recipe);
  },
  //Update to add recipe to favorites
  updateFav: function (recipeID) {
    return axios.put("/api/recipes/" + recipeID);
  },
  //Delete for recipe list
  deleteRecipe: function (recipeID) {
    return axios.delete("/api/recipes/" + recipeID);
  },
  //Post route for ingredient
  newIngredient: function (ingredient) {
    return axios.post("/api/ingredient/new", ingredient);
  },

  //Post for user login?
};
