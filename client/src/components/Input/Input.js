import React from "react";

const InputBar = ({ name, onChange }) => {
  return (
    <input
      className="border-gray-300 rounded "
      name={name}
      onChange={onChange}
    ></input>
  );
};

export default InputBar;
