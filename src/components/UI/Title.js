import React from "react";
import classes from "./Title.module.css";
import Fade from 'react-reveal/Fade';

const Title = (props) => {
  return (
    <div className={classes.title}>
      <h2>{props.children}</h2>
      <Fade left>
        <hr />
      </Fade>
    </div>
  );
};

export default Title;
