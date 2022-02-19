import React from "react";
import classes from "./Myself.module.css";
import molpo from "../../assets/molpo.jpeg";

const Myself = () => {
  return (
    <div className={classes.myself}>
      <img className={classes.img} src={molpo} />
      <p style={{fontSize: '1.8rem'}}>Matías Agustín Maldonado</p>
      <p>I'm a full-stack web developer from Tucumán, Argentina.<br/>
      Creative, organized and perfectionist. I enjoy new challenges that help me grow my potential. Strong mind to overtake challenges. Good chemistry with teamwork. </p>
    </div>
  );
};

export default Myself;
