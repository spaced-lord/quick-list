import React from "react";

//List component for ingredients on new recipe page
const IngredientList = ({ value, name, onClick }) => {
  return (
    <div value={value}>
      <h3>{name}</h3>
      <h4 onClick={onClick}>X</h4>
    </div>
  );
};

export default IngredientList;
