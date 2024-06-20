import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // corrected import
import "./booking.css";

export default function Booking() {
  const { id } = useParams();
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
        const response = await fetch(`https://uzavan-my-final-project-1-server.onrender.com/${id}/owner`);
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
      const response = await fetch("https://uzavan-my-final-project-1-server.onrender.com/Booking/BookMachine", {
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

  return (
    <div>
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
            id="createDate" // Corrected id to match the purpose
            className="bookingform"
            value={createDate}
            onChange={(e) => setcreateDate(e.target.value)} // Corrected state updater
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
  );
}





