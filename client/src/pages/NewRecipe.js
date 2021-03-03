//Import React, useState, and necessary components.
import React, { useState } from "react";
import { Dropdown, DropdownOptions } from "../components/Dropdown/Dropdown";
import InputBar from "../components/Input/Input";
import API from "../utils/API";

//Create page component
const NewRecipe = () => {
  //State for ingredient
  const [ingredient, setIngredient] = useState({});

  //State for recipe
  const [recipeState, setRecipeState] = useState({});

  //Page state
  const [pageState, setPageState] = useState({});

  //Ingredients array
  const [ingredientsArray, setIngredientsArray] = useState([]);

  //Function for button clicks
  const submitFunction = (event) => {
    //Prevents page reload
    event.preventDefault();
    //Deconstructs target and gets button name
    const { name } = event.target;
    //Switch case based on name
    switch (name) {
      case "addIngredient":
        //Adds to ingredients array used for completed recipe
        setIngredientsArray((previousState) => [
          ...previousState,
          pageState.ingredientName,
        ]);
        //Pushes new ingredient to database
        API.newIngredient({
          type: ingredient.type,
          name: pageState.ingredientName,
        })
          .then((res) => {})
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
        //Reset ingredient object
        setIngredient({});
        break;

      case "completeRecipe":
        ////To slow to work(Ask question)
        // setIngredientsArray((previousState) => [
        //   ...previousState,
        //   ingredient.ingredientName,
        // ]);
        //Post new recipe to database
        API.newRecipe({
          name: recipeState.name,
          ingredients: ingredientsArray,
        })
          .then((res) => {})
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
        //Reset states of recipe and ingredient
        setIngredient({});
        setRecipeState({});
        break;
      case "recipeName":
        //Sets the recipe name with the state changed by the input
        setRecipeState({ name: pageState.recipeName });
        break;
      default:
        break;
    }
  };

  //Function to handle dropdown changes
  const handleSelectChange = (event) => {
    //Deconstructs event.target object
    const { name, value } = event.target;
    //Sets the ingredient type from the dropdown
    switch (name) {
      case "type":
        setIngredient({ [name]: value });
        break;
      case "ingredientName":
        if (value === "Create New") {
          setIngredient({ ...ingredient, [name]: "Placeholder" });
        } else {
          setIngredient({ ...ingredient, [name]: "" });
          setPageState({ ...pageState, [name]: value });
        }
        break;
      default:
        break;
    }
    //Set a placeholder for input to appear.  There is a bug here if you erase from the input.
  };

  //Function to handle input changes
  const handleInputChange = (event) => {
    //Deconstructs event.target object
    const { name, value } = event.target;
    //Switch case for name
    switch (name) {
      //First input entry. Recipe name
      case "recipeName":
        //Sets a temporary state to be transferred on submit
        setPageState({ recipeName: value });
        break;
      case "ingredientName":
        setPageState({ ...pageState, [name]: value });
        break;
      default:
        break;
    }
  };

  //Test variable will be deleted.
  const test = ["Grain", "Vegetable", "Meat", "Dairy", "Fruit", "Other"];
  const test2 = ["Create New", "More"];
  const test3 = ["Something", "More"];

  //Return for the page
  return (
    <form onSubmit={submitFunction}>
      {recipeState.name ? (
        <div>
          <p>{recipeState.name}</p>
          <Dropdown
            name="type"
            onChange={handleSelectChange}
            defaultText="Type"
          >
            {test.map((item, index) => (
              <DropdownOptions value={item} key={index} />
            ))}
          </Dropdown>
        </div>
      ) : (
        <InputBar name="recipeName" onChange={handleInputChange} />
      )}
      {ingredient.type && (
        <div>
          <Dropdown
            name="ingredientName"
            onChange={handleSelectChange}
            defaultText="Ingredient"
          >
            {test2.map((item, index) => (
              <DropdownOptions value={item} key={index} />
            ))}
          </Dropdown>
        </div>
      )}
      {ingredient.ingredientName === "Placeholder" && (
        <InputBar name="ingredientName" onChange={handleInputChange} />
      )}

      {recipeState.name ? (
        <div>
          <button name="addIngredient" onClick={submitFunction}>
            Add Ingredient
          </button>
          <button name="completeRecipe" onClick={submitFunction}>
            Complete Recipe
          </button>
        </div>
      ) : (
        <div>
          <button name="recipeName" onClick={submitFunction}>
            Add Ingredients
          </button>
        </div>
      )}
      {console.log(recipeState)}
      {console.log(ingredientsArray)}
      {console.log(pageState)}
    </form>
  );
};

export default NewRecipe;

//Notes from Tyler
// {
//   !apiArray.length
//     ? test2.map((item, index) => <DropdownOptions value={item} key={index} />)
//     : apiArray.map((item, index) => (
//         <DropdownOptions value={item} key={index} />
//       ));
// }
// useEffect(() => {
//   //do your api call
// }, [apiArray]);
