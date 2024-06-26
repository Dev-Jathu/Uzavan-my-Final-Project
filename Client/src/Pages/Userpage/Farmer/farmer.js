import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faTimesCircle,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../Assets/uzavan.png";
import ReviewForm from "../../../Componets/Review/Review";
import "./farmer.css";

function Farmer() {
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [username, setUsername] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);

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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return (
      <>
        {pageNumbers.slice(0, 3).map((number) => (
          <button
            className={`pagenumber ${currentPage === number ? "active" : ""}`}
            key={number}
            onClick={() => handlePageChange(number)}
            disabled={currentPage === number}
          >
            {number}
          </button>
        ))}
        {totalPages > 3 && currentPage < totalPages && (
          <button className="pagenumber" onClick={handleNextPage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </>
    );
  };

  const openModal = (booking) => {
    if (
      booking.isVerified === "cancelled" ||
      booking.isVerified === "Accepted"
    ) {
      setSelectedOwner(booking.OwnerName);
      setSelectedBooking(booking);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFinish = (id) => {
    axios
      .patch(`https://uzavan-my-final-project-1-server.onrender.com/Booking/updateFinishWorkStatus/${id}`, {
        status: "Finished",
      })
      .then((response) => {
        console.log("Work status updated:", response.data);
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === id ? { ...booking, isFinishWork: "Finished" } : booking
          )
        );
      })
      .catch((error) => {
        console.error("Failed to update work status:", error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name);
        axios
          .get("https://uzavan-my-final-project-1-server.onrender.com/Booking/Bookingview")
          .then((response) => {
            const userBookings = response.data
              .filter((booking) => booking.Name === decodedToken.Name)
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by date, newest first
            setBookings(userBookings);

            // Calculate counts
            const pending = userBookings.filter(
              (booking) => booking.isVerified === "Pending"
            ).length;
            const accepted = userBookings.filter(
              (booking) => booking.isVerified === "Accepted"
            ).length;
            const cancelled = userBookings.filter(
              (booking) => booking.isVerified === "cancelled"
            ).length;

            setPendingCount(pending);
            setAcceptedCount(accepted);
            setCancelledCount(cancelled);
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
            <p className="verification" id="verification">
              Your Bookings
            </p>
            <div className="fletotal">
              <p className="TotalBooking">
                Total Bookings
                <br /> <span> {bookings.length} </span>
              </p>
              <p className="TotalBooking1">
                Pending Bookings
                <br /> <span> {pendingCount} </span>
              </p>
              <p className="TotalBooking2">
                Accepted Bookings
                <br /> <span> {acceptedCount} </span>
              </p>
              <p className="TotalBooking3">
                Cancelled Bookings
                <br /> <span> {cancelledCount}</span>
              </p>
              <p className="TotalBooking4">
                Finished Work
                <br />{" "}
                <span>
                  {bookings.filter((booking) => booking.isFinishWork === "Finished").length}
                </span>
              </p>
            </div>
            <table className="farmertable">
              <thead>
                <tr>
                  <th>OwnerName</th>
                  <th>Vehicle</th>
                  <th>Address</th>
                  {/* <th>District</th> */}
                  <th>Acre</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th className="revewpanel">Review</th>
                  <th>Work</th>
                </tr>
              </thead>
              <tbody className={isTransitioning ? "fade-out" : ""}>
                {currentItems.map((booking, index) => (
                  <tr key={index}>
                    <td>{booking.OwnerName}</td>
                    <td>{booking.vehicleType}</td>
                    <td>{booking.Address}</td>
                    {/* <td>{booking.Message}</td> */}
                    <td>{booking.AcreCount}</td>
                    <td>{booking.bookingDate}</td>
                    <td>
                      {booking.isVerified === "Accepted" && (
                        <>
                          Accepted{" "}
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{ color: "green" }}
                          />
                        </>
                      )}
                      {booking.isVerified === "cancelled" && (
                        <>
                          Cancelled{" "}
                          <FontAwesomeIcon
                            icon={faTimesCircle}
                            style={{ color: "red" }}
                          />
                        </>
                      )}
                      {booking.isVerified === "Pending" && (
                        <>
                          Pending{" "}
                          <FontAwesomeIcon
                            icon={faClock}
                            style={{ color: "orange" }}
                          />
                        </>
                      )}
                    </td>

                    <td>
                      <i
                        className="fa-solid fa-pen"
                        onClick={() => openModal(booking)}
                      ></i>
                    </td>
                    <td>
                      {booking.isVerified === "Accepted" && (
                        <button
                          className="finish"
                          onClick={() => handleFinish(booking._id)}
                        >
                          Finish
                        </button>
                      )}
                      {booking.isFinishWork === "Finished" && (
                        <i className="fa-solid fa-check" id="correct1"></i>
                      )}
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
            <span className="slogan">The Connector</span>
          </p>
          <Link to="/">
            <button className="dash">Home</button>
          </Link>
          <br />
          <button className="dash" onClick={handleLogout}>
            Logout
          </button>
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
        <ReviewForm
          username={username}
          ownerName={selectedOwner}
          booking={selectedBooking}
        />
      </Modal>
    </div>
  );
}

export default Farmer;
