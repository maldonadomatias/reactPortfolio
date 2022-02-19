import React, { useRef } from "react";
import Title from "../UI/Title";

import classes from "./Contact.module.css";

import { BsChevronDoubleUp } from "react-icons/bs";
import Form from "../UI/Form";

const Contact = () => {

  return (
    <div>
      <div className={classes["back-to-top"]}>
        <a href="#back-to-top">
          <BsChevronDoubleUp />
        </a>
      </div>
      <Title>CONTACT ME</Title>
      <Form/>
      
    </div>
  );
};

export default Contact;
