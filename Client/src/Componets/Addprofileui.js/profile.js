import Button from "../Button/Button";
import "./profile.css";
import React from "react";
import { useState } from "react";
import axios from "axios";

function Profile() {
  const [Name, setName] = useState();
  const [Address, setAddress] = useState();
  const [rate, setrate] = useState();
  const [VehileTypes, setVehileTypes] = useState();
  const [About, setAbout] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const Productdata = { Name, Address, rate, VehileTypes, About };
    console.log(Productdata);
    axios
      .post("http://localhost:3003/profile/createService", Productdata)
      .then((result) => {
        alert(
          
          "your service is added Successfully.Waiting For Veryfication process!"
        );
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <div className="gridprofile">
        <div className="inputprofile">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="profilename"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required

            />
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              required

            />
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Rate Acre"
              required
              onChange={(e) => setrate(e.target.value)}
            />
            <br />
            <select
              name="Choose your vehile"
              className="profilename"
              onChange={(e) => setVehileTypes(e.target.value)}
              required

            >
              <option value="" disabled selected hidden>
                Choose your vehicle
              </option>
              <option value="Tractor">Tractor</option>
              <option value="paddyCropper">Paddy cropper</option>
              <option value="TsunamiMachine">Tsunami</option>
              
            </select>
            <br />
            <input
              type="file"
              className="profilename1"
              placeholder="upload your photo"
            />
            <textarea
              className="profilename2"
              placeholder="Tell About You"
              onChange={(e) => setAbout(e.target.value)}
              required

            ></textarea>
            <div className="buttonprofile">
            <Button name="Add Profile" class="profadd"  />

            </div>
          </form>
        </div>
        <div className="boxright"></div>
      </div>
    </div>
  );
}
export default Profile;