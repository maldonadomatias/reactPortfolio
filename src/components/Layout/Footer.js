import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

import classes from "./Footer.module.css";


const Footer = () => {
  return (
    <div>
      <ul className={classes.social}>
        <li>
          <a href="https://www.linkedin.com/in/matias-maldonado/">
            <BsLinkedin className={classes.icons} />
          </a>
        </li>
        <li>
          <a href="https://github.com/maldonadomatias">
            <BsGithub className={classes.icons} />
          </a>
        </li>
      </ul>
      <p className={classes.copyright}>© 2021 Matías A. Maldonado. All Rights Reserved. Terms, Privacy &amp; Accessibility</p>
    </div>
  );
};

export default Footer;
