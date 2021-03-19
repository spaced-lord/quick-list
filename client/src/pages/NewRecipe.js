//Dependencies and components
import React, { useState, useReducer, useContext } from "react";
import { Dropdown, DropdownOptions } from "../components/Dropdown/Dropdown";
import IngredientList from "../components/IngredientList/IngredientList";
import InputBar from "../components/Input/Input";
import Button from "../components/Button/Button";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import "../styles/NewRecipe.css";
import LoginContext from "../utils/LoginContext";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

//Create page component
const NewRecipe = () => {
  const history = useHistory();
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
    //Sets first dropdown value and resets second to default
    setDropdownState({ ...dropdownState, second: "default" });
    //Temporary variable for state
    state = [];
    //Pushes items that match ingredient type to temp array
    action[0].ingredientMatch.map((item) => {
      return state.push(item.name);
    });
    //Adds "Create New" to beginning of array
    state.unshift("Create New");
    //Sets array
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
        //Reset PageState object
        setIngredient({});
        setPageState({});
        setDropdownState({ first: "default", second: "default" });
        break;
      case "addNewRecipe":
        //Sends notification to user
        createNotification("success");
        //Sets ingredient array
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
        //Pulls ingredient types from database
        API.ingredientTypeList()
          .then((res) => {
            //Sets type array for dropdown
            const tempSelectArray = res.data.map((type) => type.type);
            setTypeSelectArray(tempSelectArray);
          })
          .catch((err) => console.log(err));
        break;
      case "completeToGroceryList":
        //Adds ingredient to array
        setIngredientsArray((previousState) => [
          ...previousState,
          ingredient.ingredientName,
        ]);
        //Converts ingredient array to array of objects for database
        const groceryArray = ingredientsArray.map((item) => {
          return { name: item, user: id };
        });
        //Post to grocery list
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
        history.push("/GroceryList");
        break;
      default:
        break;
    }
  };

  //Function to handle dropdown changes
  const handleSelectChange = (event) => {
    //Deconstructs event.target object
    const { name, value } = event.target;
    //Switch case for dropdown
    switch (name) {
      case "type":
        //Adds to ingredient state for ternary operators in return
        setIngredient({ [name]: value });
        //Sets up first dropdown value
        setDropdownState({ ...dropdownState, first: value });
        //Api call to find matching ingredients based on type
        API.ingredientMatchList({ [name]: value }).then((res) => {
          const selectIngredientArray = res.data.filter(
            (item) => item.type === value
          );
          //Sets second dropdown selections
          dispatch(selectIngredientArray);
        });
        break;
      case "ingredientName":
        //Checks for new ingredient
        if (value === "Create New") {
          //Sets page state for ternary operators in return
          setPageState({ ...pageState, [name]: "Placeholder" });
        } else {
          //Sets values needed for second dropdown and database storage
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
        //Sets ingredient if typed into input
        setIngredient({ ...ingredient, [name]: value, new: true });
        break;
      default:
        break;
    }
  };

  //Function to remove select ingredient from new recipe
  const deleteItem = (event) => {
    //Remove item from array
    ingredientsArray.splice(
      event.target.parentElement.getAttribute("value"),
      1
    );
    //Store in new array for storage
    const newIngredientsArray = ingredientsArray;
    //Sets ingredient array to be rerendered
    setIngredientsArray((previousState) =>
      newIngredientsArray.map((item) => {
        return item;
      })
    );
  };

  //Function to create success message to user
  const createNotification = (type) => {
    switch (type) {
      case "success":
        return NotificationManager.success(
          "Recipe Successfully Added",
          null,
          1000
        );
    }
  };

  //Return for the page
  return (
    <div>
      <div className="py-8 px-8 m-40 bg-green-300 font-bold text-center rounded-xl">
        {id ? (
          <div>
            <button className="animate-bounce">
              The fun begins here!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 17l-4 4m0 0l-4-4m4 4V3"
                />
              </svg>
            </button>
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
            <div>
              {ingredientsArray.map((item, index) => (
                <IngredientList
                  key={index}
                  name={item}
                  value={index}
                  onClick={deleteItem}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <h1>Log in using Gmail credentials</h1>
            <p>
              Take your favorite meals and store the individual ingredients Or
              even enter the items for your weekly routine shopping list. Your
              grocery list will ensure you never forgot an ingrediant for dinner
              again!
            </p>
          </div>
        )}
        <NotificationContainer />
      </div>
    </div>
  );
};

export default NewRecipe;
