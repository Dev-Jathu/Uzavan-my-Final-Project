// import "./Navbar.css";
// import Logo from "../../Assets/uzavan.png";
// import { HashLink as Link } from "react-router-hash-link";
// import React, { useState, useEffect } from "react";

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     localStorage.removeItem("token");
//     window.location.href = "/";
//   };

//   // Function to check if the user is logged in
//   const checkLoggedIn = () => {
//     // Check if the token exists in localStorage or anywhere else
//     const token = localStorage.getItem("token");
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   };

//   // Call the checkLoggedIn function when the component mounts
//   useEffect(() => {
//     checkLoggedIn();
//   }, []);
//   return (
//     <div className="main">
//       <div className="container" id="containernav">
//         <div className="logo">
//           <div className="logoimg">
//             <img src={Logo} id="logoimage" />
//           </div>
//           <div className="logoname">
//             <h2>Uzhavan</h2>
//           </div>
//         </div>
//         <div className="Navlings">
//           <div className="navname">
//             <Link to="#carouselExampleAutoplaying">Home</Link>
//             <Link to="#Aboutid" smooth>
//               About
//             </Link>
//             <Link to="#Serviceid" smooth>
//               Service
//             </Link>
//             <Link to="#Contactid" smooth>
//               Contact
//             </Link>
//           </div>
//           <div className="navnamecopy">
//             <Link to="#carouselExampleAutoplaying">
//               <i class="fa-solid fa-house" id="copylog"></i>
//             </Link>
//             <Link to="#Aboutid" smooth>
//               <i class="fa-solid fa-user-tag" id="copylog"></i>
//             </Link>
//             <Link to="#Serviceid" smooth>
//               <i class="fa-solid fa-briefcase" id="copylog"></i>
//             </Link>
//             <Link to="#Contactid" smooth>
//               <i class="fa-solid fa-address-book" id="copylog"></i>
//             </Link>
//           </div>
//           <div className="butres">
//             {isLoggedIn ? (
              
//               <button className="button1" id="button10" onClick={handleLogout}>
//                 Logout
//               </button>
//             ) : (
//               <Link to="/join">
//                 <button className="button1" id="button10">
//                   Join
//                 </button>
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import "./Navbar.css";
import Logo from "../../Assets/uzavan.png";
import { HashLink as Link } from "react-router-hash-link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  // Function to check if the user is logged in
  const checkLoggedIn = () => {
    // Check if the token exists in localStorage or anywhere else
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  };

  // Call the checkLoggedIn function when the component mounts
  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <div className="main">
      <div className="container" id="containernav">
        <div className="logo">
          <div className="logoimg">
            <img src={Logo} id="logoimage" alt="logo" />
          </div>
          <div className="logoname">
            <h2>Uzhavan</h2>
          </div>
        </div>
        <div className="Navlings">
          <div className="navname">
            <Link to="#carouselExampleAutoplaying">Home</Link>
            <Link to="#Aboutid" smooth>
              About
            </Link>
            <Link to="#Serviceid" smooth>
              Service
            </Link>
            <Link to="#Contactid" smooth>
              Contact
            </Link>
          </div>
          <div className="navnamecopy">
            <Link to="#carouselExampleAutoplaying">
              <i className="fa-solid fa-house" id="copylog"></i>
            </Link>
            <Link to="#Aboutid" smooth>
              <i className="fa-solid fa-user-tag" id="copylog"></i>
            </Link>
            <Link to="#Serviceid" smooth>
              <i className="fa-solid fa-briefcase" id="copylog"></i>
            </Link>
            <Link to="#Contactid" smooth>
              <i className="fa-solid fa-address-book" id="copylog"></i>
            </Link>
          </div>
          <div className="butres">
            {isLoggedIn ? (
              <>
                <button className="button1" id="button10" onClick={handleLogout}>
                  Logout
                </button>
                {/* Add your additional button here */}
                <Link to='/Farmerpage'>
                <button className="button2" id="button11">
                <i class="fa-solid fa-user"></i>
                </button>
                </Link>
              
              </>
            ) : (
              <Link to="/join">
                <button className="button1" id="button10">
                  Join
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
