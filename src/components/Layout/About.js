import React from "react";
import AboutCard from "./AboutCard";
import classes from "./About.module.css";

const About = (props) => {
  return (
    <div>
      <div className={classes.title}>
        <h2>ABOUT ME</h2>
        <hr/>
      </div>

      <div className={classes['about--cards']}>
        {props.items.map((inf) => (
          <AboutCard
            icon={inf.icon}
            key={inf.id}
            title={inf.title}
            description={inf.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
