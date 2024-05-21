import "./booking.css";

import React from "react";
import { useState } from "react";

export default function Booking() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [AcreCount, setAcreCount] = useState("");
  const [Message, setMessage] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = {
      Name,
      Address,
      District,
      PhoneNumber,
      AcreCount,
      Message,
    };
    try {
      const response = await fetch(
        "http://localhost:3003/Booking/BookMachine",
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
      setName("");
      setAddress("");
      setDistrict("");
      setPhoneNumber("");
      setAcreCount("");
      setMessage("");

      console.log(result);

      alert("Registration successful!");
    } catch (error) {
      console.error("Failed to register", error);
      alert("Registration failed!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="booking-form">
          <input
            type="text"
            id="name"
            placeholder="Name"
            className="bookingform"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="bookingform"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <select id="district" className="bookingform"
            onChange={(e) => setDistrict(e.target.value)}
            required

          >
            <option value="" disabled selected hidden>
              Choose Your District
            </option>
            <option value="Vavuniya">Vavuniya</option>
            <option value="Mullaitivu">Jaffna</option>
            <option value="Kilinochchi">Kilinochchi</option>
            <option value="Jaffna">Mannar</option>
            <option value="Mannar">Mullaitivu</option>
          </select>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Phone Number"
            className="bookingform"
            onChange={(e) => setPhoneNumber(e.target.value)}
            required


          />
          <input
            type="number"
            id="acreCount"
            placeholder="Acre Count"
            className="bookingform"
            onChange={(e) => setAcreCount(e.target.value)}
            required


          />
          <textarea
            className="bookingform"
            id="details"
            placeholder="Enter additional details..."
            onChange={(e) => setMessage(e.target.value)}
            required


          ></textarea>
          <button id="submitBtn">Book Now</button>
        </div>
      </form>
    </div>
  );
}
