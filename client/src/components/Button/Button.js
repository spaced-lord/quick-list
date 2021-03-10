import React from "react";

const Button = ({ name, onClick, text, disabled }) => {
  return (
    <div className="container">
      <button
        className="bg-green-500 hover:bg-green-300 text-white font-bold center py-2 px-4 rounded"
        name={name}
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
