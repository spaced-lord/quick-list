//Import React, useState, and necessary components.
import React, { useState, useReducer, useContext } from "react";
import { Dropdown, DropdownOptions } from "../components/Dropdown/Dropdown";
import InputBar from "../components/Input/Input";
import Button from "../components/Button/Button";
import API from "../utils/API";
// import history from "../utils/history";
import "../styles/NewRecipe.css";
import LoginContext from "../utils/LoginContext";

//Create page component
const NewRecipe = () => {
  const { id } = useContext(LoginContext);
  //State for ingredient
  const [ingredient, setIngredient] = useState({});

  //State for recipe
  const [recipeState, setRecipeState] = useState({});

  //Page state
  const [pageState, setPageState] = useState({});

  //Ingredients array
  const [ingredientsArray, setIngredientsArray] = useState([]);

  //State for first dropdown array
  const [typeSelectArray, setTypeSelectArray] = useState([]);

  //Dropdown State
  const [dropdownState, setDropdownState] = useState({
    first: "default",
    second: "default",
  });

  //State for second dropdown array
  const [ingredSelectArray, dispatch] = useReducer((state, action) => {
    setDropdownState({ ...dropdownState, second: "default" });
    state = [];
    action[0].ingredientMatch.map((item) => {
      return state.push(item.name);
    });
    state.unshift("Create New");
    return state;
  }, []);

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
        if (ingredient.ingredientName) {
          setIngredientsArray((previousState) => [
            ...previousState,
            ingredient.ingredientName,
          ]);
        }
        //Pushes new ingredient to database
        if (ingredient.new) {
          API.newIngredient({
            type: ingredient.type,
            name: ingredient.ingredientName,
          })
            .then((res) => {})
            .catch((err) => {
              if (err) {
                console.log(err);
              }
            });
        }
        //Reset PageState object
        setIngredient({});
        setPageState({});
        setDropdownState({ first: "default", second: "default" });
        break;
      case "addNewRecipe":
        ////To slow to work(Ask question)
        setIngredientsArray((previousState) => [
          ...previousState,
          ingredient.ingredientName,
        ]);
        //Post new recipe to database
        API.newRecipe({
          name: recipeState.name,
          ingredients: ingredientsArray,
          user: id,
        })
          .then((res) => {})
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
        //Reset states of recipe and ingredient
        setPageState({});
        setRecipeState({});
        setIngredientsArray([]);
        setIngredient({});
        break;
      case "recipeName":
        //Sets the recipe name with the state changed by the input
        setRecipeState({ name: pageState.recipeName });
        API.ingredientTypeList()
          .then((res) => {
            const tempSelectArray = res.data.map((type) => type.type);
            setTypeSelectArray(tempSelectArray);
          })
          .catch((err) => console.log(err));
        break;
      case "completeToGroceryList":
        ////To slow to work(Ask question)
        setIngredientsArray((previousState) => [
          ...previousState,
          ingredient.ingredientName,
        ]);
        const groceryArray = ingredientsArray.map((item) => {
          return { name: item, user: id };
        });

        API.addToGroceryList(groceryArray)
          .then((res) => {})
          .catch((err) => console.log(err));
        //Post new recipe to database
        API.newRecipe({
          name: recipeState.name,
          ingredients: ingredientsArray,
          user: id,
        })
          .then((res) => {})
          .catch((err) => {
            if (err) {
              console.log(err);
            }
          });
        //Reset states of recipe and ingredient
        setPageState({});
        setRecipeState({});
        setIngredientsArray([]);
        setIngredient({});

        // history.push("/GroceryList");
        refreshPage();
        break;
      default:
        break;
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  //Function to handle dropdown changes
  const handleSelectChange = (event) => {
    //Deconstructs event.target object
    const { name, value } = event.target;
    //Switch case for dropdown
    switch (name) {
      case "type":
        setIngredient({ [name]: value });
        setDropdownState({ ...dropdownState, first: value });
        API.ingredientMatchList({ [name]: value }).then((res) => {
          const selectIngredientArray = res.data.filter(
            (item) => item.type === value
          );
          dispatch(selectIngredientArray);
        });
        break;
      case "ingredientName":
        if (value === "Create New") {
          setPageState({ ...pageState, [name]: "Placeholder" });
        } else {
          setPageState({ ...pageState, [name]: "" });
          setIngredient({ ...ingredient, [name]: value });
          setDropdownState({ ...dropdownState, second: value });
        }
        break;
      default:
        break;
    }
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
        setIngredient({ ...ingredient, [name]: value, new: true });
        break;
      default:
        break;
    }
  };

  //Return for the page
  return (
    <div>
      {id ? (
        <div className="recipeform">
          <form onSubmit={submitFunction}>
            {recipeState.name ? (
              <div>
                <p>{recipeState.name}</p>
                <Dropdown
                  name="type"
                  onChange={handleSelectChange}
                  defaultText="Type"
                  value={dropdownState.first}
                >
                  {typeSelectArray.map((item, index) => (
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
                  value={dropdownState.second}
                >
                  {ingredSelectArray.map((item, index) => (
                    <DropdownOptions value={item} key={index} />
                  ))}
                </Dropdown>
              </div>
            )}
            {pageState.ingredientName === "Placeholder" && (
              <InputBar name="ingredientName" onChange={handleInputChange} />
            )}
            {recipeState.name ? (
              <div>
                <Button
                  name="addIngredient"
                  onClick={submitFunction}
                  text="Add Ingredient"
                />
                <Button
                  name="addNewRecipe"
                  onClick={submitFunction}
                  text="Add New Recipe"
                  disabled={
                    ingredientsArray.length < 1 ||
                    Object.keys(ingredient).length > 0
                  }
                />
                <Button
                  name="completeToGroceryList"
                  onClick={submitFunction}
                  text="Save & Add To List"
                  disabled={
                    ingredientsArray.length < 1 ||
                    Object.keys(ingredient).length > 0
                  }
                />
              </div>
            ) : (
              <div>
                <Button
                  name="recipeName"
                  onClick={submitFunction}
                  text="Submit Recipe Name"
                />
              </div>
            )}
          </form>
          {ingredientsArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : (
        <h1>Please login to see more...</h1>
      )}
    </div>
  );
};

export default NewRecipe;
