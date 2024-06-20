
import React, { useState, useEffect } from "react";
import Logo from "../../../Assets/uzavan.png";
import "./tractor.css";
import TractorCard from "../../../Componets/card/Card";
import Footercard from "../../../Componets/card/navbarforcard/footerforcard";

function Tractor() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("All-District");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://uzavan-my-final-project-1-server.onrender.com/profile/serviceView");
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
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };

  const handleLogout = () => {
    // Remove JWT token and update isLoggedIn state
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";

  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="logo" id='traclogo'>
            <div className="logoimg">
              <img src={Logo} id="logoimage" alt="Logo" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <div className="dropdown" id="droptrac"> 
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="drop"
                >
                  {selectedDistrict}
                </button>
                <ul className="dropdown-menu" id="menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Vavuniya")}
                    >
                      Vavuniya
                    </button>
                  </li>
                
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Mullaitivu")}
                    >
                      Mullaitivu
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Kilinochchi")}
                    >
                      Kilinochchi
                    </button>
                  </li>
                  
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Jaffna")}
                    >
                      Jaffna
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Mannar")}
                    >
                      Mannar
                    </button>
                  </li>
                  {/* Other district options */}
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("All-District")}
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="butres">
              {isLoggedIn ? (
                <button className="button1" id="button11" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <a href="/join">
                  <button className="button1" id="button11">
                    Join
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cardstractor">
        <TractorCard selectedDistrict={selectedDistrict} />
      </div>
      <Footercard />
    </div>
  );
}

export default Tractor;
