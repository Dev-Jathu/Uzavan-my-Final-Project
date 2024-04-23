import "./Signupmachin.css";
import React from "react";
import Form from "../../../Componets/Form/Form";
import Button from "../../../Componets/Button/Button";
import Photo from "../../../Assets/uzavan16.jpg";

function Signupmachine() {
  return (
    <div className="Signupmachin">
      <div className="subsign">
        <div className="Signphot">
          <img src={Photo} className="signpicmachin" />
        </div>
        <div className="signformmachin">
          <h5 className="signlogo">Welcome to Macinery's owner</h5>
          <span1> Please enter your details.</span1>
          <Form
            class="Name"
            name="Full Name"
            type="text"
            classinput="inputName"
            place="Enter your First Name"
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
            place="Enter your NIC Number"
            required
          />
          <Form
            class="address"
            name="Address"
            type="email"
            classinput="inputName"
            place="Enter your Address"
            required
          />
          <Form
            class="date"
            name="Date-of-Birth"
            type="date"
            classinput="inputName"
            place="Enter your Name"
            required
          />
          <label for="Vehile type" className="vehile">Choose Your Vehile</label><br/>
          <select name="Choose your vehile" className="selectvehile">
            <option value="Tractor">Tractor</option>
            <option value="Tractor">Tractor</option>
            <option value="Tractor">Tractor</option>
          </select>
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
            place="********"
            required
          />
          <Button class="signup" name="Signup" />
          <h6 className="signinling">
            Already have an account?{" "}
            <a href="#" className="signinlink">
              Sign in!
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Signupmachine;
