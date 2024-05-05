import "./Admin.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/uzavan.png";
import Boss from "../../Assets/boss.png";

import React from "react";

function Admin() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="logo" id="logoadmin">
            <div className="logoimg">
              <img src={Logo} id="logoimage" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <p className="boss">Welcome Back! mr Jathusan</p>
            </div>
            <div>
              <img src={Boss} className="bossimg" />
            </div>
          </div>
        </div>
        <div className="content">
        
        </div>

        <div className="sidbarboss">
          <p className="sidetext">
            Uzhavan <br />
            <span5>The Connector</span5>
          </p>

          <Link to="/Admin">
            <button className="dash">Dashbord</button>
          </Link>
          <br />
          <Link to="/FarmerDetails">
            <button className="dash">Farmer</button>
          </Link>
          <br />
          <Link to="/MachineryDetails">
            <button className="dash">Machine Owner</button>
          </Link>
          <img src={Logo} className="footlogoboss" />
        </div>
      </div>
    </div>
  );
}

export default Admin;
