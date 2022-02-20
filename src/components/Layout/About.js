import React from "react";
import AboutCard from "./AboutCard";
import classes from "./About.module.css";
import Title from "../UI/Title";

const About = (props) => {
  return (
    <div id="about">
      <Title>ABOUT ME</Title>

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
