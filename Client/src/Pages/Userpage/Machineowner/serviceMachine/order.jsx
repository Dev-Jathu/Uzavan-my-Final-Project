
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../../../Assets/uzavan.png";
import {jwtDecode} from 'jwt-decode';

// import StripeCheckout from "react-stripe-checkout";

  


function Order() {
  const [users, setUsers] = useState([]);
  const [machinery, setMachinery] = useState([]);
  const [Farmer, setFarmer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [username, setUsername] = useState(""); // State to hold username

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

  const [product, setProduct] = useState({
    name: "Uzhavan",
    price: 100,
    productBy: "uki",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); // Redirect to login if token is not present
    } else {
      // Optionally, verify token with backend if needed
    }
  }, [navigate]);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return fetch("http://localhost:3000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response:", response);
        const { status } = response;
        console.log("Status:", status);
        if (status === 200) {
          navigate("/Addprofile"); // Navigate to Addprofile if the payment is successful
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/signin'); // Redirect to login if token is not present
    } else {
      // Decode the token to get user information
      try {
        const decodedToken = jwtDecode(token);
        setUsername(decodedToken.Name); // Set the username from the token
        console.log('User Email:', decodedToken.Email);
      } catch (error) {
        console.error('Error decoding token:', error);
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
            <table className="tablemachine">
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
          <p className="sidetext" >
            <div id="sidetext">
            Uzhavan <br />
            <span5>The Connector</span5>
            </div>
         
          </p>
          <Link to="/LinkAddProfile">
          {/* <StripeCheckout
                stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI"
                token={makePayment}
                name="Buy Uzhavan"
                amount={product.price * 100}
              >
            <button className="dash" id="dash">Add Profile</button>
              </StripeCheckout> */}
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
          <Link to="/Machineservicehome">
            <button className="dash">Home</button>
          </Link>
          <br/>
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

export default Order;