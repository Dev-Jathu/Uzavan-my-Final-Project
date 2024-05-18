import "./Who.css";
import Button from "../../Componets/Button/Button";
import React from "react";
import Farmer from "../../Assets/login2.png";
import Machin from "../../Assets/login1.png";
import Logo from "../../Assets/name.png";
import { HashLink as Link } from "react-router-hash-link";


function Who() {
  return (
    <div>
      <div className="gridwho">
        <div className="buttonforwho">
          <div className="selectbutton">
            <p className="selectyourrole">Select Your Role!</p>
            <Link to="/Signupfarmer">
              <Button class="Farmer" name="Sign as a Farmer" />
            </Link>
            <img src={Farmer} alt="Google Photo" className="farmer" />
          </div>
          <div className="selectbutton1">
            <Link to="/Signupmachin">
              {" "}
              <Button class="machin" name="Sign as a machin Owner" />
            </Link>
            <img src={Machin} alt="Google Photo" className="farmer" />
          </div>
        </div>

        <div className="accounthere">
          <p className="rightside">Welcome Back!</p>
          <p className="parawelcome">
            To keep connecting with us. Please login with your personal info.
          </p>
          <Link to="/Signin">
            <Button name="Login" class="loginwho" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Who;
