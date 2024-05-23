// import React, { useEffect } from "react";
import Backgroundpgoto3 from "../../../Assets/newfarmer1.jpg";
import Button from "../../../Componets/Button/Button";
import Logo from "../../../Assets/uzavan.png";
import pic from "../../../Assets/final.jpg";
import pic1 from "../../../Assets/new3.jpg";
import pic2 from "../../../Assets/new1.jpg";
// import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./farmer.css";
import axios from "axios";

function Farmer() {
  const [users, setUsers] = useState([]);
  const [machinery, setMachinery] = useState([]);
  const [Farmer, setFarmer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    // Remove JWT token from local storage or wherever it's stored
    localStorage.removeItem("jwtToken");
    // Navigate to the home page
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
              <p className="boss">Welcome Back! </p>
            </div>
          </div>
        </div>
        <div className="content" id="content">
          <div className="Notecontainer" id="notecontainer">
            <p className="verification" id="verification">Waiting for your Confirmation!</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>District</th>
                  <th>Acre Count</th>
                  <th>Verifycation</th>
                </tr>
              </thead>
              <tbody>
                <td>kjhbekfb</td>
                <td>sinnathampanai</td>
                <td>vavuniya</td>
                <td>2 Acre</td>
                <td className="verifycationconfirm">
                  <button className="Confirm">Confirm</button>
                  <button className="Confirm" id="cancel">
                    Cancel
                  </button>
                </td>
              </tbody>
            </table>
            <div className="pagination">{renderPageNumbers()}</div>
          </div>
        </div>
        <div className="sidbarboss" id="sidbarmachine">
          <p className="sidetext">
            Uzhavan <br />
            <span5>The Connector</span5>
          </p>
          <Link to="#">
            <button className="dash">Add Profile</button>
          </Link>
          <Link to="#">
            <button className="dash">Service</button>
          </Link>
          <br />
          <Link to="#">
            <button className="dash">Order</button>
          </Link>
          <br />
          {/* Logout button with onClick event */}
          <button className="dash" onClick={handleLogout}>Logout</button>
          <p className="copyrights">
            &copy; 2024 Uzhavan. All rights reserved.
          </p>{" "}
        </div>
      </div>
    </div>
  );

}

export default Farmer;
