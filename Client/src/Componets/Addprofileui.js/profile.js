import "./profile.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {jwtDecode} from "jwt-decode";

function Profile() {
  const [MachineryId, setUserId] = useState("");
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [District, setDistrict] = useState("");
  const [Rate, setRate] = useState("");
  const [TelYourService, setTelYourService] = useState("");
  const [ImageURL, setImageURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        if (decodedToken.id) {
          setUserId(decodedToken.id);
        }
        if (decodedToken.Name) {
          setName(decodedToken.Name);
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/signin"); // Redirect to login if token is invalid
      }
    } else {
      navigate("/signin"); // Redirect to login if token is not present
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Name', Name);
    formData.append('MachineryId', MachineryId);
    formData.append('Address', Address);
    formData.append('PhoneNumber', PhoneNumber);
    formData.append('vehicleType', vehicleType);
    formData.append('District', District);
    formData.append('Rate', Rate);
    formData.append('TelYourService', TelYourService);
    formData.append('ImageURL', ImageURL);

    // Your fetch logic

        fetch("https://uzavan-server.onrender.com/profile/createService", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((result) => {
        alert("Your service is added successfully. Waiting for verification process!");
        console.log(result);
        setUserId("");
        // setName("");
        setAddress("");
        setPhoneNumber("");
        setVehicleType("");
        setDistrict("");
        setRate("");
        setTelYourService("");
        setImageURL(null);
      })
      .catch((error) => {
        alert(error.message);
        console.error("There was an error!", error);
      });
  };

  const handleImageUpload = (e) => {
    setImageURL(e.target.files[0]);
  };

  const [product, setProduct] = useState({
    name: "Uzhavan",
    price: 10,
    productBy: "uki",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("https:///payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response:", response);
        const { status } = response;
        console.log("Status:", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="gridprofile">
        <div className="inputprofile">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="profilename"
              placeholder="User ID"
              value={MachineryId}
              disabled
              style={{visibility:'hidden'}}
              
            />
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              disabled

            />
            <br />
            <input
              type="text"
              className="profilename"
              placeholder="Address"
              value={Address}
              onChange={(e) => setAddress(e.target.value)}
             
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
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose your vehicle
              </option>
              <option value="Tractor">Tractor</option>
              <option value="paddyCropper">Paddy Cropper</option>
              <option value="TsunamiMachine">Tsunami Machine</option>
            </select>
            <br />
            <select
              className="profilename"
              value={District}
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="" disabled>
                Choose your district
              </option>
              <option value="Vavuniya">Vavuniya</option>
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
              <textarea
              maxLength={110}
              className="profilename2"
              placeholder="Tell About You"
              value={TelYourService}
              onChange={(e) => setTelYourService(e.target.value)}
              required
            ></textarea>
            {/* Other input fields */}
            <div className="buttonprofile">
              {/* <StripeCheckout
                stripeKey="pk_test_51PILqiEp6JPeXInZqhhfIvvARFG3Owf3rj0Yfqhr70quScmmN5ZwA32vhL2cKISNhN3HJP1nSmFYFKRgaZ8Y7J4u00UNIaRsNC"
                token={makePayment}
                name="Buy "
                amount={product.price * 100}
                currency = 'LKR'
              > */}
                <button className="profadd" id="dash">Add Service</button>
              {/* </StripeCheckout> */}
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
                onChange={handleImageUpload}
              />
            </label>
            <img
              src={ImageURL ? URL.createObjectURL(ImageURL) : "#"}
              alt="Uploaded"
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