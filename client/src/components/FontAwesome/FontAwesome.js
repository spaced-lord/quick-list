import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as borderStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt as deleteButton } from "@fortawesome/free-solid-svg-icons";

export const BorderStar = ({ onClick, value }) => {
  return (
    <span onClick={onClick} value={value}>
      <FontAwesomeIcon style={{ pointerEvents: "none" }} icon={borderStar} />
    </span>
  );
};

export const SolidStar = ({ onClick, value }) => {
  return (
    <span onClick={onClick} value={value}>
      <FontAwesomeIcon style={{ pointerEvents: "none" }} icon={solidStar} />
    </span>
  );
};

export const DeleteButton = () => {
  return <FontAwesomeIcon icon={deleteButton} />;
};
