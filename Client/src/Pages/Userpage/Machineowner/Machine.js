import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../../Assets/uzavan.png";

function Machine() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [newOrderId, setNewOrderId] = useState(null);
  const [pendingCount, setPendingCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [cancelledCount, setCancelledCount] = useState(0);
  const [pendingBookingCount, setPendingBookingCount] = useState(0);
  const [bookings, setBookings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOwner, setSelectedOwner] = useState("");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useNavigate();

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
    setSelectedOwner(booking.OwnerName);
    setSelectedBooking(booking);
    setIsModalOpen(true);
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
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, isFinishWork: "Finished" } : user
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
        setUserid(decodedToken.id);
        fetchUsers(decodedToken.Name, token);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/signin");
      }
    }
  }, [navigate]);

  const fetchUsers = (ownerName, token) => {
    axios
      .get("https://uzavan-my-final-project-1-server.onrender.com/Booking/Bookingview", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const filteredUsers = response.data.filter(
          (user) => user.OwnerName === ownerName
        );
        const sortedUsers = filteredUsers.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setUsers(sortedUsers);
        if (sortedUsers.length > 0) {
          setNewOrderId(sortedUsers[0]._id);
        }

        // Calculate counts
        const pending = sortedUsers.filter(
          (user) => user.isVerified === "Pending"
        ).length;
        const accepted = sortedUsers.filter(
          (user) => user.isVerified === "Accepted"
        ).length;
        const cancelled = sortedUsers.filter(
          (user) => user.isVerified === "cancelled"
        ).length;

        setPendingCount(pending);
        setAcceptedCount(accepted);
        setCancelledCount(cancelled);
        setPendingBookingCount(pending); // Update notification count
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  };

  const updateBookingStatus = (id, status) => {
    axios
      .patch(`https://uzavan-my-final-project-1-server.onrender.com/Booking/updateBookingStatus/${id}`, {
        status,
      })
      .then((response) => {
        console.log("Booking status updated:", response.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === id ? { ...user, isVerified: status } : user
          )
        );

        // Update counts
        if (status === "Accepted") {
          setPendingCount((prev) => prev - 1);
          setAcceptedCount((prev) => prev + 1);
          setPendingBookingCount((prev) => prev - 1);
          toast.success("Your booking is successfully!");
        } else if (status === "cancelled") {
          setPendingCount((prev) => prev - 1);
          setCancelledCount((prev) => prev + 1);
          setPendingBookingCount((prev) => prev - 1);
          toast.info("Your booking is canceled!");
        }
      })
      .catch((error) => {
        console.error("Failed to update booking status:", error);
      });
  };

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      updateBookingStatus(id, "cancelled");
    }
  };

  return (
    <div id="alighnforadmin" className="machinealigh">
      <ToastContainer />
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
            <div className="notification-bell">
              <i className="fa-regular fa-bell" id="bell"></i>
              {pendingBookingCount > 0 && (
                <span className="notification-count">{pendingBookingCount}</span>
              )}
            </div>
          </div>
        </div>
        <div className="content" id="content">
          <div className="Notecontainer" id="notecontainer">
            <p className="verification" id="verificationmachine">
              Waiting for your Confirmation!
            </p>
            <div className="fletotal">
              <p className="TotalBooking">
                Total Bookings
                <br /> <span>{users.length}</span>
              </p>
              <p className="TotalBooking1">
                Pending Bookings
                <br /> <span>{pendingCount}</span>
              </p>
              <p className="TotalBooking2">
                Accepted Bookings
                <br /> <span>{acceptedCount}</span>
              </p>
              <p className="TotalBooking3">
                Cancelled Bookings
                <br /> <span>{cancelledCount}</span>
              </p>
              <p className="TotalBooking4">
                Finished Work
                <br />{" "}
                <span>
                  {users.filter((user) => user.isFinishWork === "Finished").length}
                </span>
              </p>
            </div>
            <table className="tablemachine">
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="vetype">Vehicle </th>
                  <th> Address</th>
                  <th>District</th>
                  <th className="vetype">Acre</th>
                  <th>Status</th>
                  <th className="vetype1">Booking</th>
                  <th>Work</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user) => (
                  <tr
                    key={user._id}
                    style={{
                      backgroundColor:
                        user.isVerified === "Pending" ? "lightblue" : "transparent",
                    }}
                  >
                    <td className="namemachine" style={{ padding: "5px" }}>
                      {user.isVerified === "Pending" && (
                        <span
                          style={{
                            fontSize: "12px",
                            marginLeft: "2px",
                            backgroundColor: "blue",
                            color: "white",
                            padding: "2px 8px",
                            borderRadius: "5px",
                            fontWeight: "bold",
                          }}
                        >
                          &nbsp; New
                        </span>
                      )}
                      &nbsp; &nbsp; {user.Name}
                    </td>
                    <td>{user.vehicleType}</td>
                    <td>{user.Address}</td>
                    <td>{user.District}</td>
                    <td>{user.AcreCount}</td>
                    <td>{user.isVerified}</td>
                    <td className="verifycationconfirm">
                      {user.isVerified === "Pending" && (
                        <>
                          <button
                            className="Confirm"
                            onClick={() => updateBookingStatus(user._id, "Accepted")}
                          >
                            Confirm
                          </button>
                          <button
                            className="Confirm"
                            id="cancel"
                            onClick={() => handleCancel(user._id)}
                          >
                            Cancel
                          </button>
                        </>
                      )}
                      {user.isVerified === "Accepted" && (
                        <i className="fa-solid fa-check" id="correct"></i>
                      )}
                      {user.isVerified === "cancelled" && (
                        <i className="fa-solid fa-xmark" id="wrong"></i>
                      )}
                    </td>
                    <td>
                      {user.isVerified === "Accepted" && (
                        <button
                          className="finish"
                          onClick={() => handleFinish(user._id)}
                        >
                          Finish
                        </button>
                      )}
                      {user.isFinishWork === "Finished" && (
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
            <div id="sidetext">
              Uzhavan <br />
              <span className="slogan">The Connector</span>
            </div>
          </p>
          <Link to="/LinkAddProfile">
            <button className="dash" id="dash">
              Add Service
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

export default Machine;

