// import "./Admin.css";
// import { Link } from "react-router-dom";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";
// import Button from "../../Componets/Button/Button";
// import React, { useState, useEffect } from "react";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(8);
//   const [editFormData, setEditFormData] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//     const newSocket = new WebSocket("ws://localhost:3001");
//     newSocket.onmessage = (event) => {
//       setUsers(JSON.parse(event.data));
//     };
//     return () => newSocket.close();
//   }, []);

//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   //get details
//   const fetchUsers = () => {
//     fetch("uzavan.vercel.app/profile/serviceView")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Failed to fetch users:", error));
//   };

//   //verified service

//   const verifyUser = (id) => {
//     fetch(`uzavan.vercel.app/profile/verified/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => {
//         alert("User verified successfully");
//         fetchUsers();
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         alert(`Failed to verify the user: ${error.message}`);
//       });
//   };

//   //delete details

//   const deleteUser = (id) => {
//     if (!id) {
//       alert("User ID is missing.");
//       return;
//     }

//     if (window.confirm(`Are you sure you want to delete this user?`)) {
//       fetch(`uzavan.vercel.app/profile/delete/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network error");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           alert(data.message || "User deleted successfully");
//           fetchUsers(); // Refresh list to show remaining users
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Failed to delete the user.");
//         });
//     }
//   };

//   const openEditModal = (user) => {
//     setEditFormData(user);
//   };
//   const closeEditModal = () => {
//     setEditFormData(null);
//   };
//   const handleEditFormChange = (event) => {
//     const { name, value } = event.target;
//     setEditFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const submitEditForm = () => {
//   //   if (!editFormData || !editFormData._id) {
//   //     alert("Error: No user data to update.");
//   //     return;
//   //   }

//   //   fetch(`http://localhost:3001/profile/update/${editFormData._id}`, {
//   //     method: "PUT",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify(editFormData),
//   //   })
//   //     .then((response) => response.json())
//   //     .then(() => {
//   //       alert("User updated successfully");
//   //       fetchUsers();
//   //       closeEditModal();
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error updating user:", error);
//   //       alert("Failed to update user.");
//   //     });
//   // };

//   //pagination
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

//   return (
//     <div id="alighnforadmin">
//       <div className="main11">
//         <div className="container">
//           <div className="logo" id="logoadmin">
//             <div className="logoimg">
//               <img src={Logo} id="logoimage" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <p className="boss">Welcome Back! mr Jathusan</p>
//             </div>
//             <div>
//               <img src={Boss} className="bossimg" />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="gridcount">
//             <div className="Farmercount">
//               <p className="fcount">Farmercount</p>
//               <i class="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               <i class="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Total Booking</p>
//               <i class="fa-solid fa-user" id="addlogo"></i>
//             </div>
//           </div>
//           <div className="Notecontainer">
//             <p className="verification">Waiting for your verification!</p>
//             <table>
//               <tr>
//                 <th>Name</th>
//                 <th> Address</th>
//                 <th>Phone_Number</th>
//                 <th>VehileTypes</th>
//                 <th> District</th>
//                 <th> Verify</th>
//                 <th> Delete</th>
//               </tr>
//               <tbody>
//                 {currentItems.map((user) => (
//                   <tr key={user._id}>
//                     <td>{user.Name}</td>
//                     <td>{user.Address}</td>
//                     <td>{user.PhoneNumber}</td>
//                     <td>{user.vehicleType}</td>
//                     <td>{user.District}</td>

//                     <td>
//                       {user.isVerified ? (
//                         "Verified"
//                       ) : (
//                         <button
//                           onClick={() => verifyUser(user._id)}
//                           className="edit"
//                         >
//                           Verify
//                         </button>
//                       )}
//                     </td>
//                     <td>
//                       <button
//                         class="delete"
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

//         <div className="sidbarboss">
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
//           <img src={Logo} className="footlogoboss" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

// import "./Admin.css";
// import { Link } from "react-router-dom";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";
// import React, { useState, useEffect } from "react";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(8);
//   const [editFormData, setEditFormData] = useState(null);

//   useEffect(() => {
//     fetchUsers();
//     const newSocket = new WebSocket("ws://localhost:3001");

