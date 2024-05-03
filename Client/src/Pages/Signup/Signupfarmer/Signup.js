import "./Signup.css";
import React, { useState } from "react";
import Form from "../../../Componets/Form/Form";
import Button from "../../../Componets/Button/Button";
import Photo from "../../../Assets/loginpage.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Name, setName] = useState();
  const [NIC, setNIC] = useState();
  const [TelNo, setTelNo] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { Name, NIC, TelNo, Email, Password };
    console.log(userdata);
    axios
      .post("http://localhost:3001/register", userdata)
      .then((result) => {console.log(result)
      
        navigate("/Signin")
      }
    
    )
      .catch((err) => console.log(err));
  };

  return (
    <div className="Signup">
      <div className="subsign">
        <div className="Signphot">
          <img src={Photo} className="signpic" />
        </div>
        <div className="signform">
          <h5 className="signlogofarmer">Welcome to Farmers</h5>
          <span1> Please enter your details.</span1>

          <form onSubmit={handleSubmit}>
            <label className="Name">Full Name</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Enter your Full Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>

            <label className="nic">NIC Number</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Your Nic Number"
              required
              onChange={(e) => setNIC(e.target.value)}
            />
            <br></br>
            <label className="phone">Phone Number</label>
            <br />
            <input
              type="number"
              className="inputName"
              placeholder="Your Phone Number"
              required
              onChange={(e) => setTelNo(e.target.value)}
            />
            <br></br>
            <label className="emaill">Email</label>
            <br />

            <input
              type="text"
              className="inputName"
              placeholder="Enter your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label className="passwordd">Password</label>
            <br />

            <input
              type="text"
              className="inputName"
              placeholder="Create password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <label className="passworddd">Confirm Password</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Create password"
              required
            
            />
            <Button class="signup" name="Signup" />
          </form>
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
