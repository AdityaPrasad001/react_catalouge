import React from "react";

import styles from "./Thumblins.module.css";
import Card from "./UI/Card";

const Thumblins = ({ catalouge, mainDisplay }) => {
  return (
    <Card className={styles["thumblin_container"]}>
      {catalouge.map((item) => {
        return (
          <img
            key={item.id}
            alt={item.title}
            src={item.url}
            className={mainDisplay.id === item.id ? styles.selected : ""}
          />
        );
      })}
    </Card>
  );
};

export default Thumblins;
