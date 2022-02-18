import React from "react";
import classes from './AboutCard.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const AboutCard = (props) => {
  return (
    <div className={classes.card}>
      <FontAwesomeIcon className={classes.icon} icon={props.icon}/>
      <p className={classes.title}>{props.title}</p>
      <p className={classes.description}>{props.description}</p>
    </div>
  );
};

export default AboutCard;
