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

import "./profile.css";
import React, { useState } from "react";
// import Navbarforcard from '../card/navbarforcard/navbarforcard'


function Profile() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [District, setDistrict] = useState("");
  const [Rate, setRate] = useState("");
  const [TelYourService, setTelYourService] = useState("");
  const [ImageURL, setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const ProductData = {
      Name,
      Address,
      PhoneNumber,
      vehicleType,
      District,
      Rate,
      TelYourService,
      ImageURL,
    };
    console.log(ProductData);

    fetch("http://localhost:3003/profile/createService", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ProductData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        alert(
          "Your service is added Successfully. Waiting for verification process!"
        );
        console.log(result);
        setName("");
        setAddress("");
        setPhoneNumber("");
        setVehicleType("");
        setDistrict("");
        setRate("");
        setTelYourService("");
        setImageURL("");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  // const handleImageUpload = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onload = function (event) {
  //     const uploadedImage = event.target.result;
  //     const imageElement = document.querySelector(".uploaded-image");
  //     if (imageElement) {
  //       imageElement.src = uploadedImage;
  //     }
  //   };
  //   reader.readAsDataURL(file);
  // };

  // function handleImageUpload(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       const uploadedImage = document.getElementById('uploaded-image');
  //       uploadedImage.src = e.target.result;

  //       const fileUploadContainer = document.getElementById('file-upload-container');
  //       fileUploadContainer.classList.add('uploaded');
  //     }
  //     reader.readAsDataURL(file);
  //   }
  // }

  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const uploadedImage = document.getElementById("uploaded-image");
        uploadedImage.src = e.target.result;

        const fileUploadContainer = document.getElementById(
          "file-upload-container"
        );
        fileUploadContainer.classList.add("uploaded");
      };
      reader.readAsDataURL(file);
    }
  }

  function triggerFileUpload() {
    const fileUploadInput = document.getElementById("file-upload");
    fileUploadInput.click();
  }

  return (
    <div>
      {/* <Navbarforcard/> */}
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
              orm
              action="/upload"
              method="post"
              enctype="multipart/form-data"
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
            maxLength={110}
              className="profilename2"
              placeholder="Tell About You"
              value={TelYourService}
              onChange={(e) => setTelYourService(e.target.value)}
              required
            ></textarea>
            <div className="buttonprofile">
              <button className="profadd">Add Service</button>
            </div>
          </form>
        </div>
        <div className="boxright">
          <div className="file-upload-container" id="file-upload-container">
            <label htmlFor="file-upload" className="file-upload-label">
              <span className="upload-icon"> + </span>
              <input
                id="file-upload"
                type="file"
                className="profilename1"
                //   onChange={handleImageUpload}
                // onChange={(e) => setImageURL(e.target.value)}
                onChange={(e) => {
                  handleImageUpload(e); // Pass the event object to handleImageUpload
                  setImageURL(e.target.value);
                }}
              />
            </label>
            <img
              src="#"
              alt="Uploaded Image"
              className="uploaded-image"
              id="uploaded-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
