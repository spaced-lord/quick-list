import React from "react";
import Home from "../Nav";

export const Dropdown = ({ defaultText, name, onChange, children }) => {
  return (
    <select name={name} onChange={onChange} defaultValue="default">
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
