//Import React, useState, and necessary components.
import React, { useState } from "react";
import { Dropdown, DropdownOptions } from "../components/Dropdown/Dropdown";
import API from "../utils/API";

//Create page component
const NewRecipe = () => {
  //Set state (Placeholder for test...Need name change)
  const [state, setState] = useState({
    stuff: "",
  });

  const clickFunction = () => {
    API.recipeList()
      .then((res) => console.log(res.data))
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  //Dropdown change function. (Might need to change...Need to determine how to use state)
  const handleSelectChange = (event) => {
    //Variable for selected option
    const selection = event.target.value;
    //Switch based on selected option
    switch (selection) {
      case "Grain":
        setState({
          stuff: (
            <Dropdown onChange={handleSelectChange}>
              {test.map((item, index) => (
                <DropdownOptions value={item} key={index} />
              ))}
            </Dropdown>
          ),
        });
        break;
      default:
        setState({ stuff: "" });
        break;
    }
  };

  //Test variable will be deleted.
  const test = ["Grain", "Vegetable", "Meat", "Dairy", "Fruit", "Other"];

  //Return for the page
  return (
    <div>
      <Dropdown onChange={handleSelectChange}>
        {test.map((item, index) => (
          <DropdownOptions value={item} key={index} />
        ))}
      </Dropdown>
      {state.stuff}
      <button onClick={clickFunction}>submit</button>
    </div>
  );
};

export default NewRecipe;
