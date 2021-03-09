import React from "react";
import {
  BorderStar,
  SolidStar,
  DeleteButton,
} from "../../components/FontAwesome/FontAwesome";

export function List({ children }) {
  return <ul style={{ listStyle: "none" }}>{children}</ul>;
}

export function ListItem({
  name,
  value,
  favorite,
  onClick,
  needFav,
  favFunc,
  deleteFunc,
}) {
  return (
    <div style={{ border: "solid 1px black" }}>
      <li value={value} onClick={onClick}>
        {name}
      </li>
      {needFav ? (
        !favorite ? (
          <BorderStar value={value} onClick={favFunc} favorite={favorite} />
        ) : (
          <SolidStar value={value} onClick={favFunc} favorite={favorite} />
        )
      ) : null}
      <DeleteButton onClick={deleteFunc} />
    </div>
  );
}
