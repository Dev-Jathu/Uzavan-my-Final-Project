import "./Signup.css";
import React, { useState } from "react";
import Photo from "../../../Assets/loginpage.jpg";
import Button from "../../../Componets/Button/Button";
// import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [Name, setName] = useState("");
  const [NIC, setNIC] = useState("");
  const [TelNo, setTelNo] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const navigate = useNavigate();
  const notify = () => {
    toast.success("Your data saved successfully");
  };

  const errorNotify = () => {
    toast.error("Failed to save data");
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const userdata = { Name, NIC, TelNo, Email, Password };
  //   // try {
  //     const response = await fetch("http://localhost:3003/farmer/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userdata),
  //     }).then(
  //       console.log('shadklhsakjd'),
  //       alert("your daanujnjncslm")
  //       // notify() // Notify on successful registration
  //     )
  //     .catch(error => console.error("failed to saved",error))
  //     // if (!response) {
  //     //   console.log("failed to save data");
  //     // }
  //     // errorNotify();
  //   // } catch (error) {
  //   //   console.log("Error:", error);
  //   //   errorNotify();
  //   // }
  // };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userdata = { Name, NIC, TelNo, Email, Password };
    try {
      const response = await fetch("http://localhost:3003/farmer/register", {
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
      console.log(result);
      
      alert("Registration successful da venna!");
    } catch (error) {
      console.error("Failed to register", error); // Changed the error message here
      alert("Registration failed da venna!"); // Adjusted the alert message here
    }
  };
  
  
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="Signup">
        <div className="subsign">
          <div className="Signphot">
            <img src={Photo} className="signpic" />
          </div>
          <div className="signform">
            <h5 className="signlogofarmer">Welcome to Farmers</h5>
            <span1> Please enter your details.</span1>

            <form onSubmit={handleSubmit}>
              <label className="Name">Full Name</label>
              <br />
              <input
                type="text"
                className="inputName"
                placeholder="Enter your Full Name"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <br></br>

              <label className="nic">NIC Number</label>
              <br />
              <input
                type="text"
                className="inputName"
                placeholder="Your Nic Number"
                required
                onChange={(e) => setNIC(e.target.value)}
              />
              <br></br>
              <label className="phone">Phone Number</label>
              <br />
              <input
                type="number"
                className="inputName"
                placeholder="Your Phone Number"
                required
                onChange={(e) => setTelNo(e.target.value)}
              />
              <br></br>
              <label className="emaill">Email</label>
              <br />

              <input
                type="email"
                className="inputName"
                placeholder="Enter your Email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <label className="passwordd">Password</label>
              <br />

              <input
                type="password"
                className="inputName"
                placeholder="Create password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>
              <label className="passworddd">Confirm Password</label>
              <br />
              <input
                type="text"
                className="inputName"
                placeholder="Create password"
                required
              />
              <Button class="signup" name="Signup" />
            </form>
            <h6 className="signinling">
              Already have an account?
              <a href="/Signin" className="signinlink">
                Sign in!
              </a>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
