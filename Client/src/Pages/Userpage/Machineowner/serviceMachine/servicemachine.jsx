// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Logo from "../../../../Assets/uzavan.png";
// import { jwtDecode } from "jwt-decode";

// // import StripeCheckout from "react-stripe-checkout";

// function ServiveMachine() {
//   const [users, setUsers] = useState([]);
//   const [machinery, setMachinery] = useState([]);
//   const [Farmer, setFarmer] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);
//   const [username, setUsername] = useState(""); // State to hold username

//   const navigate = useNavigate(); // Hook for navigation

//   // Function to handle logout
//   const handleLogout = () => {
//     // Remove JWT token from local storage or wherever it's stored
//     localStorage.removeItem("jwtToken");
//     // Navigate to the home page
//     navigate("/signin");
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(users.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }
//     return pageNumbers.map((number) => (
//       <button
//         className="pagenumber"
//         key={number}
//         onClick={() => handlePageChange(number)}
//         disabled={currentPage === number}
//       >
//         {number}
//       </button>
//     ));
//   };

//   const [product, setProduct] = useState({
//     name: "Uzhavan",
//     price: 100,
//     productBy: "uki",
//   });

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin"); // Redirect to login if token is not present
//     } else {
//       // Optionally, verify token with backend if needed
//     }
//   }, [navigate]);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin"); // Redirect to login if token is not present
//     } else {
//       // Decode the token to get user information
//       try {
//         const decodedToken = jwtDecode(token);
//         setUsername(decodedToken.Name); // Set the username from the token
//         console.log("User Email:", decodedToken.Email);
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, [navigate]);

//   const fetchUsers = async () => {
//     try {
//       const response = await fetch("http://localhost:3003/profile/serviceView");
//     } catch (error) {
//       console.error("Failed to fetch users:", error);
//       setError("Failed to fetch users. Please try again later.");
//     }
//   };

//   return (
//     <div id="alighnforadmin" className="machinealigh">
//       <div className="main11">
//         <div className="container">
//           <div className="logo" id="logoadmin">
//             <div className="logoimg">
//               <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <p className="boss">Welcome Back! {username} </p>
//             </div>
//           </div>
//         </div>
//         <div className="content" id="content">
//           <div className="Notecontainer" id="notecontainer">
//             <p className="verification" id="verification">
//               Your Services!
//             </p>
//             <>
//               {error ? (
//                 <p className="error-message">{error}</p>
//               ) : (
//                 <>
//                   <div className="cards-container">
//                     {currentItems.map((user) => (
//                       <div className="card" key={user._id}>
//                         <img
//                           src={user.ImageURL}
//                           className="card-img-top track1"
//                           alt="Machine owner photo"
//                         />
//                         <div className="card-body">
//                           <h5 className="card-title" id="cardtitletractor">
//                             {user.Name}
//                           </h5>
//                           <div className="card-text" id="cardtexttractor">
//                             <p className="Addresscard">{user.Address}</p>
//                             <p className="districtCard">{user.District}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="pagination-container">
//                     <div className="pagination-buttons">
//                       {renderPageNumbers()}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </>{" "}
//             <div className="pagination">{renderPageNumbers()}</div>
//           </div>
//         </div>
//         <div className="sidbarboss" id="sidbarmachine">
//           <p className="sidetext">
//             <div id="sidetext">
//               Uzhavan <br />
//               <span5>The Connector</span5>
//             </div>
//           </p>
//           <Link to="/LinkAddProfile">
//             {/* <StripeCheckout
//                 stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI"
//                 token={makePayment}
//                 name="Buy Uzhavan"
//                 amount={product.price * 100}
//               >
//             <button className="dash" id="dash">Add Profile</button>
//               </StripeCheckout> */}
//             <button className="dash" id="dash">
//               Add Profile
//             </button>
//           </Link>
//           <Link to="/MachineService">
//             <button className="dash">Service</button>
//           </Link>
//           <br />
//           <Link to="/MachineOrder">
//             <button className="dash">Order</button>
//           </Link>
//           <br />
//           <Link to="/Machineservicehome">
//             <button className="dash">Home</button>
//           </Link>
//           <br />
//           {/* Logout button with onClick event */}
//           <button className="dash" onClick={handleLogout}>
//             Logout
//           </button>
//           <p className="copyrights">
//             &copy; 2024 Uzhavan. All rights reserved.
//           </p>{" "}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiveMachine;



// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";
// import Logo from "../../../../Assets/uzavan.png";

// function ServiveMachine() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const [username, setUsername] = useState("");
//   const [userId, setUserId] = useState("");

//   const navigate = useNavigate(); // Hook for navigation

