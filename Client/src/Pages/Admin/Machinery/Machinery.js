// import { Link,useNavigate } from "react-router-dom";
// import Logo from "../../../Assets/uzavan.png";
// import Boss from "../../../Assets/boss.png";
// import Button from "../../../Componets/Button/Button";
// import React, { useState, useEffect } from "react";

// function MachineryDetails() {
//   const [users, setUsers] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(7);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/signin");
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);
//   //get details
//   const fetchUsers = () => {
//     fetch("https://uzavan-server.onrender.com/machinery/MachineView")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Failed to fetch users:", error));
//   };


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
//  // Total count of Machinery users
//  const MachineryUsersCount = users.length;
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
//               <p className="fcount">Machinery Count</p>
//               {/* <i class="fa-solid fa-user" id="addlogo"></i> */}
//               {MachineryUsersCount}

//             </div>
           
//           </div>
//           <div className="Notecontainer" id="machin">
//             <table>
//               <tr>
//                 <th>Name</th>
//                 <th> NIC</th>
//                 <th> TelNo</th>
//                 <th> Email</th>
//                 <th>Address</th>
                
//                 <th>Delete</th>
//               </tr>
//               <tbody>
//                 {currentItems.map((user) => (
//                   <tr key={user._id}>
//                     <td>{user.Name}</td>
//                     <td>{user.NIC}</td>
//                     <td>{user.TelNo}</td>
//                     <td>{user.Email}</td>
//                     <td>{user.Address}</td>

                   
//                     <td>
//                       <button
//                         class="delete"
//                         // onClick={() => deleteUser(user._id)}
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
//           {/* <Link to="/paymentDetails">
//             <button className="dash">Payments</button>
//           </Link> */}
          
//             <button onClick= {handleLogout} className="dash">Logout</button>
          
//           {/* <img src={Logo} className="footlogoboss" /> */}
//           <p className="copyrights">&copy; 2024 Uzhavan. All rights reserved.</p>   
//           {/* <img src={Logo} className="footlogoboss" /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MachineryDetails;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../../Assets/uzavan.png";
import Boss from "../../../Assets/boss.png";
import Button from "../../../Componets/Button/Button";

function MachineryDetails() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    } else {
      fetchUsers(token);
    }
  }, [navigate]);

  const fetchUsers = async (token) => {
    try {
      const response = await axios.get("https://uzavan-server.onrender.com/machinery/MachineView", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      if (error.response && error.response.status === 401) {
        navigate("/signin");
      }
    }
  };

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

  const MachineryUsersCount = users.length;

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
          </div>
        </div>
        <div className="content">
          <div className="gridcount">
            <div className="Farmercount" id="fcount"  >
              <p className="fcount">Machinery Count</p>
              {MachineryUsersCount}
            </div>
          </div>
          <div className="Notecontainer" id="machin">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>NIC</th>
                  <th>TelNo</th>
                  <th>Address</th>
                  <th>Vehile Type</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user) => (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.NIC}</td>
                    <td>{user.TelNo}</td>
                    <td>{user.Address}</td>
                    <td>{user.VehicleTypes}</td>
                   
                    <td>
                      <button className="delete">
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
            <button className="dash">Dashboard</button>
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
    </div>
  );
}

export default MachineryDetails;
