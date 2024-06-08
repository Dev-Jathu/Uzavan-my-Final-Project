import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import "./Tractorhire.css";
import images from "../../../Assets/uzavan17.1.jpg";
import NavbarForCard from "../navbarforcard/navbarforcard";
import FooterForCard from "../navbarforcard/footerforcard";

const Hire = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const [OwnerName, setOwnerName] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [AcreCount, setAcreCount] = useState("");
  const [Message, setMessage] = useState("");
  const [FarmerId, setFarmerId] = useState("");
  const [createDate, setcreateDate] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:3003/profile/serviceView/${id}`);
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
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setFarmerId(decodedToken.id);
        setName(decodedToken.Name);
      } catch (error) {
        console.error("Failed to decode token", error);
      }
    } else {
      navigate("/signin");
    }

    // Fetch owner name
    async function fetchOwnerName() {
      try {
        if (!id) {
          console.error("MachineryId is undefined");
          return;
        }
        const response = await fetch(`http://localhost:3003/booking/${id}/owner`);
        if (!response.ok) {
          throw new Error("Failed to fetch owner name");
        }
        const data = await response.json();
        setOwnerName(data.Name);
      } catch (error) {
        console.error("Failed to fetch owner name", error);
      }
    }
    fetchOwnerName();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = {
      Name,
      OwnerName,
      Address,
      District,
      PhoneNumber,
      AcreCount,
      Message,
      MachineryId: id, // Corrected here
      FarmerId,
      createDate
    };

    try {
      const response = await fetch("http://localhost:3003/Booking/BookMachine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Server responded with status: " + response.status);
      }
      const result = await response.json();
      setAddress("");
      setDistrict("");
      setPhoneNumber("");
      setAcreCount("");
      setMessage("");
      setcreateDate("")

      alert("Booking successful!");
      navigate("/Farmerpage"); // Navigate to a success page or back to the home page
    } catch (error) {
      console.error("Failed to register", error);
      alert("Booking failed!");
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
      <NavbarForCard /><br/><br/><br/><br/>
      <div className="car-listing">
        <div className="car-images">
          <div id="machinedetails">
          <img src={user.ImageURL || images} alt="Machinery" className="main-image" />
          <div className="car-details">
            <h3>Machinery Details:</h3>
            <div id="hireDetails">
              <p id="hireName"><strong>Name:</strong> {user.Name}</p>
              <p id="hireAddress"><strong>Address:</strong> {user.Address}</p>
              <p id="hireDistrict"><strong>District:</strong> {user.District}</p>
              <p id="hireRate"><strong>Rate:</strong> {user.Rate}</p>
              <p className="card-text" id="hireCardText">{user.TelYourService}</p>
            </div>
            <p className="card-text" id="thankPage">
              <small className="text-body-secondary" id="hireThanks">I will give you a great service. Thank you.</small>
            </p>
          </div>
          </div>
        </div>
        <div className="request-info">
          {/* <h2>Request Information</h2> */}

            

          <form onSubmit={handleSubmit}>
            <div className="booking-form">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="bookingform"
                value={Name}
                disabled
                required
              />
              <input
                type="text"
                id="ownerName"
                placeholder="Owner Name"
                className="bookingform"
                value={OwnerName}
                disabled
                required
              />
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="bookingform"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <select
                id="district"
                className="bookingform"
                value={District}
                onChange={(e) => setDistrict(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  Choose Your District
                </option>
                <option value="Vavuniya">Vavuniya</option>
                <option value="Mullaitivu">Mullaitivu</option>
                <option value="Kilinochchi">Kilinochchi</option>
                <option value="Jaffna">Jaffna</option>
                <option value="Mannar">Mannar</option>
              </select>
              <input
                type="number"
                id="phoneNumber"
                placeholder="Phone Number"
                className="bookingform"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <input
                type="number"
                id="acreCount"
                placeholder="Acre Count"
                className="bookingform"
                value={AcreCount}
                onChange={(e) => setAcreCount(e.target.value)}
                required
              />
              <input
                type="date"
                id="createDate"
                className="bookingform"
                value={createDate}
                onChange={(e) => setcreateDate(e.target.value)}
                required
              />
              <textarea
                className="bookingform"
                id="details"
                placeholder="Enter additional details..."
                value={Message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
              <p style={{ visibility: 'hidden' }}>Machinery ID: {id}</p>
              <p style={{ visibility: 'hidden' }}>Farmer ID: {FarmerId}</p>
              <div className="submitbtn">
                <button id="submitBtn">Book Now</button>
              </div>
            </div>
          </form>
        </div>
        <div className="testimonial-section">
          <div className="testimonial-card theme1">
            <div className="testimonial-content">
              <div className="quote-icon">“</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div className="client-info">
                <div className="client-avatar"></div>
                <div className="client-details">
                  <p className="client-name">Client Name</p>
                  <p className="client-designation">Client Designation</p>
                </div>
              </div>
            </div>
            <div className="client-rating">
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star filled">★</span>
              <span className="star">★</span>
            </div>
          </div>
        </div>
      </div>
      <FooterForCard />
    </div>
  );
}

export default Hire;
