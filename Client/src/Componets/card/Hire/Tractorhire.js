// import React from "react";
// import images from '../../../Assets/now1.png'
// import logo from '../../../Assets/name.png'
// import './Tractorhire.css'
// import { Link } from "react-router-dom";

// function hire() {

//   return (
//     <div>
//       <div class="card mb-3"  id="hirecard">
//         <div class="row g-0">
//           <div class="col-md-4">
//             <img src={images} class="img-fluid rounded-start" id="hireimg" alt="..." />
//           </div>
//           <div class="col-md-8">
//             <div class="card-body">
//               <h5 class="card-title" id="hirecardtitle"> Machinery Details</h5>
//               <p id='Hirename'>Name</p>
//               <p id='Hirename'>Address</p>
//               <p id='Hirename'>District</p>

//               <p class="card-text" id="hirecardtex">
//                 This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer. This is a wider card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </p>
//               <p class="card-text">
//                 <small class="text-body-secondary" id="hirethanks">
//                   I will give you a Great service. Thank You.
//                 </small>
//               </p>
//               <div className="hire2buttons">
//               <button id="hirecardbutton">Hire</button>
//               <button id="connectbutton">Let's Connect</button>

//               </div>
//               <img src={logo} id="hirelogo"/>

//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default hire;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import images from "../../../Assets/uzavan17.1.jpg";
// import logo from "../../../Assets/name.png";
// import "./Tractorhire.css";
// import Navbarforcard from "../navbarforcard/navbarforcard";
// import Footerforcard from "../navbarforcard/footerforcard";
// import { Link } from "react-router-dom";

// function Hire() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3003/profile/serviceView/${id}`
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error("Failed to fetch user:", error);
//         setError("Failed to fetch user. Please try again later.");
//       }
//     };

//     fetchUser();
//   }, [id]);

//   if (error) {
//     return <p className="error-message">{error}</p>;
//   }

//   if (!user) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       <Navbarforcard />
//       <div className="card mb-3" id="hirecard">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img src={images} id="hireimg" alt="..." />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body" id="cardbody">
//               <h5 className="card-title" id="hirecardtitle">
//                 Machinery Details
//               </h5>
//               <div id="hiredeatails">
//                 <p id="Hirename">
//                   Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;{" "}
//                   {user.Name}
//                 </p>
//                 <p id="Hirename">
//                   Address &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;{user.Address}
//                 </p>
//                 <p id="Hirename">
//                   District
//                   &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   {user.District}
//                 </p>
//                 <p id="Hirename">
//                   Rate
//                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                   {user.Rate}
//                 </p>
//                 <p className="card-text" id="hirecardtex">
//                   {user.TelYourService}
//                 </p>
//               </div>

//               <p className="card-text" id="thankpage">
//                 <small className="text-body-secondary" id="hirethanks">
//                   I will give you a Great service. Thank You.
//                 </small>
//               </p>
//               <div className="hire2buttons">
//                 <Link to="/Booking">
//                   <button id="hirecardbutton">Hire</button>
//                 </Link>
//                 <button id="connectbutton">Let's Connect</button>
//                 {/* <button id="connectbutton">Let's Connect</button> */}
//               </div>
//               {/* <img src={logo} id="hirelogo" /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footerforcard />
//     </div>
//   );
// }

// export default Hire;


import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import images from "../../../Assets/uzavan17.1.jpg";
import logo from "../../../Assets/name.png";
import "./Tractorhire.css";
import Navbarforcard from "../navbarforcard/navbarforcard";
import Footerforcard from "../navbarforcard/footerforcard";
import { Link } from "react-router-dom";

function Hire() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Get navigate function from react-router-dom

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          `http://localhost:3003/profile/serviceView/${id}`
        );
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
    if (!token) {
      navigate("/signin"); // Redirect to sign-in page using navigate function
    }
  }, [navigate]);

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbarforcard />
      <div className="card mb-3" id="hirecard">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={images} id="hireimg" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body" id="cardbody">
              <h5 className="card-title" id="hirecardtitle">
                Machinery Details
              </h5>
              <div id="hiredeatails">
                <p id="Hirename">
                  Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;{" "}
                  {user.Name}
                </p>
                <p id="Hirename">
                  Address &nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;&nbsp;{user.Address}
                </p>
                <p id="Hirename">
                  District
                  &nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {user.District}
                </p>
                <p id="Hirename">
                  Rate
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {user.Rate}
                </p>
                <p className="card-text" id="hirecardtex">
                  {user.TelYourService}
                </p>
              </div>

              <p className="card-text" id="thankpage">
                <small className="text-body-secondary" id="hirethanks">
                  I will give you a Great service. Thank You.
                </small>
              </p>
              <div className="hire2buttons">
                <Link to="/Booking">
                  <button id="hirecardbutton">Hire</button>
                </Link>
                <button id="connectbutton">Let's Connect</button>
                {/* <button id="connectbutton">Let's Connect</button> */}
              </div>
              {/* <img src={logo} id="hirelogo" /> */}
            </div>
          </div>
        </div>
      </div>
      <Footerforcard />
    </div>
  );
}

export default Hire;
