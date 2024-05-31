


import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";


function TsunamiCard({ selectedDistrict }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://uzavan-my-final-project.onrender.com/profile/serviceView");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const verifiedMachines = data.filter(
        (machine) =>
          machine.isVerified && machine.vehicleType === "TsunamiMachine"
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
            
            <div className="pagination-buttons">
              {renderPageNumbers()}
            </div>
            <div className="page-info">
              {` ${indexOfFirstItem + 1} - ${Math.min(indexOfLastItem, filteredUsers.length)} of ${filteredUsers.length} Tsunami`}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default TsunamiCard;
