import React, { useRef } from "react";

import classes from './Form.module.css'

import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Button from "./Button";
init("user_4DcqQld8FULIfZKDk8vbe");

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0yal825",
        "template_2pda0vc",
        form.current,
        "user_4DcqQld8FULIfZKDk8vbe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className={classes.form}>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Email" />
        <label>Message</label>
        <textarea name="message" placeholder="Enter your message"/>
        <Button type="submit" value="Send">Send Message</Button>
      </form>
    </div>
  );
};

export default Form;
