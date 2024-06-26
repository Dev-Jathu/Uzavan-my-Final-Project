import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../../../Assets/uzavan.png";
import Addservice from "../../../../Componets/Addprofileui.js/profile"
import {jwtDecode} from 'jwt-decode';

function Machinenav() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate(); // Hook for navigation
   // State to hold username

     // Function to handle logout
  const handleLogout = () => {
    // Remove JWT token from local storage or wherever it's stored
    localStorage.removeItem("jwtToken");
    // Navigate to the home page
    navigate("/signin");
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin'); // Redirect to login if token is not present
    } else {
      // Decode the token to get user information
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name); // Set the username from the token
        console.log('User Email:', decodedToken.Email);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [navigate]);
  return (
    <div>
      <div className="main11">
  <div className="container">
    <div className="logo" id="logoadmin">
      <div className="logoimg">
        <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
      </div>
      <div className="logoname">
        <h2>Uzhavan</h2>
      </div>
    </div>
    <div className="Navlings">
      <div className="navname">
        <p className="boss">Welcome Back! {username} </p>
      </div>
    </div>
  </div>
  <div className="content" id="content">
    <div className="Notecontainer" id="notecontainer">
      <p className="verification" id="verification">Add your Service!</p>
      
      <div className="addserviceinmachinepage">

      </div>
    </div>
  </div>
  <div className="sidbarboss" id="sidbarmachine">
    <p className="sidetext" >
      <div id="sidetext">
      Uzhavan <br />
      <span5>The Connector</span5>
      </div>
   
    </p>
    <Link to="/LinkAddProfile">
      <button className="dash">Add Profile</button>
    </Link>
    <Link to="/MachineService">
      <button className="dash">Service</button>
    </Link>
    <br />
    <Link to="/MachineOrder">
      <button className="dash">Order</button>
    </Link>
    <br />
    <Link to="/Machineservicehome">
      <button className="dash">Home</button>
    </Link>
    <br/>
    {/* Logout button with onClick event */}
    <button className="dash" onClick={handleLogout}>Logout</button>
    <p className="copyrights">
      &copy; 2024 Uzhavan. All rights reserved.
    </p>{" "}
  </div>
</div>
    </div>
  )
}

export default Machinenav
