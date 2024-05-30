import "./Service.css";
import pic from "../../../src/Assets/final.jpg";
import pic1 from "../../../src/Assets/new3.jpg";
import pic2 from "../../../src/Assets/new1.jpg";
import { HashLink as Link } from "react-router-hash-link";
import {  useNavigate } from "react-router-dom";
import Logo from '../../Assets/uzavan.png'
import React, { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';



function Machineservice() {
  const [username, setUsername] = useState(""); // State to hold username
  const navigate = useNavigate(); // Hook for navigation


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    // Remove JWT token and update isLoggedIn state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the homepage
    window.location.href = '/';
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
              <div className="navname" id="navnamefarmer">
                <Link to="/machinepage"><i class="fa-solid fa-house" id="house"></i> {username}</Link>
              </div>
              <div className="navnamecopy">
                <Link to="#carouselExampleAutoplaying">
                  <i class="fa-solid fa-house" id="copylog1"></i>
                </Link>
                <Link to="#Aboutid" smooth>
                  <i class="fa-solid fa-user-tag" id="copylog1"></i>
                </Link>
              </div>
              <div className="butresfarmer">
              {isLoggedIn ? (
                <button className="buttonhireform" id="logout" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/join">
                  <button className="buttonhireform">Join</button>
                </Link>
                
              )}
              </div>
            </div>
          </div>
        </div>
     <div id="Serviceid">
      <p className="hedingservice">Our Services !</p>
      <p className="paraservise">
        Welcome to Our Uzhavan Website. We are Focus on main Agriculture
        Machinery's.In this menu have 3 Option. Do you want more details click
        the Search button.Thankyou!
      </p>
      <div className="cards">
        <div class="card"  id="card">
          <img src={pic} class="card-img-top" className='pic2'alt="this is image"/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitle">Tractor</h5>
            <p class="card-text" id='cardtext'>
           This filed only Have the Tractor Click The Search button For more details.
            </p>
            <Link to="/Learnmore" class="btn btn-primary" id="buttoncard">
              Search
            </Link>
          </div>
        </div>
        <div class="card" id="card">
          <img src={pic1} class="card-img-top" alt="this is image" className="pic2"/>
          <div class="card-body">
            <h5 class="card-title" id="cardtitle">paddy Harvestor</h5>
            <p class="card-text"id='cardtext' >
            This filed only Have the Paddy Harvester Click The Search Botton For more details.

            </p>
            <Link to="/Harvester" class="btn btn-primary"id="buttoncard">
            Search
            </Link>
          </div>
        </div>
        <div class="card" id="card">
          <img src={pic2} class="card-img-top" alt="this is image"   id='pic2'className="pic2"/>
          <div class="card-body">
            <h5 class="card-title" id="cardtitle" className="cardtitle">Tsunami machine</h5>
            <p class="card-text"id='cardtext'>
            This filed only Have the Tsunami Click The Search Botton For more details.

            </p>
            <Link to="/Tsunami" class="btn btn-primary"id="buttoncard">
            Search
            </Link>
          </div>
        </div>
      </div>
    </div>

    </>
   
  );
}

export default Machineservice;
