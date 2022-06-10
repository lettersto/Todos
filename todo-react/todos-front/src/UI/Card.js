import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.card} onClick={props.onClick}>
      {props.children}
      <span className={classes.underline}></span>
    </div>
  );
};

export default Card;
