import axios from "axios";

export default {
  //Get route for grocery list
  //Get route for recipe list
  recipeList: function () {
    return axios.get("/api/recipes/");
  },
  //Post route for recipe
  //Delete for grocery list
  //Post for user login?
};
