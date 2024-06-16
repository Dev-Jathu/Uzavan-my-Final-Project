// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Admin.css";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [machinery, setMachinery] = useState([]);
//   const [Farmer, setFarmer] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   };
//   useEffect(() => {
//     fetchMachine();
//   }, []);

//   useEffect(() => {
//     fetchFarmer();
//   }, []);
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin");
//     } else {
//       fetchUsers(token);
//       const newSocket = new WebSocket("ws://localhost:3001");

//       newSocket.onmessage = (event) => {
//         const data = JSON.parse(event.data);
//         if (data.type === "VERIFIED_USER") {
//           setUsers((prevUsers) =>
//             prevUsers.map((user) =>
//               user._id === data.id ? { ...user, isVerified: true } : user
//             )
//           );
//         } else if (data.type === "DELETE_USER") {
//           setUsers((prevUsers) =>
//             prevUsers.filter((user) => user._id !== data.id)
//           );
//         }
//       };

//       return () => newSocket.close();
//     }
//   }, [navigate]);

//   const fetchUsers = (token) => {
//     axios
//       .get("https://uzavan-server.onrender.com/profile/serviceView", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => setUsers(response.data))
//       .catch((error) => {
//         console.error("Failed to fetch users:", error);
//         if (error.response && error.response.status === 401) {
//           navigate("/signin");
//         }
//       });
//   };

//   const toggleVerifyUser = (id, currentStatus
//   ) => {
//     const token = localStorage.getItem("token");
//     const newStatus = !currentStatus;
//     axios
//       .patch(
//         `https://uzavan-server.onrender.com/profile/verified/${id}`,
//         { isVerified: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then(() => {
//         alert(`User ${newStatus ? "verified" : "unverified"} successfully`);
//         fetchUsers(token);
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         console.error(`Failed to update the user's verification status: ${error.message}`);
//       });
//   };

//   const deleteUser = (id) => {
//     const token = localStorage.getItem("token");
//     if (!id) {
//       alert("User ID is missing.");
//       return;
//     }

//     if (window.confirm(`Are you sure you want to delete this user?`)) {
//       axios
//         .delete(`https://uzavan-server.onrender.com/profile/delete/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           alert(response.data.message || "User deleted successfully");
//           fetchUsers(token);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           console.error("Failed to delete the user.");
//         });
//     }
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
//     // Total count of service users
//     const serviceUsersCount = users.length;

//     //machinery details
//     const fetchMachine = () => {
//       fetch("https://uzavan-server.onrender.com/machinery/MachineView")
//         .then((response) => response.json())
//         .then((data) => setMachinery(data))
//         .catch((error) => console.error("Failed to fetch machinery:", error));
//     };
  
//     const machineryUsersCount = machinery.length;
//  //Farmer details
//  const fetchFarmer = () => {
//   fetch("https://uzavan-server.onrender.com/farmer/farmerView")
//     .then((response) => response.json())
//     .then((data) => setFarmer(data))
//     .catch((error) => console.error("Failed to fetch users:", error));

// };
// const FarmerUsersCount = Farmer.length;

//   return (
//     <div id="alighnforadmin">
//       <div className="main11">
//         <div className="container">
//           <div className="logo" id="logoadmin">
//             <div className="logoimg" >
//               <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <p className="boss">Welcome Back! Mr. Jathusan</p>
//             </div>
//             <div>
//               <img src={Boss} className="bossimg" alt="Boss" />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="gridcount">
//             <div className="Farmercount">
//               <p className="fcount">Farmer Count</p>
//               {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
//               {FarmerUsersCount}
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
//               {machineryUsersCount}
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Service Profile</p>
//               {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
//               {serviceUsersCount}

