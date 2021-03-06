import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as borderStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

export const BorderStar = () => {
  return <FontAwesomeIcon icon={borderStar} />;
};

export const SolidStar = () => {
  return <FontAwesomeIcon icon={solidStar} />;
};
