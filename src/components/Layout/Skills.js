import React from "react";
import Title from "../UI/Title";
import './Skills.css'

// Logos
// import reactLogo from '../../assets/logos/';
import nodeLogo from '../../assets/logos/node.png';
import cssLogo from '../../assets/logos/css.png';
import jsLogo from '../../assets/logos/js.png';
import bootstrapLogo from '../../assets/logos/bootstrap-logo.png';
import githubLogo from '../../assets/logos/github.png';
import htmlLogo from '../../assets/logos/html.png';
import reactLogo from '../../logo.svg'

const Skills = () => {
  return (
    <div>
      <Title>SKILLS</Title>
      <div className="skills">
        <img alt="skills_js" src={jsLogo}/>
        <img alt="skills_node" src={nodeLogo}/>
        <img alt="skills_css" src={cssLogo}/>
        <img alt="skills_bootstrap" src={bootstrapLogo}/>
        <img alt="skills_github" src={githubLogo}/>
        <img alt="skills_html" src={htmlLogo}/>
        <img alt="skills_react" src={reactLogo}/>
      </div>
    </div>
  );
};

export default Skills;
