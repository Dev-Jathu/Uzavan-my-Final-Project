

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Logo from "../../../../Assets/uzavan.png";

function ServiveMachine() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers.map((number) => (
      <button
        className="pagenumber"
        key={number}
        onClick={() => handlePageChange(number)}
        disabled={currentPage === number}
      >
        {number}
      </button>
    ));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name);
        setUserId(decodedToken.id);
        console.log("User Email:", decodedToken.Email);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/signin");
      }
    }
  }, [navigate]);

  useEffect(() => {
    fetchUsers(userId);
  }, [userId]); // Dependency on username

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://uzavan.onrender.com/profile/serviceView");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const verifiedMachines = data.filter(
        (machine) => machine.isVerified && machine.MachineryId === userId // Use username from token
      );
      setUsers(verifiedMachines);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  };

  return (
    <div id="alighnforadmin" className="machinealigh">
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
              <p className="boss">Welcome Back! {username}</p>
            </div>
          </div>
        </div>
        <div className="content" id="content">
          <div className="Notecontainer" id="notecontainermachine">
            <p className="verification" id="verification">
              Your Services!
            </p>
            <>
              {error ? (
                <p className="error-message">{error}</p>
              ) : (
                <>
                  <div className="cards-container" id="cardmachine">
                    {currentItems.map((user) => (
                      <div className="card" key={user._id}>
                        <img
                          src={user.ImageURL}
                          className="card-img-top track1"
                          alt="Machine owner photo"
                          id="cloudedit"
                        />
                        <div className="card-body">
                          <h5 className="card-title" id="cardtitletractor" style={{height:'30px'}}>
                            Name : {user.Name}
                          </h5>
                          <div className="card-text" id="cardtexttractor1">
                            {/* <p className="Addresscard">Address&nbsp;&nbsp;&nbsp;&nbsp; :&nbsp;&nbsp; {user.Address}</p> */}
                            <p className="districtCard">District&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {user.District}</p>
                            <p className="districtCard">Type&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp; {user.vehicleType}</p>
                            <p className="districtCard" > Rate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{user.Rate}</p>
                            {/* <p className="districtCard" id='paramachinecard'>{user.TelYourService}</p> */}
                          </div>
                          <button className="editmachine">Edit</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pagination-container">
                    <div className="pagination-buttons">
                      {renderPageNumbers()}
                    </div>
                  </div>
                </>
              )}
            </>
          </div>
        </div>
        <div className="sidbarboss" id="sidbarmachine">
          <p className="sidetext">
            <div id="sidetext">
              Uzhavan <br />
              <span5>The Connector</span5>
            </div>
          </p>
          <Link to="/LinkAddProfile">
            <button className="dash" id="dash">
              Add Profile
            </button>
          </Link>
          <Link to="/MachineService">
            <button className="dash">Service</button>
          </Link>
          <br />
          <Link to="/MachineOrder">
            <button className="dash">Order</button>
          </Link>
          <br />
          {/* <Link to="/Machineservicehome">
            <button className="dash">Home</button>
          </Link> */}
          <br />
          <button className="dash" onClick={handleLogout}>
            Logout
          </button>
          <p className="copyrights">
            &copy; 2024 Uzhavan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiveMachine;
