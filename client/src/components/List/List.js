import React from "react";
import "./style.css";
import {
  BorderStar,
  SolidStar,
  DeleteButton,
} from "../../components/FontAwesome/FontAwesome";

//Parent list element
export function List({ children }) {
  return <ul style={{ listStyle: "none" }}>{children}</ul>;
}

//Child list elements
export function ListItem({
  name,
  value,
  favorite,
  onClick,
  needFav,
  favFunc,
  delFunc,
}) {
  return (
    <div style={{ border: "solid 3px #10b981" }}>
      <li value={value} onClick={onClick}>
        {name}
      </li>
      {needFav ? (
        !favorite ? (
          <BorderStar value={value} onClick={favFunc} />
        ) : (
          <SolidStar value={value} onClick={favFunc} />
        )
      ) : null}
      <DeleteButton onClick={delFunc} value={value} />
    </div>
  );
}