//             </div>
//           </div>
//           <div className="Notecontainer">
//             <p className="verification">Waiting for your verification!</p>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Address</th>
//                   <th>T.P Number</th>
//                   <th>Vehicle Types</th>
//                   <th>District</th>
//                   <th>Verify</th>
//                   <th>Delete</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {currentItems.map((user) => (
//                   <tr key={user._id}>
//                     <td>{user.Name}</td>
//                     <td>{user.Address}</td>
//                     <td>{user.PhoneNumber}</td>
//                     <td>{user.vehicleType}</td>
//                     <td>{user.District}</td>
//                     <td>
//                       <button
//                         id="edit"
//                         className={`button-verify ${
//                           user.isVerified ? "button-verified" : ""
//                         }`}
//                         onClick={() => toggleVerifyUser(user._id, user.isVerified)}
//                       >
//                         {user.isVerified ? "Verified" : "Pending"}
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="delete"
//                         onClick={() => deleteUser(user._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="pagination">{renderPageNumbers()}</div>
//           </div>
//         </div>
//       <div className="sidbarboss">
//           <p className="sidetext">
//             Uzhavan <br />
//             <span5>The Connector</span5>
//           </p>

//           <Link to="/Admin">
//             <button className="dash">Dashbord</button>
//           </Link>
//           <br />
//           <Link to="/FarmerDetails">
//             <button className="dash">Farmer</button>
//           </Link>
//           <br />
//           <Link to="/MachineryDetails">
//             <button className="dash">Machine Owner</button>
//           </Link>
//           {/* <Link to="/paymentDetails">
//             <button className="dash">Payments</button>
//           </Link> */}
          
//             <button onClick= {handleLogout} className="dash">Logout</button>
          
//           {/* <img src={Logo} className="footlogoboss" /> */}
//           <p className="copyrights">&copy; 2024 Uzhavan. All rights reserved.</p>        </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;






import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";
import Logo from "../../Assets/uzavan.png";
import Boss from "../../Assets/boss.png";

function Admin() {
  const [users, setUsers] = useState([]);
  const [machinery, setMachinery] = useState([]);
  const [Farmer, setFarmer] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [notificationCount, setNotificationCount] = useState(0);
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
      .get("https://uzavan-server.onrender.com/profile/serviceView", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUsers(response.data);
        const unverifiedCount = response.data.filter((user) => !user.isVerified).length;
        setNotificationCount(unverifiedCount);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  };

  const toggleVerifyUser = (id, currentStatus) => {
    const token = localStorage.getItem("token");
    const newStatus = !currentStatus;
    axios
      .patch(
        `https://uzavan-server.onrender.com/profile/verified/${id}`,
        { isVerified: newStatus },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert(`User ${newStatus ? "verified" : "unverified"} successfully`);
        fetchUsers(token);
      })
      .catch((error) => {
        console.error("Error verifying user:", error);
        alert(`Failed to update the user's verification status: ${error.message}`);
      });
  };

  const deleteUser = (id) => {
    const token = localStorage.getItem("token");
    if (!id) {
      alert("User ID is missing.");
      return;
    }

    if (window.confirm(`Are you sure you want to delete this user?`)) {
      axios
        .delete(`https://uzavan-server.onrender.com/profile/delete/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          alert(response.data.message || "User deleted successfully");
          fetchUsers(token);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to delete the user.");
        });
    }
  };

  const fetchMachine = () => {
    fetch("https://uzavan-server.onrender.com/machinery/MachineView")
      .then((response) => response.json())
      .then((data) => setMachinery(data))
      .catch((error) => console.error("Failed to fetch machinery:", error));
  };

  const fetchFarmer = () => {
    fetch("https://uzavan-server.onrender.com/farmer/farmerView")
      .then((response) => response.json())
      .then((data) => setFarmer(data))
      .catch((error) => console.error("Failed to fetch users:", error));
  };
  const fetchBookings = (token) => {
    axios
      .get("https://uzavan-server.onrender.com/Booking/Bookingview", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch bookings:", error);
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

  const serviceUsersCount = users.length;
  const machineryUsersCount = machinery.length;
  const FarmerUsersCount = Farmer.length;
  const totalBookingsCount = bookings.length;

  return (
    <div id="alighnforadmin">
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
            <div className="notification-bell">
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
              <span className="count">{totalBookingsCount}</span>
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
                        onClick={() => toggleVerifyUser(user._id, user.isVerified)}
                        style={{
                          backgroundColor: user.isVerified ? "green" : "",
                        }}
                      >
                        {user.isVerified ? "Verified" : "Pending"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="delete"
                        onClick={() => deleteUser(user._id)}
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
          <button onClick={handleLogout} className="dash">Logout</button>
          <p className="copyrights">&copy; 2024 Uzhavan. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
