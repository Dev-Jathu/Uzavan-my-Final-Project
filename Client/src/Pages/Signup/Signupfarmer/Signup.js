import "./Signup.css";
import React, { useState } from "react";
import Photo from "../../../Assets/loginpage.jpg";
import Button from "../../../Componets/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from '../../../Assets/uzavan.png';

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
      alert("Enter your Password");
      return false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(Password)) {
      alert("Enter a Valid Password (Using Capital_letter, number, @&%$#)");
      return false;
    }

    if (!ConfirmPassword.trim() || Password.trim() !== ConfirmPassword.trim()) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const userdata = { Name, NIC, TelNo, Email, Password };
    try {
      const response = await fetch("https://uzavan-my-final-project-1.onrender.com/farmer/register", {
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
      setName("");
      setNIC("");
      setTelNo("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      console.log(result);
      alert("Registration successful!");
    } catch (error) {
      console.error("Failed to register", error);
      alert("Registration failed!");
    }
  };

  return (
    <>
      <div className="main">
        <div className="container">
          <div className="logo">
            <div className="logoimg">
              <img src={Logo} id="logoimage" alt="this is image"/>
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
              <Link to="#carouselExampleAutoplaying"><i className="fa-solid fa-house" id="copylog"></i></Link>
              <Link to="#Aboutid" smooth>
                <i className="fa-solid fa-user-tag" id="copylog"></i>
              </Link>
              <Link to="#Serviceid" smooth>
                <i className="fa-solid fa-briefcase" id="copylog"></i>
              </Link>
              <Link to="#Contactid" smooth>
                <i className="fa-solid fa-address-book" id="copylog"></i>
              </Link>
            </div>
            <div className="butres">
              <Link to="/join">
                <button className="button1" id="button10">
                  Join
                </button>
              </Link>
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
              <br />

              <label className="passwordd">Password</label>
              <br />
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
                type="button"
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
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
              <br />
              <br />

              <Button class="signup" name="Signup" />
            </form>
            <h6 className="signinling">
              Already have an account?
              <Link to="/Signin" className="signinlink">
                Sign in!
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
