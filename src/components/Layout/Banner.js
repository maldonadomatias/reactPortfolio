import React from "react";
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <div className={classes.title} id="back-to-top">
      <div className={classes['title-row']}>
        <h2>Hey! I'm        <span className={classes.name}> Matías Maldonado</span></h2>
        <h2>Full-Stack Web Developer.</h2>
      </div>
    </div>
  );
};

export default Banner;
