import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
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
  const [createDate, setCreateDate] = useState("");
  const [reviews, setReviews] = useState([]);
  const [vehicleType, setVehicleType] = useState("");
  const [isFinished, setIsFinished] = useState(false); // Add isFinished state


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `https://uzavan-my-final-project-1-server.onrender.com/profile/serviceView/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data);
        setOwnerName(data.Name); // Set owner name from user data
        setVehicleType(data.vehicleType); // Set vehicle type from user data
      } catch (error) {
        console.error("Failed to fetch user:", error);
        setError("Failed to fetch user. Please try again later.");
      }
    };

    fetchUser();
  }, [id]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          "https://uzavan-my-final-project-1-server.onrender.com/Review/reviews"
        );
        setReviews(response.data);
      } catch (error) {
        console.error("There was an error fetching the reviews:", error);
      }
    };

    fetchReviews();
  }, []);

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
  }, [navigate]);

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
      MachineryId: id,
      FarmerId,
      createDate,
      vehicleType,
      isFinished // Include isFinished in the booking data

    };

    try {
      const response = await fetch(
        "https://uzavan-my-final-project-1-server.onrender.com/Booking/BookMachine",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userdata),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to register. Server responded with status: " + response.status
        );
      }
      const result = await response.json();
      setAddress("");
      setDistrict("");
      setPhoneNumber("");
      setAcreCount("");
      setMessage("");
      setCreateDate("");

      alert("Booking successful!");
      navigate("/Farmerpage");
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
      <NavbarForCard />
      <br />
      <br />
      <br />
      <br />
      <div className="car-listing">
        <div className="car-images">
          <div id="machinedetails">
            <img
              src={user.ImageURL || images}
              alt="Machinery"
              className="main-image"
            />
            <div className="car-details">
              <h3>Machinery Details:</h3>
              <div id="hireDetails">
                <p id="hireName">
                  <strong>Name:</strong> {user.Name}
                </p>
                <p id="hireAddress">
                  <strong>Address:</strong> {user.Address}
                </p>
                <p id="hireDistrict">
                  <strong>District:</strong> {user.District}
                </p>
                <p id="hireRate">
                  <strong>Rate:</strong> {user.Rate}
                </p>
                <p className="card-text" id="hireCardText">
                  {user.TelYourService}
                </p>
                {user.vehicleType}
              </div>
              <p className="card-text" id="thankPage">
                <small className="text-body-secondary" id="hireThanks">
                  I will give you a great service. Thank you.
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="request-info">
          <form onSubmit={handleSubmit}>
            <div className="booking-form">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="bookingform"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                disabled
                required
              />
              <input
                type="text"
                id="ownerName"
                placeholder="Owner Name"
                className="bookingform"
                value={OwnerName}
                onChange={(e) => setOwnerName(e.target.value)}
                disabled
                required
              />
              <input
                type="text"
                id="vehicleType"
                placeholder="Vehicle Type"
                className="bookingform"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
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
                onChange={(e) => setCreateDate(e.target.value)}
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
              <p style={{ visibility: "hidden" }}>Machinery ID: {id}</p>
              <p style={{ visibility: "hidden" }}>Farmer ID: {FarmerId}</p>
              <div className="submitbtn">
                <button id="submitBtn">Book Now</button>
              </div>
            </div>
          </form>
        </div>
        <div className="testimonial-section">
          {reviews
            .filter((review) => review.ownerName === user?.Name)
            .map((review) => (
              <div key={review._id} className="testimonial-card theme1">
                <div className="testimonial-content">
                  <p className="reviecommentout">{review.comment}</p>
                  <div className="client-info">
                    <div className="client-avatar">
                      <i className="fa-solid fa-user" id="userreview"></i>
                    </div>
                    <div className="client-details">
                      <p className="client-name">{review.name}</p>
                      <div className="client-rating">
                        <div className="arrangestarr">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              id="startedit"
                              key={star}
                              className={
                                star <= review.rating ? "star filled" : "star"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <FooterForCard />
    </div>
  );
};

export default Hire;