//   // Function to handle logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   };

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);
//   const totalPages = Math.ceil(users.length / itemsPerPage);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPageNumbers = () => {
//     const pageNumbers = [];
//     for (let i = 1; i <= totalPages; i++) {
//       pageNumbers.push(i);
//     }
//     return pageNumbers.map((number) => (
//       <button
//         className="pagenumber"
//         key={number}
//         onClick={() => handlePageChange(number)}
//         disabled={currentPage === number}
//       >
//         {number}
//       </button>
//     ));
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin");
//     } else {
//       try {
//         const decodedToken = jwtDecode(token);
//         setUsername(decodedToken.Name);
//         setUserId(decodedToken.id);
//         console.log("User Email:", decodedToken.Email);
//       } catch (error) {
//         console.error("Error decoding token:", error);
//         navigate("/signin");
//       }
//     }
//   }, [navigate]);

//   useEffect(() => {
//     if (userId) {
//       fetchUsers(userId);
//     }
//   }, [userId]);

//   const fetchUsers = async (userId) => {
//     try {
//       const response = await fetch(`http://localhost:3003/profile/serviceView?userId=${userId}`);
//       const data = await response.json();
//       setUsers(data);
//     } catch (error) {
//       console.error("Failed to fetch users:", error);
//       setError("Failed to fetch users. Please try again later.");
//     }
//   };

//   return (
//     <div id="alighnforadmin" className="machinealigh">
//       <div className="main11">
//         <div className="container">
//           <div className="logo" id="logoadmin">
//             <div className="logoimg">
//               <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <p className="boss">Welcome Back! {username}</p>
//             </div>
//           </div>
//         </div>
//         <div className="content" id="content">
//           <div className="Notecontainer" id="notecontainer">
//             <p className="verification" id="verification">
//               Your Services!
//             </p>
//             <>
//               {error ? (
//                 <p className="error-message">{error}</p>
//               ) : (
//                 <>
//                   <div className="cards-container">
//                     {currentItems.map((user) => (
//                       <div className="card" key={user._id}>
//                         <img
//                           src={user.ImageURL}
//                           className="card-img-top track1"
//                           alt="Machine owner photo"
//                         />
//                         <div className="card-body">
//                           <h5 className="card-title" id="cardtitletractor">
//                             {user.Name}
//                           </h5>
//                           <div className="card-text" id="cardtexttractor">
//                             <p className="Addresscard">{user.Address}</p>
//                             <p className="districtCard">{user.District}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                   <div className="pagination-container">
//                     <div className="pagination-buttons">
//                       {renderPageNumbers()}
//                     </div>
//                   </div>
//                 </>
//               )}
//             </>
//             {/* <div className="pagination">{renderPageNumbers()}</div> */}
//           </div>
//         </div>
//         <div className="sidbarboss" id="sidbarmachine">
//           <p className="sidetext">
//             <div id="sidetext">
//               Uzhavan <br />
//               <span5>The Connector</span5>
//             </div>
//           </p>
//           <Link to="/LinkAddProfile">
//             <button className="dash" id="dash">
//               Add Profile
//             </button>
//           </Link>
//           <Link to="/MachineService">
//             <button className="dash">Service</button>
//           </Link>
//           <br />
//           <Link to="/MachineOrder">
//             <button className="dash">Order</button>
//           </Link>
//           <br />
//           <Link to="/Machineservicehome">
//             <button className="dash">Home</button>
//           </Link>
//           <br />
//           <button className="dash" onClick={handleLogout}>
//             Logout
//           </button>
//           <p className="copyrights">
//             &copy; 2024 Uzhavan. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ServiveMachine;


import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import Logo from "../../../../Assets/uzavan.png";

function ServiveMachine() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [MachineryId, setMachineryId] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentServices = services.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(services.length / itemsPerPage);

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
    const fetchServices = async () => {
      try {
        const response = await fetch(`http://localhost:3003/profile/service/${MachineryId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch service details');
        }
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Failed to fetch service details:', error);
        setError('Failed to fetch service details. Please try again later.');
      }
    };

    fetchServices();
  }, [MachineryId]); // Fetch services whenever MachineryId changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
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
            <p className="verification" id="verification">
              Your Services!
            </p>
            <>
              {error ? (
                <p className="error-message">{error}</p>
              ) : (
                <>
                  <div className="cards-container">
                    {currentServices.map((service) => (
                      <div className="card" key={service._id}>
                        <img
                          src={service.ImageURL}
                          className="card-img-top track1"
                          alt="Machine owner photo"
                        />
                        <div className="card-body">
                          <h5 className="card-title" id="cardtitletractor">
                            {service.Name}
                          </h5>
                          <div className="card-text" id="cardtexttractor">
                            <p className="Addresscard">{service.Address}</p>
                            <p className="districtCard">{service.District}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pagination-container">
                    <div className="pagination-buttons">
                      {renderPageNumbers()}
                    </div>
                  </div>
                </>
              )}
            </>
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
              Add Profile
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
          <Link to="/Machineservicehome">
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
    </div>
  );
}

export default ServiveMachine;
