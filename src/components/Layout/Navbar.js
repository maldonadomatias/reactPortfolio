import React, { useState } from "react";
import classes from "./Navbar.module.css";
import cv from '../../assets/cv.pdf'
import {AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [activeToggle, setActiveToggle] = useState(false);

  const toggleHandler = () => {
    setActiveToggle((prevActiveToggle) => !prevActiveToggle);
  };

  const btnClasses = `${classes["nav-wrapper"]} ${
    activeToggle ? classes.active : ""
  }`;

  return (
    <div className={btnClasses}>
      <nav>
        <div className={classes["navigation"]}>
          <ul className={classes["nav-items"]}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a
                href={cv}
                download="matiasmaldonado-cv"
                id="cv"
              >
                CV
              </a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div style={{color:'white'}} onClick={toggleHandler} className={classes['nav-toogler']}>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
