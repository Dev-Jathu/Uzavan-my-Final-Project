


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../../Componets/Button/Button";
import Photo from "../../Assets/uzavan19.jpg";
import Gphoto from "../../Assets/Gphoto.png";
import Logo from "../../Assets/uzavan.png";
import "./Signin.css";
import { HashLink as Link } from "react-router-hash-link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { Email, Password };
    console.log(userdata);
    
    axios
      .post("https://uzavan-server.onrender.com/farmerLogin/sigIn", userdata)
      .then((result) => {
        console.log(result);
        if (result.data.token) {
          // Save the token in local storage
          localStorage.setItem("token", result.data.token);
          
          // Navigate based on user role
          if (result.data.role === "user") {
            navigate("/");
          } else if (result.data.role === "machine_user") {
            navigate("/machinepage");
          } else if (result.data.role === "admin") {
            navigate("/Admin");
          }
        } else {
          console.log("Login failed");
          toast.error("Login failed! Please check your credentials.")
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="maincontainer">
      <div className="Grid">
        <div className="Form">
          <div className="flexlogo">
            <img src={Logo} className="logoimg" alt="Logo" />
            <h3 className="logonameh3">Uzhavan</h3>
          </div>
          <h2 className="loginh2">Welcome back</h2>
          <span className="yourdetasign">Welcome back! Please enter your details.</span>
          <br />
          <form onSubmit={handleSubmit}>
            <label className="email">Email</label>
            <br />
            <input
              type="text"
              className="inpput"
              placeholder="Enter Your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label className="password">Password</label>
            <br />
            <input
              type="password"
              className="inpput"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <div className="remember">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label htmlFor="rememberMe" className="rememberme">
                Remember me
              </label>
              <label htmlFor="rememberMe" className="forget">
                <a href="#">Forgot password</a>
              </label>
            </div>
            <button type="submit" className="login">
              Login
            </button>
            <a href="#">
              <Button class="signgoogle" name="Sign in with Google" />
            </a>
          </form>
          <img src={Gphoto} alt="Google Photo" className="Gphoto" />
          <h4 className="hedontacc">
            Don't have an account?{" "}
            <Link to="/join" className="signuppagelink">
              Sign up free!
            </Link>
          </h4>
        </div>
        <div className="photo">
          <img src={Photo} className="pic" alt="Photo" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
