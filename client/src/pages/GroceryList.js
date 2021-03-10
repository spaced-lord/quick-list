import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List/List";
import Button from "../components/Button/Button";
import API from "../utils/API";

const GroceryList = () => {
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    API.getGroceryList()
      .then((res) => {
        setGroceryList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const delFunction = (event) => {
    console.log(event.target.getAttribute("value"));
    API.deleteGroceryItem(event.target.getAttribute("value"))
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  };

  const clearList = (event) => {
    API.clearList()
      .then((res) => {
        getList();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <List>
        {groceryList.map((item) => (
          <ListItem
            name={item.name}
            key={item._id}
            value={item._id}
            delFunc={delFunction}
          />
        ))}
      </List>
      <Button name="deleteAll" onClick={clearList} text="Clear List" />
    </div>
  );
};

export default GroceryList;
