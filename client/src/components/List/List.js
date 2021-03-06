import React from "react";
import {
  BorderStar,
  SolidStar,
} from "../../components/FontAwesome/FontAwesome";

export function List({ children }) {
  return <ul style={{ listStyle: "none" }}>{children}</ul>;
}

export function ListItem({ name, value, favorite, onClick, needFav }) {
  return (
    <div style={{ border: "solid 1px black" }}>
      <li value={value} onClick={onClick}>
        {name}
        {needFav ? !favorite ? <BorderStar /> : <SolidStar /> : null}
      </li>
    </div>
  );
}
