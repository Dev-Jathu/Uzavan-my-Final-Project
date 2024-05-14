import "./Signupmachin.css";
import React from "react";
import Button from "../../../Componets/Button/Button";
import Photo from "../../../Assets/machin.jpg";
import Logoname from "../../../Assets/name.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../../Assets/uzavan.png'

function Signupmachine() {
  const [Name, setName] = useState();
  const [NIC, setNIC] = useState();
  const [TelNo, setTelNo] = useState();
  const [Address, setAddress] = useState();
  const [VehicleTypes, setVehileTypes] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    // Validation with immediate alert on error.
    if (!Name.trim()) {
      alert("Name is required");
      return false;
    }
    if (!NIC.trim() || NIC.length < 10 || NIC.length > 12) {
      alert("NIC must be exactly 10 or 12 characters long");
      return false;
    }
    if (!VehicleTypes) {
      alert("Choose Vehile");
      return false;
    }
    if (!TelNo.trim() || !/^\d{10}$/.test(TelNo.trim())) {
      alert("Phone Number should contain exactly 10 digits");
      return false;
    }
    if (!Email.trim() || !/\S+@\S+\.\S+/.test(Email.trim())) {
      alert("Invalid Email format");
      return false;
    }
    // if (!Password.trim()) {
    //   alert("Password is required");
    //   return false;
    // } else if (Password.trim().length > 8) {
    //   alert("Password must be maximum 8 characters");
    //   return false;
    // }
    if (!Password) {
      alert("enter your Password")
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(Password)) {
      alert('Enter a Valid Password (Using Capital_letter,number,@&%$#)')

    }

    if (!ConfirmPassword.trim() || Password.trim() !== ConfirmPassword.trim()) {
      alert("Passwords do not match");
      return false;
    }
    return true; // No errors, form is valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const userdata = {
      Name,
      NIC,
      TelNo,
      Address,
      VehicleTypes,
      Email,
      Password,
    };
    try {
      const response = await fetch(
        "http://localhost:3003/machinery/registerMachine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );
      if (!response.ok) {
        throw new Error(
          "Failed to register. Server responded with status: " + response.status
        );
      }
      const result = await response.json();
      console.log(result);

      alert("Registration successful da venna!");
    } catch (error) {
      console.error("Failed to register", error); // Changed the error message here
      alert("Registration failed da venna!"); // Adjusted the alert message here
    }
  };

  return (
    <>

    <div className="main">
      <div className="container">
        <div className="logo">
          <div className="logoimg">
            <img src={Logo} id="logoimage" />
          </div>
          <div className="logoname">
            <h2>Uzhavan</h2>
          </div>
        </div>
        <div className="Navlings">
          <div className="navname">
            <Link to="/">Home</Link>
            <Link to="/about" smooth>
              About
            </Link>
            <Link to="/service" smooth>
              Service
            </Link>
            
            <Link to="/contact" smooth>
              Contact
            </Link>
          </div>
          <div className="navnamecopy">
            <Link to="#carouselExampleAutoplaying"><i class="fa-solid fa-house" id="copylog"></i></Link>
            <Link to="#Aboutid" smooth>
            <i class="fa-solid fa-user-tag" id="copylog"></i>
            </Link>
            <Link to="#Serviceid" smooth>
            <i class="fa-solid fa-briefcase"id="copylog"></i>
            </Link>
            <Link to="#Contactid" smooth>
            <i class="fa-solid fa-address-book"id="copylog"></i>
            </Link>
          </div>
          <div className="butres">
            <a href="/join">
              <button className="button1" id="button10">
                Join
              </button>
            </a>
            
          </div>
        </div>
      </div>
    </div>

    <div className="Signupmachin">
      <div className="subsign">
        <div className="Signphot">
          <img src={Photo} className="signpicmachin" smooth />
        </div>
        <div className="signformmachin">
          <h5 className="signlogo">Welcome to Macinery's owner</h5>
          <span1> Please enter your details.</span1>

          <form onSubmit={handleSubmit}>
            <label className="Name">Full Name</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Enter your Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label className="nic">NIC Number</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Enter your NIC Number"
              required
              onChange={(e) => setNIC(e.target.value)}
              maxLength={12}
            />
            <br></br>
            <label className="tel">Telephone Number</label>
            <br />
            <input
              type="number"
              className="inputName"
              placeholder="Enter your phone Number"
              required
              onChange={(e) => setTelNo(e.target.value)}
              maxLength={10}
            />
            <br></br>
            <label className="address">Address</label>
            <br />
            <input
              type="text"
              className="inputName"
              placeholder="Enter your Address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <br></br>
            <label for="Vehile type" className="vehile">
              Choose Your Vehile
            </label>
            <br />
            <select
              name="Choose your vehile"
              className="selectvehile"
              onChange={(e) => setVehileTypes(e.target.value)}
            >
              <option value="" disabled selected hidden>
                Choose your vehicle
              </option>
              <option value="Tractor">Tractor</option>
              <option value="paddyCropper">Paddy cropper</option>
              <option value="TsunamiMachine">Tsunami</option>
            </select>
            <br></br>
            <label className="emaill">Email</label>
            <br />
            <input
              type="email"
              className="inputName"
              placeholder="Enter your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <label className="passwordd">Password</label>
            <br />
            <input
              type="password"
              className="inputName"
              placeholder="Enter your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <label className="passworddd">Confirm Password</label>
            <br />
            <input
              type="password"
              className="inputName"
              placeholder="Confirm password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button class="signup" name="Signup" />
          </form>

          <h6 className="signinling">
            Already have an account?{" "}
            <a href="Signin" className="signinlink">
              Sign in!
            </a>
          </h6>
        </div>
      </div>
      <div className="logonamemachin">
        <img src={Logoname} className="mchinlogo" />
      </div>
    </div>
    </>
  );
}

export default Signupmachine;
