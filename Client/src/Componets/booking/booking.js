// import "./booking.css";

// import React, { useState, useEffect } from "react";

// export default function Booking() {
//   const [Name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [District, setDistrict] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [AcreCount, setAcreCount] = useState("");
//   const [Message, setMessage] = useState("");
//   const [MachineryId, setMachineryId] = useState("");
//   const [FarmerId, setFarmerId] = useState("");

//   // Define functions to fetch MachineryId and FarmerId
//   const fetchMachineryId = async () => {
//     try {
//       const response = await fetch("uzavan.vercel.app/profile/serviceView");
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
//       const response = await fetch("uzavan.vercel.app/farmer/farmerView");
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
//       const response = await fetch(
//         "uzavan.vercel.app/Booking/BookMachine",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userdata),
//         }
//       );

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
//         <div class="booking-form">
//           <input
//             type="text"
//             id="name"
//             placeholder="Name"
//             className="bookingform"
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
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
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <input type="hidden" value={MachineryId} />
//           <input type="hidden" value={FarmerId} />
//           <button id="submitBtn">Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// }

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
//       const response = await fetch("uzavan.vercel.app/profile/serviceView");
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
//       const response = await fetch("uzavan.vercel.app/farmer/farmerView");
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
//       const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
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


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./booking.css";

// export default function Booking() {
//   const { id } = useParams(); // Get machinery ID from URL parameters
//   const [Name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [District, setDistrict] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [AcreCount, setAcreCount] = useState("");
//   const [Message, setMessage] = useState("");
//   const [MachineryId, setMachineryId] = useState(id);
//   const [FarmerId, setFarmerId] = useState("");

//   useEffect(() => {
//     const fetchFarmerId = async () => {
//       try {
//         const response = await fetch("uzavan.vercel.app/farmer/farmerView");
//         if (!response.ok) {
//           throw new Error("Failed to fetch FarmerId");
//         }
//         const data = await response.json();
//         setFarmerId(data.id); // Assuming the ID is available in the response data
//       } catch (error) {
//         console.error("Failed to fetch FarmerId", error);
//       }
//     };

//     fetchFarmerId();
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
//       const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to register. Server responded with status: " + response.status);
//       }
//       const result = await response.json();
//       setName("");
//       setAddress("");
//       setDistrict("");
//       setPhoneNumber("");
//       setAcreCount("");
//       setMessage("");

//       console.log(result);
//       alert("Booking successful!");
//     } catch (error) {
//       console.error("Failed to register", error);
//       alert("Booking failed!");
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
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
//             onChange={(e) => setDistrict(e.target.value)}
//             required
//           >
//             <option value="" disabled selected hidden>
//               Choose Your District
//             </option>
//             <option value="Vavuniya">Vavuniya</option>
//             <option value="Mullaitivu">Mullaitivu</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Jaffna">Jaffna</option>
//             <option value="Mannar">Mannar</option>
//           </select>
//           <input
//             type="number"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             className="bookingform"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <input type="hidden" value={MachineryId} />
//           <input type="hidden" value={FarmerId} />
//           <button id="submitBtn">Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./booking.css";

// export default function Booking() {
//   const { id } = useParams(); // Get machinery ID from URL parameters
//   const [Name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [District, setDistrict] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [AcreCount, setAcreCount] = useState("");
//   const [Message, setMessage] = useState("");
//   const [MachineryId, setMachineryId] = useState(id);
//   const [FarmerId, setFarmerId] = useState("");

//   useEffect(() => {
//     const fetchFarmerId = async () => {
//       try {
//         const response = await fetch("uzavan.vercel.app/farmer/farmerView");
//         if (!response.ok) {
//           throw new Error("Failed to fetch FarmerId");
//         }
//         const data = await response.json();
//         setFarmerId(data.id); // Assuming the ID is available in the response data
//       } catch (error) {
//         console.error("Failed to fetch FarmerId", error);
//       }
//     };

//     fetchFarmerId();
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
//       const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to register. Server responded with status: " + response.status);
//       }
//       const result = await response.json();
//       setName("");
//       setAddress("");
//       setDistrict("");
//       setPhoneNumber("");
//       setAcreCount("");
//       setMessage("");

