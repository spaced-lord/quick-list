import React from "react";

//Parent element of dropdown
export const Dropdown = ({ value, defaultText, name, onChange, children }) => {
  return (
    <select className="round-md" name={name} onChange={onChange} value={value}>
      <option value="default" disabled hidden>
        Choose {defaultText}
      </option>
      {children}
    </select>
  );
};

//Child element of dropdown
export const DropdownOptions = ({ value }) => {
  return <option value={value}>{value}</option>;
};
