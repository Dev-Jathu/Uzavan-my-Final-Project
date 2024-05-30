// import React from 'react'
import Logo from '../../../Assets/uzavan.png'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';


function Navbarforcard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    // Remove JWT token and update isLoggedIn state
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    // Redirect to the homepage
    window.location.href = '/';
  };
  return (
    <div>
       <div className="main">
          <div className="container">
            <div className="logo">
              <div className="logoimg">
                <img src={Logo} id="logoimage" alt="this is image"/>
              </div>
              <div className="logoname">
                <h2>Uzhavan</h2>
              </div>
            </div>
            <div className="Navlings">
              <div className="navname" id="navnamefarmer">
                <Link to="#carouselExampleAutoplaying">Home</Link>

                <Link to="#Serviceid" smooth>
                  About
                </Link>
                <Link to="#Serviceid" smooth>
                  Service
                </Link>
                <Link to="#Serviceid" smooth>
                  Contact
                </Link>
              </div>
              <div className="navnamecopy">
                <Link to="#carouselExampleAutoplaying">
                  <i class="fa-solid fa-house" id="copylog1"></i>
                </Link>
                <Link to="#Aboutid" smooth>
                  <i class="fa-solid fa-user-tag" id="copylog1"></i>
                </Link>
              </div>
              <div className="butresfarmer">
              {isLoggedIn ? (
                <button className="buttonhireform" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to="/join">
                  <button className="buttonhireform">Join</button>
                </Link>
              )}
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbarforcard

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// function NavbarForCard() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Check if the user is logged in
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Remove JWT token and update isLoggedIn state
//     localStorage.removeItem('token');
//     setIsLoggedIn(false);
//     // Redirect to the homepage
//     window.location.href = '/';
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="container">
//           <div className="Navlings">
//             <div className="navname" id="navnamefarmer">
//               <Link to="#carouselExampleAutoplaying">Home</Link>
//               <Link to="#Serviceid" smooth>
//                 About
//               </Link>
//               <Link to="#Serviceid" smooth>
//                 Service
//               </Link>
//               <Link to="#Serviceid" smooth>
//                 Contact
//               </Link>
//             </div>
//             <div className="navnamecopy">
//               <Link to="#carouselExampleAutoplaying">
//                 <i className="fa-solid fa-house" id="copylog1"></i>
//               </Link>
//               <Link to="#Aboutid" smooth>
//                 <i className="fa-solid fa-user-tag" id="copylog1"></i>
//               </Link>
//             </div>
//             <div className="butresfarmer">
//               {isLoggedIn ? (
//                 <button className="button1" onClick={handleLogout}>
//                   Logout
//                 </button>
//               ) : (
//                 <Link to="/join">
//                   <button className="button1">Join</button>
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NavbarForCard;
