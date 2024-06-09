import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import Logo from '../../../Assets/uzavan.png';

function Machine() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin');
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
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin');
    } else {
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name);
        setUserid(decodedToken.id);
        fetchUsers(decodedToken.Name, token);
      } catch (error) {
        console.error('Error decoding token:', error);
        navigate('/signin');
      }
    }
  }, [navigate]);

  const fetchUsers = (ownerName, token) => {
    axios
      .get("https://uzavan-server.onrender.com/Booking/Bookingview", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const filteredUsers = response.data.filter(
          (user) => user.OwnerName === ownerName
        );
        setUsers(filteredUsers);
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
      .patch(`https://uzavan-server.onrender.com/Booking/updateBookingStatus/${id}`, { status })
      .then((response) => {
        console.log('Booking status updated:', response.data);
        fetchUsers(username, localStorage.getItem('token')); // Refresh the user list
      })
      .catch((error) => {
        console.error('Failed to update booking status:', error);
      });
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
          <div className="Notecontainer" id="notecontainer">
            <p className="verification" id="verification">Waiting for your Confirmation!</p>
            <table className="tablemachine">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>District</th>
                  <th>Acre Count</th>
                  <th>Verification</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user) => (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.Address}</td>
                    <td>{user.District}</td>
                    <td>{user.AcreCount}</td>
                    <td className="verifycationconfirm">
                      <button className="Confirm" onClick={() => updateBookingStatus(user._id, 'Accepted')}>Confirm</button>
                      <button className="Confirm" id="cancel" onClick={() => updateBookingStatus(user._id, 'cancelled')}>Cancel</button>
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
              <span5>The Connector</span5>
            </div>
          </p>
          <Link to="/LinkAddProfile">
            <button className="dash" id="dash">Add Profile</button>
          </Link>
          <Link to="/MachineService">
            <button className="dash">Service</button>
          </Link>
          <br />
          <Link to="/MachineOrder">
            <button className="dash">Order</button>
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

export default Machine;
