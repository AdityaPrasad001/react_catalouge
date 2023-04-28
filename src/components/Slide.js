import React from "react";
import styles from "./Slide.module.css";
import Card from "./UI/Card";

const Slide = ({ mainDisplay }) => {
  return (
    <Card className={styles.slide}>
      <img alt="slide_image" src={mainDisplay.url} />
    </Card>
  );
};

export default Slide;
