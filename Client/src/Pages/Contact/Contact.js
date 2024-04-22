import React from "react";
import Form from "../../Componets/Form/Form";
import Button from "../../Componets/Button/Button";
import Photo from "../..//Assets/loginpage.jpg";
import "./Contact.css";

function Contact() {
  return (
    <div className="maincontainer">
      <div className="Grid">
      <div className="Form">
          <h2 className="loginh2">Welcome back</h2>
          <span>Welcome back! Please enter your details.</span>
          <Form
            class="email"
            name="Email"
            type="text"
            classinput="inpput"
            place="Enter your email"
          />
          <Form
            class="password"
            name="Password"
            type="password"
            classinput="inpput"
            place="*********"
          />
          <Button class="login" name="Login" />
          <Button class="signgoogle" name="Sign in with Google" />
</div>
          <div className="photo">
            <img src={Photo} className="pic" />
          </div>
      </div>
    </div>
    
  );
}

export default Contact;
