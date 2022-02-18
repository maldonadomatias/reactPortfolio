import React from "react";
import classes from "./Myself.module.css";
import molpo from "../../assets/molpo.jpeg";

const Myself = () => {
  return (
    <div className={classes.myself}>
      <img className={classes.img} src={molpo} />
      <p style={{fontSize: '1.8rem'}}>Matías Agustín Maldonado</p>
      <p>I'm a full-stack web developer from Tucumán, Argentina.
            Creative and perfectionist. I'm looking new challenges in a company that let me learn and enhance my professional potential.</p>
    </div>
  );
};

export default Myself;