//       console.log(result);
//       alert("Booking successful!");
//     } catch (error) {
//       console.error("Failed to register", error);
//       alert("Booking failed!");
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
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
//             onChange={(e) => setDistrict(e.target.value)}
//             required
//           >
//             <option value="" disabled selected hidden>
//               Choose Your District
//             </option>
//             <option value="Vavuniya">Vavuniya</option>
//             <option value="Mullaitivu">Mullaitivu</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Jaffna">Jaffna</option>
//             <option value="Mannar">Mannar</option>
//           </select>
//           <input
//             type="number"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             className="bookingform"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <p>Machinery ID: {MachineryId}</p>
//           <p>Farmer ID: {FarmerId}</p>
//           <button id="submitBtn">Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// }

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
        const response = await fetch(`uzavan.vercel.app/booking/${id}/owner`);
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
    };

    try {
      const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
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

      alert("Booking successful!");
      navigate("/success"); // Navigate to a success page or back to the home page
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



// import React, { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

// function BookingForm() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { id, ownerName } = location.state || {};

//   const [formData, setFormData] = useState({
//     MachineryId: id || "",
//     FarmerId: "",
//     Name: ownerName || "",
//     Address: "",
//     District: "",
//     PhoneNumber: "",
//     AcreCount: "",
//     Message: "",
//   });

//   useEffect(() => {
//     if (!ownerName && id) {
//       const fetchUser = async () => {
//         try {
//           const response = await fetch(`uzavan.vercel.app/booking/${id}/owner`);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data = await response.json();
//           setFormData((prevData) => ({
//             ...prevData,
//             Name: data.Name,
//           }));
//         } catch (error) {
//           console.error("Failed to fetch user:", error);
//         }
//       };

//       fetchUser();
//     }
//   }, [id, ownerName]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     if (!token) {
//       navigate("/signin");
//     } else {
//       try {
//         const response = await fetch("uzavan.vercel.app/booking", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify(formData),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         navigate("/BookingConfirmation");
//       } catch (error) {
//         console.error("Failed to create booking:", error);
//       }
//     }
//   };

//   return (
//     <div className="booking-form">
//       <h2>Booking Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Name:</label>
//           <input
//             type="text"
//             name="Name"
//             value={formData.Name}
//             onChange={handleChange}
//             readOnly
//           />
//         </div>
//         {/* Add other form fields */}
//         <button type="submit">Submit Booking</button>
//       </form>
//     </div>
//   );
// }

// export default BookingForm;




// import React, { useState, useEffect } from "react";
// import { useParams, useLocation } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";
// import "./booking.css";

// export default function Booking() {
//   const { id } = useParams();
//   const location = useLocation();
//   const [name, setName] = useState("");
//   const [address, setAddress] = useState("");
//   const [district, setDistrict] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [acreCount, setAcreCount] = useState("");
//   const [message, setMessage] = useState("");
//   const [machineryId, setMachineryId] = useState(id);
//   const [farmerId, setFarmerId] = useState("");
//   const [Name, setOwnerName] = useState(location.state?.ownerName || ""); 

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decodedToken = jwtDecode(token);
//         const farmerId = decodedToken?.id;
//         const farmerName = decodedToken?.name;
//         setFarmerId(farmerId);
//         setName(farmerName);
//       } catch (error) {
//         console.error("Failed to decode token", error);
//       }
//     } else {
//       console.error("No token found");
//     }
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const userdata = {
//       name,
//       address,
//       district,
//       phoneNumber,
//       acreCount,
//       message,
//       machineryId,
//       farmerId,
//       Name,
//     };

//     try {
//       const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to register. Server responded with status: " + response.status);
//       }
//       const result = await response.json();
//       setAddress("");
//       setDistrict("");
//       setPhoneNumber("");
//       setAcreCount("");
//       setMessage("");

//       console.log(result);
//       alert("Booking successful!");
//     } catch (error) {
//       console.error("Failed to register", error);
//       alert("Booking failed!");
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
//             value={name}
//             disabled
//             required
//           />
//           <input
//             type="text"
//             id="ownerName"
//             placeholder="Owner's Name"
//             className="bookingform"
//             value={Name}
//             disabled
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
//             value={district}
//             onChange={(e) => setDistrict(e.target.value)}
//             required
//           >
//             <option value="" disabled hidden>Choose Your District</option>
//             <option value="Vavuniya">Vavuniya</option>
//             <option value="Mullaitivu">Mullaitivu</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Jaffna">Jaffna</option>
//             <option value="Mannar">Mannar</option>
//           </select>
//           <input
//             type="number"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             className="bookingform"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             value={acreCount}
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <p style={{ visibility: 'hidden' }}>Machinery ID: {machineryId}</p>
//           <p style={{ visibility: 'hidden' }}>Farmer ID: {farmerId}</p>
//           <div className="submitbtn">
//             <button id="submitBtn">Book Now</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }





// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./booking.css";

// export default function Booking() {
//   const { id } = useParams(); // Get machinery ID from URL parameters
//   const [Name, setName] = useState("");
//   const [Address, setAddress] = useState("");
//   const [District, setDistrict] = useState("");
//   const [PhoneNumber, setPhoneNumber] = useState("");
//   const [AcreCount, setAcreCount] = useState("");
//   const [Message, setMessage] = useState("");
//   const [MachineryId, setMachineryId] = useState(id);
//   const [FarmerId, setFarmerId] = useState("");

//   // Function to fetch Farmer ID
//   const fetchFarmerId = async () => {
//     try {
//       const response = await fetch("uzavan.vercel.app/farmer/farmerView"); // Ensure this endpoint returns the correct farmer data
//       if (!response.ok) {
//         throw new Error("Failed to fetch FarmerId");
//       }
//       const data = await response.json();
//       console.log("Fetched Farmer Data:", data); // Debug log
//       setFarmerId(data._id); // Assuming the ID is available in the response data
//     } catch (error) {
//       console.error("Failed to fetch FarmerId", error);
//     }
//   };

//   useEffect(() => {
//     // Fetch Farmer ID
//     fetchFarmerId();
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
//       const response = await fetch("uzavan.vercel.app/Booking/BookMachine", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userdata),
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error("Failed to register. Server responded with status: " + response.status + " and message: " + errorData.error);
//       }
//       const result = await response.json();
//       setName("");
//       setAddress("");
//       setDistrict("");
//       setPhoneNumber("");
//       setAcreCount("");
//       setMessage("");

//       console.log(result);
//       alert("Booking successful!");
//     } catch (error) {
//       console.error("Failed to register", error);
//       alert("Booking failed! " + error.message);
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
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//           <input
//             type="text"
//             id="address"
//             placeholder="Address"
//             className="bookingform"
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//           <select
//             id="district"
//             className="bookingform"
//             onChange={(e) => setDistrict(e.target.value)}
//             required
//           >
//             <option value="" disabled selected hidden>
//               Choose Your District
//             </option>
//             <option value="Vavuniya">Vavuniya</option>
//             <option value="Mullaitivu">Mullaitivu</option>
//             <option value="Kilinochchi">Kilinochchi</option>
//             <option value="Jaffna">Jaffna</option>
//             <option value="Mannar">Mannar</option>
//           </select>
//           <input
//             type="number"
//             id="phoneNumber"
//             placeholder="Phone Number"
//             className="bookingform"
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             required
//           />
//           <input
//             type="number"
//             id="acreCount"
//             placeholder="Acre Count"
//             className="bookingform"
//             onChange={(e) => setAcreCount(e.target.value)}
//             required
//           />
//           <textarea
//             className="bookingform"
//             id="details"
//             placeholder="Enter additional details..."
//             onChange={(e) => setMessage(e.target.value)}
//             required
//           ></textarea>
//           <p>Machinery ID: {MachineryId}</p>
//           <p>Farmer ID: {FarmerId || "Loading..."}</p>
//           <button id="submitBtn">Book Now</button>
//         </div>
//       </form>
//     </div>
//   );
// }
