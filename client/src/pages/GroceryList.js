//Dependencies
import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List/List";
import { Fade } from "react-awesome-reveal";
import Button from "../components/Button/Button";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";

//Grocery list page
const GroceryList = () => {
  //Uses id from context hook
  const { id } = useContext(LoginContext);
  //Grocery list array state
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    //Gets initial list
    getList();
  }, []);

  //Function to call database
  const getList = () => {
    //Gets all items in database with matching id
    API.getGroceryList({ user: id })
      .then((res) => {
        //Maps array of objects and returns only the name
        const groceryListArray = res.data.map((item) => {
          return item.name;
        });
        //Removes duplicates by creating a set
        const grocerySet = [...new Set(groceryListArray)];
        //Sets grocery list state
        setGroceryList(grocerySet);
      })
      .catch((err) => console.log(err));
  };

  //Delete function to remove items from list
  const delFunction = (event) => {
    //Call to delete items from grocery list database
    API.deleteGroceryItem({
      //Removes based on ingredient name and user id
      name: event.target.getAttribute("value"),
      user: id,
    })
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  };

  //Function to delete entire list
  const clearList = (event) => {
    //Call to clear grocery list database
    API.clearList({ user: id })
      .then((res) => {
        //Calls to database again to regenerate list
        getList();
      })
      .catch((err) => console.log(err));
  };

  //Uses ternary operators to return data based on state and context
  return (
    <div className="py-8 px-8 m-40 bg-green-300 font-bold text-center rounded-xl">
      {id ? (
        <>
          <List>
            <Fade triggerOnce direction="down" cascade duration={300}>
              {groceryList.map((item, index) => {
                return (
                  <ListItem
                    name={item}
                    value={item}
                    key={index}
                    delFunc={delFunction}
                  />
                );
              })}
            </Fade>
          </List>
          <Button name="deleteAll" onClick={clearList} text="Clear List" />
        </>
      ) : (
        <div>
          <h1>Log in using Gmail credentials </h1>
          <p>
            Login simply using your gmail account. Once you store your favorite
            recipes the grocery list is literally at your fingertip!
          </p>
        </div>
      )}
    </div>
  );
};

export default GroceryList;
