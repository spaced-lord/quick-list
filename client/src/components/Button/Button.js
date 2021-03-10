import React from "react";

const Button = ({ name, onClick, text, disabled }) => {
  return (
    <button
      name={name}
      onClick={onClick}
      disabled={disabled}
      class="btn bg-blue-500 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
