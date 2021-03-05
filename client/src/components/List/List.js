import React from "react";

export function List({ children }) {
  return <ul>{children}</ul>;
}

export function ListItem({ name, data, value, favorite, onClick }) {
  return (
    <li value={value} onClick={onClick}>
      {name}
    </li>
  );
}
