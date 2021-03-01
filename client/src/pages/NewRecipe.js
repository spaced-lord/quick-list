//Import React, useState, and necessary components.
import React, { useState } from "react";
import { Dropdown, DropdownOptions } from "../components/Dropdown/Dropdown";
import API from "../utils/API";

//Create page component
const NewRecipe = () => {
  //State for page components
  const [componentState, setComponentState] = useState({});

  //State for ingredient selections
  const [selection, setSelection] = useState({});

  //
  const submitFunction = (event) => {
    event.preventDefault();
    if (selection.name) {
      API.newIngredient({ type: selection.type, name: selection.name })
        .then((res) => console.log("Added"))
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
      setComponentState({});
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "type":
        setSelection((previousState) => ({ ...previousState, [name]: value }));
        setComponentState({
          secondDropdown: (
            <Dropdown
              name="selected"
              onChange={handleInputChange}
              defaultText="Ingredient"
              id="second"
            >
              {test2.map((item, index) => (
                <DropdownOptions value={item} key={index} />
              ))}
            </Dropdown>
          ),
        });
        break;
      case "selected":
        setComponentState((previousState) => ({
          ...previousState,
          input: <input name="name" onChange={handleInputChange}></input>,
        }));
        break;
      case "name":
        setSelection((previousState) => ({ ...previousState, [name]: value }));
        break;
      default:
        break;
    }
  };

  //Test variable will be deleted.
  const test = ["Grain", "Vegetable", "Meat", "Dairy", "Fruit", "Other"];
  const test2 = ["Create New", "morr"];

  //Return for the page
  return (
    <form onSubmit={submitFunction}>
      <Dropdown name="type" onChange={handleInputChange} defaultText="Type">
        {test.map((item, index) => (
          <DropdownOptions value={item} key={index} />
        ))}
      </Dropdown>
      {componentState.secondDropdown}
      {componentState.input}
      <button type="submit">submit</button>
    </form>
  );
};

export default NewRecipe;
