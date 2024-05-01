import "./Signup.css";
import React from "react";
import Form from "../../../Componets/Form/Form";
import Button from "../../../Componets/Button/Button";
import Photo from "../../../Assets/loginpage.jpg";

function Signup() {
  return (
    <div className="Signup">
      <div className="subsign">
        <div className="Signphot">
          <img src={Photo} className="signpic" />
        </div>
        <div className="signform">
          <h5 className="signlogofarmer">Welcome to Farmers</h5>
          <span1> Please enter your details.</span1>
          <Form
            class="Name"
            name="Full Name"
            type="text"
            classinput="inputName"
            place="Enter your Full Name"
            required
          />
          <Form
            class="nic"
            name="NIC Number"
            type="number"
            classinput="inputName"
            place="Enter your NIC Number"
            required
          />
          <Form
            class="tel"
            name="Telephone Number"
            type="number"
            classinput="inputName"
            place="Enter your TP Number"
            required
          />
            <Form
            class="emaill"
            name="Email"
            type="email"
            classinput="inputName"
            place="Enter your Email"
            required
          />
          
          <Form
            class="passwordd"
            name="Password"
            type="password"
            classinput="inputName"
            place="Password"
            required
          />
           <Form
            class="passworddd"
            name="Confirm Password"
            type="password"
            classinput="inputName"
            place="Confirm Password"
            required
          />
          <Button class="signup" name="Signup" />
          <h6 className="signinling">
            Already have an account?{" "}
            <a href="/Signin" className="signinlink">
              Sign in!
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Signup;
