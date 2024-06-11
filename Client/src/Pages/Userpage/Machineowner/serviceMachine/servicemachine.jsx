
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Logo from "../../../../Assets/uzavan.png";

const ITEMS_PER_PAGE = 3;

function ServiveMachine() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

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
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name);
        setUserId(decodedToken.id);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/signin");
      }
    }
  }, [navigate]);

  useEffect(() => {
    if (userId) {
      fetchUsers();
    }
  }, [userId]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://uzavan-server.onrender.com/profile/serviceView`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const filteredData = data.filter((user) => user.Name === username);
      setUsers(filteredData);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  };

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = users.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    return Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(index + 1)}
        style={{
          margin: "0 5px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: currentPage === index + 1 ? "green" : "#fff",
          color: currentPage === index + 1 ? "#fff" : "green",
          border: "1px solid #0e0737",
          borderRadius: "5px",
        }}
        disabled={currentPage === index + 1}
      >
        {index + 1}
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
              <p className="boss">Welcome Back! {username}</p>
            </div>
          </div>
        </div>
        <div className="content" id="content">
          <div className="Notecontainer" id="notecontainermachine">
            <p className="verification" id="verification">
              Your Services!
            </p>
            {error ? (
              <p className="error-message">{error}</p>
            ) : (
              <>
                <div className="cards-container" id="cardmachine">
                  {currentItems.map((user) => (
                    <div
                      className="card"
                      key={user._id}
                      style={{
                        margin: "10px",
                        border: "1px solid #ccc",
                        padding: "20px",
                        width: "300px",
                      }}
                    >
                      <img
                        src={user.ImageURL}
                        className="card-img-top track1"
                        alt="Machine owner photo"
                        id="cloudedit"
                        style={{ width: "100%", height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h5
                          className="card-title"
                          id="cardtitletractor"
                          style={{ height: "30px" }}
                        >
                          Name : {user.Name}
                        </h5>
                        <div className="card-text" id="cardtexttractor1">
                          <p className="districtCard">District: {user.District}</p>
                          <p className="districtCard">Type: {user.vehicleType}</p>
                          <p className="districtCard">Rate: {user.Rate}</p>
                        </div>
                        <button
                          className="editmachine"
                          style={{
                            marginTop: "10px",
                            padding: "5px",
                            backgroundColor: "black",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                          }}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="pagination-container"
                  style={{ textAlign: "center", margin: "20px 0" }}
                >
                  <div className="pagination-buttons">{renderPageNumbers()}</div>
                </div>
              </>
            )}
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

export default ServiveMachine;
