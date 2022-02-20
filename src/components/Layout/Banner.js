import React, { useState } from "react";
import classes from "./Banner.module.css";
import Fade from "react-reveal/Fade";
import { BsChevronDoubleDown } from "react-icons/bs";

const Banner = () => {
  const [scrollDownMessage, setScrollDownMessage] = useState(false);
  const scrollDown = setTimeout(() => {
    setScrollDownMessage(true);
  }, 10000);
  return (
    <div className={classes.title} id="back-to-top">
      <div className={classes["title-row"]}>
        <Fade clear>
          <h2>
            Hey! I'm <span className={classes.name}> Matías Maldonado</span>
          </h2>
          <h2>Front-End Developer</h2>
        </Fade>
        {scrollDownMessage && (
          <Fade bottom>
            <p className={classes.scroll}>Scroll Down</p>
            <BsChevronDoubleDown className={classes.chevron}/>
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Banner;
