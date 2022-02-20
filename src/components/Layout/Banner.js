import React from "react";
import classes from "./Banner.module.css";
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className={classes.title} id="back-to-top">
      <div className={classes["title-row"]}>
        <Fade bottom>
          <h2>
            Hey! I'm <span className={classes.name}> Matías Maldonado</span>
          </h2>
        <h2>Front-End Developer</h2>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
