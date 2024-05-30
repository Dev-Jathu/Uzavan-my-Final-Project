


import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import images from "../../../Assets/now1.png";
import logo from "../../../Assets/name.png";
import "./Tractorhire.css";

function Hire() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://uzhavan-server.onrender.com/profile/serviceView/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setError("Failed to fetch user. Please try again later.");
      }
    };

    fetchUser();
  }, [id]);

  const handleHireButtonClick = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/signin"); // Redirect to sign-in page if no token
    } else {
      history.push("/Booking"); // Redirect to booking page if token exists
    }
  };

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="card mb-3" id="hirecard">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={user.ImageURL} 
              className="img-fluid rounded-start"
              id="hireimg"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title" id="hirecardtitle">
                Machinery Details
              </h5>
              <p id="Hirename">
                Name &nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp; {user.Name}
              </p>
              <p id="Hirename">
                Address : &nbsp;&nbsp;&nbsp;&nbsp;{user.Address}
              </p>
              <p id="Hirename">
                District &nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;
                {user.District}
              </p>
              <p className="card-text" id="hirecardtex">
                {user.TelYourService}
              </p>
              <p className="card-text">
                <small className="text-body-secondary" id="hirethanks">
                  I will give you a Great service. Thank You.
                </small>
              </p>
              <div className="hire2buttons">
                <button id="hirecardbutton" onClick={handleHireButtonClick}>
                  Hire
                </button>
                <button id="connectbutton">Let's Connect</button>
              </div>
              <img src={logo} id="hirelogo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hire;
