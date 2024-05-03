import React from "react";
import { useState } from "react";
import Form from "../../Componets/Form/Form";
import Button from "../../Componets/Button/Button";
import Photo from "../..//Assets/uzavan19.jpg";
import Gphoto from "../../Assets/Gphoto.png";
import Logo from "../../Assets/uzavan.png";
import "./Signin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { Email, Password };
    console.log(userdata);
    axios
      .post("http://localhost:3001/Signin",userdata)
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home')
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="maincontainer">
      <div className="Grid">
        <div className="Form">
          <div className="flexlogo">
            <img src={Logo} className="logoimg" />
            <h3 className="logonameh3">Uzhavan</h3>
          </div>
          <h2 className="loginh2">Welcome back</h2>
          <span>Welcome back! Please enter your details.</span>
          <br></br>
          <form onSubmit={handleSubmit}>
            <label className="email">Email</label>
            <br></br>


            <input
              type="text"
              className="inpput"
              placeholder="Enter Your emaill"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>

            <label className="password">Password</label>
            <br></br>
            <input
              type="password"
              className="inpput"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>



            <div className="remember">
              <input type="checkbox" value="lsRememberMe" id="rememberMe" />
              <label for="rememberMe" className="rememberme">
                Remember me
              </label>
              <label for="rememberMe" className="forget">
                <a href="#">Forgot password</a>
              </label>
            </div>
            <a href="#">
              {" "}
              <Button class="login" name="Login" />{" "}
            </a>
            <a href="#">
              {" "}
              <Button class="signgoogle" name="Sign in with Google" />
            </a>
          </form>
          <img src={Gphoto} alt="Google Photo" className="Gphoto" />
          <h4 className="hedontacc">
            Don't have an account?{" "}
            <a href="/join" className="signuppagelink">
              Sign up free!
            </a>
          </h4>
        </div>
        <div className="photo">
          <img src={Photo} className="pic" />
        </div>
      </div>
    </div>
  );
}

export default Signin;
