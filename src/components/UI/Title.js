import React from "react";
import classes from "./Title.module.css";

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h2>{props.children}</h2>
      <hr />
    </div>
  );
};

export default Title;
