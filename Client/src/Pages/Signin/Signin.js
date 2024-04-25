import React from "react";
import Form from "../../Componets/Form/Form";
import Button from "../../Componets/Button/Button";
import Photo from "../..//Assets/uzavan19.jpg";
import Gphoto from '../../Assets/Gphoto.png'
import Logo from "../../Assets/uzavan.png"
import "./Signin.css";

function Signin() {
  return (
    <div className="maincontainer">
      <div className="Grid">
        <div className="Form">
          <div className="flexlogo">
          <img src={Logo} className="logoimg"/>
          <h3 className="logonameh3">Uzavan</h3>

          </div>
          <h2 className="loginh2">Welcome back</h2>
          <span>Welcome back! Please enter your details.</span>
          <Form
            class="email"
            name="Email"
            type="text"
            classinput="inpput"
            place="Enter your email"
            required
          />
          <Form
            class="password"
            name="Password"
            type="password"
            classinput="inpput"
            place="Password"
          />
          <div className="remember">
          <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
          <label for="rememberMe" className="rememberme">Remember me</label>
          <label for="rememberMe" className="forget"><a href="#">Forgot password</a></label>

          </div>
         <a href="#"> <Button class="login" name="Login" /> </a>
         <a href="#"> <Button class="signgoogle" name="Sign in with Google" /></a>
          <img src={Gphoto} alt="Google Photo" className="Gphoto" />
          <h4 className="hedontacc">
          Don't have an account? <a href="/Signup" className="signuppagelink">Sign up free!</a>
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
