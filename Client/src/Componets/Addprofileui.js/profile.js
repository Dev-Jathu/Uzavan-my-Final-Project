// import Button from "../Button/Button";
// import "./profile.css";
// import React from "react";
// import { useState } from "react";
// import axios from "axios";

// function Profile() {
//   const [Name, setName] = useState();
//   const [Address, setAddress] = useState();
//   const [rate, setrate] = useState();
//   const [VehileTypes, setVehileTypes] = useState();
//   const [About, setAbout] = useState();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const Productdata = { Name, Address, rate, VehileTypes, About };
//     console.log(Productdata);
//     axios
//       .post("http://localhost:3003/profile/createService", Productdata)
//       .then((result) => {
//         alert(
          
//           "your service is added Successfully.Waiting For Veryfication process!"
//         );
//       })
//       .catch((err) => alert(err));
//   };

//   return (
//     <div>
//       <div className="gridprofile">
//         <div className="inputprofile">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               className="profilename"
//               placeholder="Name"
//               onChange={(e) => setName(e.target.value)}
//               required

//             />
//             <br />
//             <input
//               type="text"
//               className="profilename"
//               placeholder="Address"
//               onChange={(e) => setAddress(e.target.value)}
//               required

//             />
//             <br />
//             <input
//               type="text"
//               className="profilename"
//               placeholder="Rate Acre"
//               required
//               onChange={(e) => setrate(e.target.value)}
//             />
//             <br />
//             <select
//               name="Choose your vehile"
//               className="profilename"
//               onChange={(e) => setVehileTypes(e.target.value)}
//               required

//             >
//               <option value="" disabled selected hidden>
//                 Choose your vehicle
//               </option>
//               <option value="Tractor">Tractor</option>
//               <option value="paddyCropper">Paddy cropper</option>
//               <option value="TsunamiMachine">Tsunami</option>
              
//             </select>
//             <br />
//             <input
//               type="file"
//               className="profilename1"
//               placeholder="upload your photo"
//             />
//             <textarea
//               className="profilename2"
//               placeholder="Tell About You"
//               onChange={(e) => setAbout(e.target.value)}
//               required

//             ></textarea>
//             <div className="buttonprofile">
//             <Button name="Add Profile" class="profadd"  />

//             </div>
//           </form>
//         </div>
//         <div className="boxright"></div>
//       </div>
//     </div>
//   );
// }
// export default Profile;


import Button from "../Button/Button";
import "./profile.css";
import React, { useState } from "react";

function Profile() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [District, setDistrict] = useState("");
  const [Rate, setRate] = useState("");
  const [TelYourService, setTelYourService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ProductData = {
      Name,
      Address,
      PhoneNumber,
      vehicleType,
      District,
      Rate,
      TelYourService
    };
    console.log(ProductData);

    fetch("http://localhost:3003/profile/createService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ProductData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(result => {
        alert("Your service is added Successfully. Waiting for verification process!");
        console.log(result)
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div>
      <div className="gridprofile">
        <div className="inputprofile">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="profilename"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <br />
            <input
              type="number"
              className="profilename"
              placeholder="Phone Number"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <br />
            <select
              className="profilename"
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Choose your vehicle
              </option>
              <option value="Tractor">Tractor</option>
              <option value="paddyCropper">Paddy cropper</option>
              <option value="TsunamiMachine">Tsunami</option>
            </select>
            <br />
            <select
              className="profilename"
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="" disabled selected hidden>
                Choose your district
              </option>
              <option value="Vavuniya">Vavunya</option>
              <option value="Mannar">Mannar</option>
              <option value="Jaffna">Jaffna</option>
              <option value="Mullaitivu">Mullaitivu</option>
              <option value="Kilinochchi">Kilinochchi</option>
            </select>
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Rate Acre"
              value={Rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
            <br />
            <textarea
              className="profilename2"
              placeholder="Tell About You"
              value={TelYourService}
              onChange={(e) => setTelYourService(e.target.value)}
              required
            ></textarea>
            <div className="buttonprofile">
              <Button name="Add Profile" className="profadd" />
            </div>
          </form>
        </div>
        <div className="boxright"></div>
      </div>
    </div>
  );
}

export default Profile;
