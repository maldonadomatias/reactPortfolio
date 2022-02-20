import React from "react";
import Title from "../UI/Title";
import Card from "../UI/Card";

import classes from "./Portfolio.module.css";

const Portfolio = (props) => {
  return (
    <div id="portfolio">
      <Title>PORTFOLIO</Title>

      <div className={classes.portfolio}>
        {props.items.map((inf) => (
          <Card
            key={inf.id}
            image={inf.image}
            title={inf.title}
            description={inf.description}
            link={inf.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
