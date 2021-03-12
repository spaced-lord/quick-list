import React from "react";

export const Dropdown = ({ value, defaultText, name, onChange, children }) => {
  return (
<<<<<<< Updated upstream
    <select className="round-md" name={name} onChange={onChange} value={value}>
=======
    <select name={name} onChange={onChange} value={value}>
>>>>>>> Stashed changes
      <option value="default" disabled hidden>
        Choose {defaultText}
      </option>
      {children}
    </select>
  );
};

export const DropdownOptions = ({ value }) => {
  return <option value={value}>{value}</option>;
};
