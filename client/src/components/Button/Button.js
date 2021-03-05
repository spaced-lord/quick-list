import React from "react";

const Button = ({ name, onClick, text, disabled }) => {
  return (
    <button name={name} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