//     newSocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.type === "VERIFIED_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === data.id ? { ...user, isVerified: true } : user
//           )
//         );
//       } else if (data.type === "DELETE_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.filter((user) => user._id !== data.id)
//         );
//       }
//     };

//     return () => newSocket.close();
//   }, []);

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const fetchUsers = () => {
//     fetch("uzavan.vercel.app/profile/serviceView")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Failed to fetch users:", error));
//   };

//   const verifyUser = (id) => {
//     fetch(`uzavan.vercel.app/profile/verified/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => {
//         alert("User verified successfully");
//         fetchUsers();
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         alert(`Failed to verify the user: ${error.message}`);
//       });
//   };

//   const deleteUser = (id) => {
//     if (!id) {
//       alert("User ID is missing.");
//       return;
//     }

//     if (window.confirm(`Are you sure you want to delete this user?`)) {
//       fetch(`uzavan.vercel.app/profile/delete/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network error");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           alert(data.message || "User deleted successfully");
//           fetchUsers();
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Failed to delete the user.");
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

//   return (
//     <div id="alighnforadmin">
//       <div className="main11">
//         <div className="container">
//           <div className="logo" id="logoadmin">
//             <div className="logoimg">
//               <img src={Logo} id="logoimage" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <p className="boss">Welcome Back! mr Jathusan</p>
//             </div>
//             <div>
//               <img src={Boss} className="bossimg" />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="gridcount">
//             <div className="Farmercount">
//               <p className="fcount">Farmercount</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Total Booking</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//           </div>
//           <div className="Notecontainer">
//             <p className="verification">Waiting for your verification!</p>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th> Address</th>
//                   <th>Phone Number</th>
//                   <th>Vehicle Types</th>
//                   <th> District</th>
//                   <th> Verify</th>
//                   <th> Delete</th>
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
//                       {user.isVerified ? (
//                         "Verified"
//                       ) : (
//                         <button
//                           onClick={() => verifyUser(user._id)}
//                           className="edit"
//                         >
//                           Verify
//                         </button>
//                       )}
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
//         <div className="sidbarboss">
//           <p className="sidetext">
//             Uzhavan <br />
//             <span5>The Connector</span5>
//           </p>
//           <Link to="/Admin">
//             <button className="dash">Dashboard</button>
//           </Link>
//           <br />
//           <Link to="/FarmerDetails">
//             <button className="dash">Farmer</button>
//           </Link>
//           <br />
//           <Link to="/MachineryDetails">
//             <button className="dash">Machine Owner</button>
//           </Link>
//           <img src={Logo} className="footlogoboss" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

// import "./Admin.css";
// import { Link } from "react-router-dom";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";
// import React, { useState, useEffect } from "react";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   useEffect(() => {
//     fetchUsers();
//     const newSocket = new WebSocket("ws://localhost:3001");

//     newSocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.type === "VERIFIED_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === data.id ? { ...user, isVerified: true } : user
//           )
//         );
//       } else if (data.type === "DELETE_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.filter((user) => user._id !== data.id)
//         );
//       }
//     };

//     return () => newSocket.close();
//   }, []);

//   const fetchUsers = () => {
//     fetch("uzavan.vercel.app/profile/serviceView")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Failed to fetch users:", error));
//   };

//   const toggleVerifyUser = (id, currentStatus) => {
//     const newStatus = !currentStatus;
//     fetch(`uzavan.vercel.app/profile/verified/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ isVerified: newStatus }),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => {
//         alert(`User ${newStatus ? "verified" : "unverified"} successfully`);
//         fetchUsers();
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         alert(`Failed to update the user's verification status: ${error.message}`);
//       });
//   };

//   const deleteUser = (id) => {
//     if (!id) {
//       alert("User ID is missing.");
//       return;
//     }

//     if (window.confirm(`Are you sure you want to delete this user?`)) {
//       fetch(`uzavan.vercel.app/profile/delete/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network error");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           alert(data.message || "User deleted successfully");
//           fetchUsers();
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Failed to delete the user.");
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

//   return (
//     <div id="alighnforadmin">
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
//               <p className="boss">Welcome Back! mr Jathusan</p>
//             </div>
//             <div>
//               <img src={Boss} className="bossimg" alt="Boss" />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="gridcount">
//             <div className="Farmercount">
//               <p className="fcount">Farmercount</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Total Booking</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//           </div>
//           <div className="Notecontainer">
//             <p className="verification">Waiting for your verification!</p>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th> Address</th>
//                   <th>T.P Number</th>
//                   <th>Vehicle Types</th>
//                   <th> District</th>
//                   <th> Verify</th>
//                   <th> Delete</th>
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

//         <div className="sidbarboss">
//           <p className="sidetext">
//             Uzhavan <br />
//             <span5>The Connector</span5>
//           </p>

//           <Link to="/Admin">
//             <button className="dash">Dashboard</button>
//           </Link>
//           <br />
//           <Link to="/FarmerDetails">
//             <button className="dash">Farmer</button>
//           </Link>
//           <br />
//           <Link to="/MachineryDetails">
//             <button className="dash">Machine Owner</button>
//           </Link>
//           <img src={Logo} className="footlogoboss" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "./Admin.css";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);
//   const navigate = useNavigate();

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
//           setUsers((prevUsers)

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
//       .get("uzavan.vercel.app/profile/serviceView", {
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

//   const toggleVerifyUser = (id, currentStatus) => {
//     const token = localStorage.getItem("token");
//     const newStatus = !currentStatus;
//     axios
//       .patch(
//         `uzavan.vercel.app/profile/verified/${id}`,
//         { isVerified: newStatus },
//         { headers: { Authorization: `Bearer ${token}` } }
//       )
//       .then(() => {
//         alert(`User ${newStatus ? "verified" : "unverified"} successfully`);
//         fetchUsers(token);
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         alert(`Failed to update the user's verification status: ${error.message}`);
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
//         .delete(`uzavan.vercel.app/profile/delete/${id}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((response) => {
//           alert(response.data.message || "User deleted successfully");
//           fetchUsers(token);
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Failed to delete the user.");
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

//   return (
//     <div id="alighnforadmin">
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
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Total Booking</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
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
//         <div className="sidbarboss">
//           <p className="sidetext">
//             Uzhavan <br />
//             <span>The Connector</span>
//           </p>
//           <Link to="/Admin">
//             <button className="dash">Dashboard</button>
//           </Link>
//           <br />
//           <Link to="/FarmerDetails">
//             <button className="dash">Farmer</button>
//           </Link>
//           <br />
//           <Link to="/MachineryDetails">
//             <button className="dash">Machine Owner</button>
//           </Link>
//           <img src={Logo} className="footlogoboss" alt="Footer Logo" />
//         </div>
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };
  useEffect(() => {
    fetchMachine();
  }, []);

  useEffect(() => {
    fetchFarmer();
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      fetchUsers(token);
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
      };

      return () => newSocket.close();
    }
  }, [navigate]);

  const fetchUsers = (token) => {
    axios
      .get("uzavan.vercel.app/profile/serviceView", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setUsers(response.data))
      .catch((error) => {
        console.error("Failed to fetch users:", error);
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  };

  const toggleVerifyUser = (id, currentStatus
  ) => {
    const token = localStorage.getItem("token");
    const newStatus = !currentStatus;
    axios
      .patch(
        `uzavan.vercel.app/profile/verified/${id}`,
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
        .delete(`uzavan.vercel.app/profile/delete/${id}`, {
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
    // Total count of service users
    const serviceUsersCount = users.length;

    //machinery details
    const fetchMachine = () => {
      fetch("uzavan.vercel.app/machinery/MachineView")
        .then((response) => response.json())
        .then((data) => setMachinery(data))
        .catch((error) => console.error("Failed to fetch machinery:", error));
    };
  
    const machineryUsersCount = machinery.length;
 //Farmer details
 const fetchFarmer = () => {
  fetch("uzavan.vercel.app/farmer/farmerView")
    .then((response) => response.json())
    .then((data) => setFarmer(data))
    .catch((error) => console.error("Failed to fetch users:", error));

};
const FarmerUsersCount = Farmer.length;

  return (
    <div id="alighnforadmin">
      <div className="main11">
        <div className="container">
          <div className="logo" id="logoadmin">
            <div className="logoimg" >
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
          </div>
        </div>
        <div className="content">
          <div className="gridcount">
            <div className="Farmercount">
              <p className="fcount">Farmer Count</p>
              {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
              {FarmerUsersCount}
            </div>
            <div className="Farmercount">
              <p className="fcount">Machinery Count</p>
              {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
              {machineryUsersCount}
            </div>
            <div className="Farmercount">
              <p className="fcount">Service Profile</p>
              {/* <i className="fa-solid fa-user" id="addlogo"></i> */}
              {serviceUsersCount}

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
          
            <button onClick= {handleLogout} className="dash">Logout</button>
          
          {/* <img src={Logo} className="footlogoboss" /> */}
          <p className="copyrights">&copy; 2024 Uzhavan. All rights reserved.</p>        </div>
      </div>
    </div>
  );
}

export default Admin;



// import "./Admin.css";
// import { Link } from "react-router-dom";
// import Logo from "../../Assets/uzavan.png";
// import Boss from "../../Assets/boss.png";
// import React, { useState, useEffect } from "react";

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(6);

//   useEffect(() => {
//     fetchUsers();
//     const newSocket = new WebSocket("ws://localhost:3001");

//     newSocket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       if (data.type === "VERIFIED_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.map((user) =>
//             user._id === data.id ? { ...user, isVerified: true } : user
//           )
//         );
//       } else if (data.type === "DELETE_USER") {
//         setUsers((prevUsers) =>
//           prevUsers.filter((user) => user._id !== data.id)
//         );
//       }
//     };

//     return () => newSocket.close();
//   }, []);

//   const fetchUsers = () => {
//     fetch("uzavan.vercel.app/profile/serviceView")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Failed to fetch users:", error));
//   };

//   const verifyUser = (id) => {
//     fetch(`uzavan.vercel.app/profile/verified/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(() => {
//         alert("User verified successfully");
//         fetchUsers();
//       })
//       .catch((error) => {
//         console.error("Error verifying user:", error);
//         alert(`Failed to verify the user: ${error.message}`);
//       });
//   };

//   const deleteUser = (id) => {
//     if (!id) {
//       alert("User ID is missing.");
//       return;
//     }

//     if (window.confirm(`Are you sure you want to delete this user?`)) {
//       fetch(`uzavan.vercel.app/profile/delete/${id}`, {
//         method: "DELETE",
//       })
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Network error");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           alert(data.message || "User deleted successfully");
//           fetchUsers();
//         })
//         .catch((error) => {
//           console.error("Error:", error);
//           alert("Failed to delete the user.");
//         });
//     }
//   };

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const renderPageNumbers = () => {
//     const totalPages = Math.ceil(users.length / itemsPerPage);
//     return Array.from({ length: totalPages }, (_, index) => index + 1).map(
//       (number) => (
//         <button
//           className="pagenumber"
//           key={number}
//           onClick={() => handlePageChange(number)}
//           disabled={currentPage === number}
//         >
//           {number}
//         </button>
//       )
//     );
//   };

//   return (
//     <div id="alighnforadmin">
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
//               <p className="boss">Welcome Back! mr Jathusan</p>
//             </div>
//             <div>
//               <img src={Boss} className="bossimg" alt="Boss" />
//             </div>
//           </div>
//         </div>
//         <div className="content">
//           <div className="gridcount">
//             <div className="Farmercount">
//               <p className="fcount">Farmercount</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Machinery Count</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
//             </div>
//             <div className="Farmercount">
//               <p className="fcount">Total Booking</p>
//               <i className="fa-solid fa-user" id="addlogo"></i>
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
//                 {users.map((user) => (
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
//                         onClick={() => {
//                           if (!user.isVerified) {
//                             verifyUser(user._id);
//                           } else {
//                             // Change button text to "Wait" and trigger verification
//                             const updatedUsers = users.map((u) =>
//                               u._id === user._id
//                                 ? { ...u, isVerified: false }
//                                 : u
//                             );
//                             setUsers(updatedUsers);
//                           }
//                         }}
//                       >
//                         {user.isVerified ? "Verified" : "Wait"}
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="delete"
//                         onClick={() => deleteUser(user._id)}
//                       >
//                         <i className="fa-solid fa-trash"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="pagination">{renderPageNumbers()}</div>
//           </div>
//         </div>
//         <div className="sidbarboss">
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
//           <img src={Logo} className="footlogoboss" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

