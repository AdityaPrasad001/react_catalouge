import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const childStyles = props.className;
  return (
    <div className={`${styles.card} ${childStyles}`}>{props.children}</div>
  );
};

export default Card;
