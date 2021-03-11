import React from "react";

const Button = ({ name, onClick, text, disabled }) => {
  return (
    <div className="container my-5">
      <button
        className="bg-green-500 hover:bg-green-300 text-white px-2 m-auto py-2 font-bold center rounded"
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
