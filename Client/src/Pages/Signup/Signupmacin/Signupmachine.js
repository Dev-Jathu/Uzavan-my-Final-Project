import "./Signupmachin.css";
import React from "react";
import Button from "../../../Componets/Button/Button";
import Photo from "../../../Assets/machin.jpg";
import Logoname from "../../../Assets/name.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signupmachine() {
  const [Name, setName] = useState();
  const [NIC, setNIC] = useState();
  const [TelNo, setTelNo] = useState();
  const [Address, setAddress] = useState();
  const [VehileTypes, setVehileTypes] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata = { Name, NIC, TelNo,Address,VehileTypes, Email, Password };
    console.log(userdata);
    axios
      .post("http://localhost:3001/registerMachine", userdata)
      .then((result) => {console.log(result)
      
        navigate("/Signin")
      }
    
    )
      .catch((err) => console.log(err));
  };
  return (
    <div className="Signupmachin">
      <div className="subsign">
        <div className="Signphot">
          <img src={Photo} className="signpicmachin" />
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
            <select name="Choose your vehile" className="selectvehile"             
              onChange={(e) => setVehileTypes(e.target.value)}
              >
              <option value="Tractor">Tractor</option>
              <option value="paddyCropper">Paddy cropper</option>
              <option value="TsunamiMachine">Tsunami</option>

            </select>
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
  );
}

export default Signupmachine;
