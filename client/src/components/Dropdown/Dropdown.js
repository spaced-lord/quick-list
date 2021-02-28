import React from "react";

export const Dropdown = ({ onChange, children }) => {
  return (
    <select onChange={onChange} defaultValue="default">
      <option value="default" disabled hidden>
        Choose Type
      </option>
      {children}
    </select>
  );
};

export const DropdownOptions = ({ onChange, value }) => {
  return <option value={value}>{value}</option>;
};
