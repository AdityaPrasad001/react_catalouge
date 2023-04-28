import React from "react";
import styles from "./TextDescription.module.css";

const TextDescription = ({ mainDisplay }) => {
  return (
    <div className={styles.container}>
      <h3 className="title">{mainDisplay.title}</h3>
      <p className="text">{mainDisplay.text}</p>
    </div>
  );
};

export default TextDescription;
