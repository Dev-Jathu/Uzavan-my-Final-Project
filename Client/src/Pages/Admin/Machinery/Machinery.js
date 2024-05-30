
import { Link } from "react-router-dom";
import Logo from "../../../Assets/uzavan.png";
import Boss from "../../../Assets/boss.png";
import Button from "../../../Componets/Button/Button";
import React, { useState, useEffect } from "react";

function MachineryDetails() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  useEffect(() => {
    fetchUsers();
  }, []);
  //get details
  const fetchUsers = () => {
    fetch("https://uzhavan-server.onrender.com/machinery/MachineView")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Failed to fetch users:", error));
  };


  //pagination
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
 // Total count of Machinery users
 const MachineryUsersCount = users.length;
  return (
    <div id="alighnforadmin">
      <div className="main11">
        <div className="container">
          <div className="logo" id="logoadmin">
            <div className="logoimg">
              <img src={Logo} id="logoimage" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <p className="boss">Welcome Back! mr Jathusan</p>
            </div>
            <div>
              <img src={Boss} className="bossimg" />
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gridcount">
            
            <div className="Farmercount">
              <p className="fcount">Machinery Count</p>
              {/* <i class="fa-solid fa-user" id="addlogo"></i> */}
              {MachineryUsersCount}

            </div>
           
          </div>
          <div className="Notecontainer" id="machin">
            <table>
              <tr>
                <th>Name</th>
                <th> NIC</th>
                <th> TelNo</th>
                <th>Address</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
              <tbody>
                {currentItems.map((user) => (
                  <tr key={user._id}>
                    <td>{user.Name}</td>
                    <td>{user.NIC}</td>
                    <td>{user.TelNo}</td>
                    <td>{user.Address}</td>

                    <td>
                      <Button class="edit" name="update" />
                    </td>
                    <td>
                      <button
                        class="delete"
                        // onClick={() => deleteUser(user._id)}
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
          <img src={Logo} className="footlogoboss" />
        </div>
      </div>
    </div>
  );
}

export default MachineryDetails;
