import "./booking.css";

import React, { useState, useEffect } from "react";

export default function Booking() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [District, setDistrict] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [AcreCount, setAcreCount] = useState("");
  const [Message, setMessage] = useState("");
  const [MachineryId, setMachineryId] = useState("");
  const [FarmerId, setFarmerId] = useState("");

  // Define functions to fetch MachineryId and FarmerId
  const fetchMachineryId = async () => {
    try {
      const response = await fetch("http://localhost:3003/profile/serviceView");
      if (!response.ok) {
        throw new Error("Failed to fetch MachineryId");
      }
      const data = await response.json();
      return data.id; // Assuming the ID is available in the response data
    } catch (error) {
      console.error("Failed to fetch MachineryId", error);
      return null;
    }
  };

  const fetchFarmerId = async () => {
    try {
      const response = await fetch("http://localhost:3003/farmer/farmerView");
      if (!response.ok) {
        throw new Error("Failed to fetch FarmerId");
      }
      const data = await response.json();
      return data.id; // Assuming the ID is available in the response data
    } catch (error) {
      console.error("Failed to fetch FarmerId", error);
      return null;
    }
  };

  useEffect(() => {
    // Fetch and set MachineryId and FarmerId here
    fetchMachineryId().then((id) => setMachineryId(id));
    fetchFarmerId().then((id) => setFarmerId(id));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = {
      Name,
      Address,
      District,
      PhoneNumber,
      AcreCount,
      Message,
      MachineryId,
      FarmerId,
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
          <select
            id="district"
            className="bookingform"
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
          <input type="hidden" value={MachineryId} />
          <input type="hidden" value={FarmerId} />
          <button id="submitBtn">Book Now</button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState, useEffect } from "react";

// export default function Booking() {
//   const [Name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [District, setDistrict] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [AcreCount, setAcreCount] = useState("");
//   const [Message, setMessage] = useState("");

//   // Add MachineryId and FarmerId to state
//   const [MachineryId, setMachineryId] = useState(""); // assuming you get this ID from somewhere
//   const [FarmerId, setFarmerId] = useState(""); // assuming you get this ID from somewhere

//   // Define functions to fetch MachineryId and FarmerId
//   const fetchMachineryId = async () => {
//     try {
//       const response = await fetch("http://localhost:3003/profile/serviceView");
//       if (!response.ok) {
//         throw new Error("Failed to fetch MachineryId");
//       }
//       const data = await response.json();
//       return data.id; // Assuming the ID is available in the response data
//     } catch (error) {
//       console.error("Failed to fetch MachineryId", error);
//       return null;
//     }
//   };

//   const fetchFarmerId = async () => {
//     try {
//       const response = await fetch("http://localhost:3003/farmer/farmerView");
//       if (!response.ok) {
//         throw new Error("Failed to fetch FarmerId");
//       }
//       const data = await response.json();
//       return data.id; // Assuming the ID is available in the response data
//     } catch (error) {
//       console.error("Failed to fetch FarmerId", error);
//       return null;
//     }
//   };

//   useEffect(() => {
//     // Fetch and set MachineryId and FarmerId here
//     fetchMachineryId().then((id) => setMachineryId(id));
//     fetchFarmerId().then((id) => setFarmerId(id));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userdata = {
//       Name,
//       Address,
//       District,
//       PhoneNumber,
//       AcreCount,
//       Message,
//       MachineryId,
//       FarmerId,
//     };
//     try {
//       const response = await fetch("http://localhost:3003/Booking/BookMachine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       });

//       if (!response.ok) {
//         throw new Error(
//           "Failed to register. Server responded with status: " + response.status
//         );
//       }
//       const result = await response.json();
//       setName("");
//       setAddress("");
//       setDistrict("");
//       setPhoneNumber("");
//       setAcreCount("");
//       setMessage("");
//       console.log(result);
//       alert("Registration successful!");
//     } catch (error) {
//       console.error("Failed to register", error);
//       alert("Registration failed!");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="booking-form">
//           <input
//             type="text"
//             id="name"
//             placeholder="Name"
//             className="bookingform"
//             value={Name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             value={Address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
//             value={District}
//             onChange={(e) => setDistrict(e.target.value)}
//             required
//           >
//             <option value="" disabled selected hidden>
//               Choose Your District
//             </option>
//             <option value="Vavuniya">Vavuniya</option>
//             <option value="Mullaitivu">Jaffna</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Jaffna">Mannar</option>
//             <option value="Mannar">Mullaitivu</option>
//           </select>
//           <input
//             type="number"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             className="bookingform"
//             value={PhoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             value={AcreCount}
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             value={Message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           {/* Add hidden inputs for MachineryId and FarmerId */}
//           <input type="hidden" value={MachineryId} />
//           <input type="hidden" value={FarmerId} />
//           <button id="submitBtn">Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// }
