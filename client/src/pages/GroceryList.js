import React, { useState, useEffect, useContext } from "react";
import { List, ListItem } from "../components/List/List";
import Button from "../components/Button/Button";
import API from "../utils/API";
import LoginContext from "../utils/LoginContext";

const GroceryList = () => {
  const { id } = useContext(LoginContext);
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    API.getGroceryList({ user: id })
      .then((res) => {
        const groceryListArray = res.data.map((item) => {
          return item.name;
        });
        const grocerySet = [...new Set(groceryListArray)];
        setGroceryList(grocerySet);
      })
      .catch((err) => console.log(err));
  };

  const delFunction = (event) => {
    API.deleteGroceryItem({
      name: event.target.getAttribute("value"),
      user: id,
    })
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  };

  const clearList = (event) => {
    API.clearList({ user: id })
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="py-8 px-8 m-40 bg-green-300 text-white font-bold text-center">
      {id ? (
        <>
          <List>
            {groceryList.map((item, index) => (
              <ListItem
                name={item}
                value={item}
                key={index}
                delFunc={delFunction}
              />
            ))}
          </List>
          <Button name="deleteAll" onClick={clearList} text="Clear List" />
        </>
      ) : (
        <div>
          <h1>Please Login </h1>
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
