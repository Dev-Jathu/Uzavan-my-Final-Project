
import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function Card({ selectedDistrict }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://uzhavan-server.onrender.com/profile/serviceView");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const verifiedMachines = data.filter(
        (machine) => machine.isVerified && machine.vehicleType === "paddyCropper"
      );
      setUsers(verifiedMachines);
      console.log("Verified machines fetched:", verifiedMachines);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setError("Failed to fetch users. Please try again later.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [selectedDistrict]);

  const filteredUsers =
    selectedDistrict === "All-District"
      ? users
      : users.filter((user) => user.District === selectedDistrict);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

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
        className={`pagenumber ${currentPage === number ? "active" : ""}`}
        key={number}
        onClick={() => handlePageChange(number)}
      >
        {number}
      </button>
    ));
  };
  const handleHireClick = (userId) => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, navigate to the hire page
      window.location.href = `/hirepage/${userId}`;
    } else {
      // If token doesn't exist, navigate to the home page
      window.location.href = "Signin";
    }
  };
  
  return (
    <>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <>
          <div className="cards-container">
            {currentItems.map((user) => (
              <div className="card" key={user._id}>
                <img
                  src={user.ImageURL} 
                  className="card-img-top track1"
                  alt="Machine owner photo"
                />
                <div className="card-body">
                  <h5 className="card-title" id="cardtitletractor">
                    {user.Name}
                  </h5>
                  <div className="card-text" id="cardtexttractor">
                    <p className="Addresscard">{user.Address}</p>
                    <p className="districtCard">{user.District}</p>
                  </div>
                  {/* <a
                    href="#"
                    className="btn btn-primary"
                    id="buttoncardtractor1"
                  >
                    Hire
                  </a> */}
                   <Link
                    to={`/hirepage/${user._id}`}
                    className="btn btn-primary"
                    id="buttoncardtractor2"
                    // onClick={() => handleHireClick(user._id)}

                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="pagination-container">
            <div className="pagination-buttons">{renderPageNumbers()}</div>
            <div className="page-info">
              {` ${indexOfFirstItem + 1} - ${Math.min(
                indexOfLastItem,
                filteredUsers.length
              )} of ${filteredUsers.length} Harvestor`}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Card;

