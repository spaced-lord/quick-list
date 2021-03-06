import React, { useState, useEffect } from "react";
import { List, ListItem } from "../components/List/List";
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
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <List>
        {groceryList.map((item) => (
          <ListItem name={item.name} key={item._id} />
        ))}
      </List>
    </div>
  );
};

export default GroceryList;
