import React, { useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";
import Logo from '../../../Assets/uzavan.png';
import ReviewForm from "../../../Componets/Review/Review"; // Import the ReviewForm component
import "./farmer.css";

function Farmer() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(bookings.length / itemsPerPage);

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

  const openModal = (booking) => {
    if (booking.isVerified === "cancelled" || booking.isVerified === "Accepted") {
      setSelectedOwner(booking.OwnerName);
      setSelectedBooking(booking);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name);
        console.log("User Email:", decodedToken.Email);
        console.log("User Name:", decodedToken.Name);

        axios
          .get("https://uzavan-server.onrender.com/Booking/Bookingview")
          .then((response) => {
            const userBookings = response.data.filter(
              (booking) => booking.Name === decodedToken.Name
            );
            setBookings(userBookings);
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
            <p className="verification" id="verification">Your Bookings</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>OwnerName</th>
                  <th>Address</th>
                  <th>District</th>
                  <th>Acre Count</th>
                  <th>Status</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.Name}</td>
                    <td>{booking.OwnerName}</td>
                    <td>{booking.Address}</td>
                    <td>{booking.District}</td>
                    <td>{booking.AcreCount}</td>
                    <td>{booking.isVerified}</td>
                    <td>
                      <i className="fa-solid fa-star" onClick={() => openModal(booking)}></i>
                    </td>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Review Form"
        className="Modal"
        overlayClassName="Overlay"
      >
        <ReviewForm username={username} ownerName={selectedOwner} booking={selectedBooking} />
      </Modal>
    </div>
  );
}

export default Farmer;
