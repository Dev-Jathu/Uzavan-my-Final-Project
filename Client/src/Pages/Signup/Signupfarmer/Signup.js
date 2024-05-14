import "./Signup.css";
import React, { useState } from "react";
import Photo from "../../../Assets/loginpage.jpg";
import Button from "../../../Componets/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from '../../../Assets/uzavan.png'

function Signup() {
  const [Name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [TelNo, setTelNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

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
    if (!TelNo.trim() || !/^\d{10}$/.test(TelNo.trim())) {
      alert("Phone Number should contain exactly 10 digits");
      return false;
    }
    if (!Email.trim() || !/\S+@\S+\.\S+/.test(Email.trim())) {
      alert("Invalid Email format");
      return false;
    }
    if (!Password) {
      alert("enter your Password");
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(Password)) {
      alert("Enter a Valid Password (Using Capital_letter,number,@&%$#)");
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

    const userdata = { Name, NIC, TelNo, Email, Password };
    try {
      const response = await fetch("http://localhost:3003/farmer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
      if (!response.ok) {
        throw new Error(
          "Failed to register. Server responded with status: " + response.status
        );
      }
      const result = await response.json();
      console.log(result);

      alert("Registration successful da venna!");
    } catch (error) {
      console.error("Failed to register", error);
      alert("Registration failed da venna!");
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
      <div className="Signup">
        <div className="subsign">
          <div className="Signphot">
            <img src={Photo} className="signpic" alt="Login" />
          </div>
          <div className="signform">
            <h5 className="signlogofarmer">Welcome to Farmers</h5>
            <span id="enterdet">Please enter your details.</span>

            <form onSubmit={handleSubmit}>
              <label className="Name">Full Name</label>
              <br />
              <input
                type="text"
                className="inputName"
                placeholder="Enter your Full Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {/* {errors.name && <span className="error">{errors.name}</span>} */}
              <br />

              <label className="nic">NIC Number</label>
              <br />
              <input
                type="text"
                className="inputName"
                placeholder="Your Nic Number"
                value={NIC}
                onChange={(e) => setNIC(e.target.value)}
                required
                maxLength={12}
              />
              {/* {errors.nic && <span className="error">{errors.nic}</span>} */}
              <br />

              <label className="phone">Phone Number</label>
              <br />
              <input
                type="tel"
                className="inputName"
                placeholder="Your Phone Number"
                value={TelNo}
                onChange={(e) => setTelNo(e.target.value)}
                required
                maxLength={12}
              />

              {/* {errors.telNo && <span className="error">{errors.telNo}</span>} */}
              <br />

              <label className="emaill">Email</label>
              <br />
              <input
                type="email"
                className="inputName"
                placeholder="Enter your Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* {errors.email && <span className="error">{errors.email}</span>} */}
              <br />

              <label className="passwordd">Password</label>
              <br />
              {/* <input
                type="password"
                className="inputName"
                placeholder="Create password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /> */}
              <input
                type={showPassword ? "text" : "password"}
                className="inputName"
                id="inputnameeye"
                placeholder="Create password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {/* <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-eye"  /> */}
                <i class="fa-regular fa-eye" id="eyeinside"></i>
              </button>

              {/* {errors.password && (
                <span className="error">{errors.password}</span>
              )} */}
              <br />

              <label className="passworddd">Confirm Password</label>
              <br />
              <input
                type="password"
                className="inputName"
                placeholder="Confirm password"
                value={ConfirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {/* {errors.confirmPassword && (
                <span className="error">{errors.confirmPassword}</span>
              )} */}
              <br />
              <br />

              <Button class="signup" name="Signup" />
            </form>
            <h6 className="signinling">
              Already have an account?
              <a href="/Signin" className="signinlink">
                Sign in!
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
