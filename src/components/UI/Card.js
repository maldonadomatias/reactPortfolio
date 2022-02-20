import React from "react";
import Button from "./Button";
import classes from "./Card.module.css";
import Fade from "react-reveal/Fade";

const Card = (props) => {
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} alt={props.title} />
      <p className={classes.title}>
        {props.title}
        <Fade top>
          <span> |</span>
        </Fade>
      </p>
      <hr className={classes.line} />
      <p className={classes.description}>{props.description}</p>
      <a href="www.">
        <Button>+ MORE INFO</Button>
      </a>
    </div>
  );
};

export default Card;
