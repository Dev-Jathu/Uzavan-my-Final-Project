


import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Tractorhire.css";
import Navbarforcard from "../navbarforcard/navbarforcard";
import Footerforcard from "../navbarforcard/footerforcard";

function Hire() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://uzavan-server.onrender.com/profile/serviceView/${id}`);
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbarforcard />
      <div className="card mb-3" id="hirecard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={user.ImageURL} id="hireimg" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body" id="cardbody">
              <h5 className="card-title" id="hirecardtitle">Machinery Details</h5>
              <div id="hiredeatails">
                <p id="Hirename">Name: {user.Name}</p>
                <p id="Hirename">Address: {user.Address}</p>
                <p id="Hirename">District: {user.District}</p>
                <p id="Hirename">Rate: {user.Rate}</p>
                <p className="card-text" id="hirecardtex">{user.TelYourService}</p>
              </div>
              <p className="card-text" id="thankpage">
                <small className="text-body-secondary" id="hirethanks">I will give you a Great service. Thank You.</small>
              </p>
              <div className="hire2buttons">
                <Link to={`/Booking/${id}`}>
                  <button id="hirecardbutton">Hire</button>
                </Link>
                <button id="connectbutton">Let's Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerforcard />
    </div>
  );
}

export default Hire;
