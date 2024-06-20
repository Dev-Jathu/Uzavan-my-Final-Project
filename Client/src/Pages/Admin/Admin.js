import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Admin.css";
import Logo from "../../Assets/uzavan.png";
import Boss from "../../Assets/boss.png";
import ConfirmationModal from "./ConfirmationModal";

function Admin() {
  const [users, setUsers] = useState([]);
  const [machinery, setMachinery] = useState([]);
  const [Farmer, setFarmer] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [notificationCount, setNotificationCount] = useState(0);
  const [finishedWorkCount, setFinishedWorkCount] = useState(0); // State to store finished work count
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to handle popup visibility
  const [modalData, setModalData] = useState({
    show: false,
    title: "",
    message: "",
    onConfirm: null,
  });

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      fetchUsers(token);
      fetchMachine();
      fetchFarmer();
      fetchBookings(token);
      const newSocket = new WebSocket("ws://localhost:3001");

      newSocket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "VERIFIED_USER") {
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user._id === data.id ? { ...user, isVerified: true } : user
            )
          );
        } else if (data.type === "DELETE_USER") {
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user._id !== data.id)
          );
        }
        // Update notification count on new data
        const unverifiedCount = users.filter((user) => !user.isVerified).length;
        setNotificationCount(unverifiedCount);
      };

      return () => newSocket.close();
    }
  }, [navigate]);

  const fetchUsers = (token) => {
    axios
      .get("https://uzavan-my-final-project-1-server.onrender.com/profile/serviceView", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUsers(response.data);
        const unverifiedCount = response.data.filter(
          (user) => !user.isVerified
        ).length;
        setNotificationCount(unverifiedCount);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  };

  const toggleVerifyUser = (id, currentStatus, userName) => {
    const token = localStorage.getItem("token");
    const newStatus = !currentStatus;
    axios
      .patch(
        `https://uzavan-my-final-project-1-server.onrender.com/profile/verified/${id}`,
        { isVerified: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        fetchUsers(token);
        if (newStatus) {
          toast.success(` ${userName} verified successfully`);
        } else {
          toast.success(` ${userName} blocked successfully`);
        }
      })
      .catch((error) => {
        console.error("Error verifying user:", error);
        toast.error(`Failed to update the user's verification status: ${error.message}`);
      });
  };

  const deleteUser = (id, userName) => {
    const token = localStorage.getItem("token");
    if (!id) {
      toast.error("User ID is missing.");
      return;
    }

    axios
      .delete(`https://uzavan-my-final-project-1-server.onrender.com/profile/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        fetchUsers(token);
        toast.success(` ${userName} deleted successfully`);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Failed to delete the user.");
      });
  };

  const fetchMachine = () => {
    fetch("https://uzavan-my-final-project-1-server.onrender.com/machinery/MachineView")
      .then((response) => response.json())
      .then((data) => setMachinery(data))
      .catch((error) => console.error("Failed to fetch machinery:", error));
  };

  const fetchFarmer = () => {
    fetch("https://uzavan-my-final-project-1-server.onrender.com/farmer/farmerView")
      .then((response) => response.json())
      .then((data) => setFarmer(data))
      .catch((error) => console.error("Failed to fetch users:", error));
  };

  const fetchBookings = (token) => {
    axios
      .get("https://uzavan-my-final-project-1-server.onrender.com/Booking/Bookingview", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setBookings(response.data);
        const finishedCount = response.data.filter(
          (booking) => booking.isFinishWork === "Finished"
        ).length;
        setFinishedWorkCount(finishedCount);
      })
      .catch((error) => {
        console.error("Failed to fetch bookings:", error);
      });
  };

  const confirmAction = (title, message, onConfirm) => {
    setModalData({
      show: true,
      title,
      message,
      onConfirm,
    });
  };

  const handleVerifyClick = (user) => {
    const message = user.isVerified
      ? `Are you sure you want to block ${user.Name}?`
      : `Are you sure you want to verify ${user.Name}?`;
    confirmAction(
      user.isVerified ? "Block User" : "Verify User",
      message,
      () => toggleVerifyUser(user._id, user.isVerified, user.Name)
    );
  };

  const handleDeleteClick = (user) => {
    confirmAction(
      "Delete User",
      `Are you sure you want to delete ${user.Name}?`,
      () => deleteUser(user._id, user.Name)
    );
  };

  const handleModalCancel = () => {
    setModalData({
      ...modalData,
      show: false,
    });
  };

  // Sort users so that unverified users come first
  const sortedUsers = [...users].sort((a, b) => a.isVerified - b.isVerified);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

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

  const serviceUsersCount = users.length;
  const machineryUsersCount = machinery.length;
  const FarmerUsersCount = Farmer.length;
  const totalBookingsCount = bookings.length;

  return (
    <div id="alighnforadmin" className={isPopupVisible ? "blur" : ""}>
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
              <p className="boss">Welcome Back! Mr. Jathusan</p>
            </div>
            <div>
              <img src={Boss} className="bossimg" alt="Boss" />
            </div>
            <div className="notification-bell" onClick={() => setIsPopupVisible(!isPopupVisible)}>
              <i className="fa-regular fa-bell" id="bell"></i>
              {notificationCount > 0 && (
                <span className="notification-count">{notificationCount}</span>
              )}
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gridcount">
            <div className="Farmercount">
              <span className="count">{FarmerUsersCount}</span>
              <p className="fcount">Farmer</p>
            </div>
            <div className="Farmercount">
              <span className="count">{machineryUsersCount}</span>
              <p className="fcount">Machinery</p>
            </div>
            <div className="Farmercount">
              <span className="count">{serviceUsersCount}</span>
              <p className="fcount">Total Services</p>
            </div>
            <div className="Farmercount">
              <span className="count">{totalBookingsCount}</span>
              <p className="fcount">Total Bookings</p>
            </div>
            <div className="Farmercount">
              <span className="count">{finishedWorkCount}</span>
              <p className="fcount">Finished Work</p>
            </div>
          </div>
          <div className="Notecontainer">
            <p className="verification">Waiting for your verification!</p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>T.P Number</th>
                  <th>Vehicle Types</th>
                  <th>District</th>
                  <th>Verify</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user) => (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.Address}</td>
                    <td>{user.PhoneNumber}</td>
                    <td>{user.vehicleType}</td>
                    <td>{user.District}</td>
                    <td>
                      <button
                        id="edit"
                        className={`button-verify ${
                          user.isVerified ? "button-verified" : ""
                        }`}
                        onClick={() => handleVerifyClick(user)}
                        style={{
                          backgroundColor: user.isVerified ? "#15803d" : "",
                        }}
                      >
                        {user.isVerified ? "Verified" : "Pending"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDeleteClick(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">{renderPageNumbers()}</div>
          </div>
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
          <Link to="/paymentDetails">
            <button className="dash">Payments</button>
          </Link>
          <button onClick={handleLogout} className="dash">
            Logout
          </button>
          <p className="copyrights">
            &copy; 2024 Uzhavan. All rights reserved.
          </p>
        </div>
      </div>
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Pending Verification</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>T.P Number</th>
                  <th>Vehicle Types</th>
                  <th>District</th>
                  <th>Verify</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.filter((user) => !user.isVerified).map((user) => (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.Address}</td>
                    <td>{user.PhoneNumber}</td>
                    <td>{user.vehicleType}</td>
                    <td>{user.District}</td>
                    <td>
                      <button
                        id="edit"
                        className="button-verify"
                        onClick={() => handleVerifyClick(user)}
                      >
                        Pending
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => handleDeleteClick(user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={() => setIsPopupVisible(false)}>Close</button>
          </div>
        </div>
      )}
      <ConfirmationModal
        show={modalData.show}
        title={modalData.title}
        message={modalData.message}
        onConfirm={() => {
          modalData.onConfirm();
          setModalData({ ...modalData, show: false });
        }}
        onCancel={handleModalCancel}
      />
      <ToastContainer />
    </div>
  );
}

export default Admin;

