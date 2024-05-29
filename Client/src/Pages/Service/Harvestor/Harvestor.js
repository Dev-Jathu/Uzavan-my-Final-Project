

import React, { useState, useEffect } from "react";
import Logo from "../../../Assets/uzavan.png";
import { HashLink as Link } from "react-router-hash-link";
import MachineCard from "../../../Componets/card/machine";

function Harvestor() {
  const [selectedDistrict, setSelectedDistrict] = useState("All-District");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    // Redirect to the homepage
    window.location.href = "/";
  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="logo">
            <div className="logoimg">
              <img src={Logo} id="logoimage" alt="Logo" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <div className="dropdown">
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
                <Link to="/join">
                  <button className="button1" id="button11">
                    Join
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="cardstractor">
        <MachineCard selectedDistrict={selectedDistrict} />
      </div>
    </div>
  );
}

export default Harvestor;
