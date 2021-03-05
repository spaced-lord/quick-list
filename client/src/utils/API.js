import axios from "axios";

export default {
  //Get route for ingredient type list
  ingredientTypeList: function () {
    return axios.get("/api/types/all");
  },
  //Get route for ingredients based on type selected
  ingredientMatchList: function (type) {
    return axios.post("/api/ingredient/match", type);
  },
  //Get route for grocery list
  //Get route for recipe list
  recipeList: function () {
    return axios.get("/api/recipes/");
  },
  //Post route for ingredient
  newIngredient: function (ingredient) {
    console.log(ingredient);
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
