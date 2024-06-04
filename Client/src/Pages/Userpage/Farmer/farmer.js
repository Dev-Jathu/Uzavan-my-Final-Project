import React, { useState, useEffect } from "react";
import Backgroundpgoto3 from "../../../Assets/newfarmer1.jpg";
import Button from "../../../Componets/Button/Button";
import Logo from "../../../Assets/uzavan.png";
import pic from "../../../Assets/final.jpg";
import pic1 from "../../../Assets/new3.jpg";
import pic2 from "../../../Assets/new1.jpg";
import {jwtDecode }from "jwt-decode"; // Remove curly braces around jwtDecode
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./farmer.css";

function Farmer() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [username, setUsername] = useState(""); // State to hold username
  const [bookings, setBookings] = useState([]); // State to hold bookings
  const [filteredBookings, setFilteredBookings] = useState([]); // State to hold filtered bookings

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle logout
  const handleLogout = () => {
    // Remove JWT token from local storage or wherever it's stored
    localStorage.removeItem("token");
    // Navigate to the home page
    navigate("/signin");
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBookings.slice(indexOfFirstItem, indexOfLastItem); // Paginate filtered bookings
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);

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
      navigate("/signin"); // Redirect to login if token is not present
    } else {
      // Decode the token to get user information
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name); // Set the username from the token
        console.log("User Email:", decodedToken.Email);
        console.log("User Name:", decodedToken.Name);

        // Fetch bookings from backend
        axios
          .get("https://uzavan-server.onrender.com/Booking/Bookingview")
          .then((response) => {
            // Filter bookings to show only those that match the username in the Name field
            const userBookings = response.data.filter(
              (booking) => booking.Name === decodedToken.Name
            );
            setBookings(userBookings);
            setFilteredBookings(userBookings); // Initialize filteredBookings with userBookings
          })
          .catch((error) => {
            console.error("Error fetching bookings:", error);
          });
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, [navigate]);

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
              <p className="boss">Welcome Back! {username} </p>
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
                  <th>OwnerName</th>
                  <th>Address</th>
                  <th>District</th>
                  <th>Acre Count</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.Name}</td>
                    <td>{booking.OwnerName}</td>
                    <td>{booking.Address}</td>
                    <td>{booking.District}</td>
                    <td>{booking.AcreCount} </td>
                    <td>{booking.isVerified ? "Done" : "Pending"}</td> {/* Display isVerified as True/False */}
                  </tr>
                ))}
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
          <Link to="/">
            <button className="dash">Home</button>
          </Link>
          <br />
          <button className="dash" onClick={handleLogout}>Logout</button>
          <p className="copyrights">
            &copy; 2024 Uzhavan. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Farmer;
