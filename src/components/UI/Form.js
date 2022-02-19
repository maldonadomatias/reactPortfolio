import React, { useRef, useState } from "react";

import classes from "./Form.module.css";

import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import Button from "./Button";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

init("user_4DcqQld8FULIfZKDk8vbe");

const Form = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a valid name and email (non-empty values).',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      return;
    }
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
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <div className={classes.card}>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          value={enteredUsername}
          onChange={usernameChangeHandler}
        />
        <label htmlFor="user_email">Email</label>
        <input type="email" name="user_email" placeholder="Email" />
        <label htmlFor="message">Message</label>
        <textarea name="message" placeholder="Enter your message" />
        <Button type="submit" value="Send">
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default Form;
