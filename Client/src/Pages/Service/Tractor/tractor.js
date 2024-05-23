// import React from 'react'
// import Logo from '../../../Assets/uzavan.png'
// import './tractor.css'
// import TractorCard from'../../../Componets/card/Card'
// import { useState } from 'react'

// function Tractor() {
//   const [selectedDistrict, setSelectedDistrict] = useState('All');

//   const handleDistrictChange = (district) => {
//     setSelectedDistrict(district);
//   };
//   return (
//     <div>
//        <div className="main">
//       <div className="container">
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
//           <div class="dropdown">
//   <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='drop'>
//     Your Place
//   </button>
//   <ul class="dropdown-menu" id='menu'>
//     <li><a class="dropdown-item" href="#">Vavuniya</a></li>
//     <li><a class="dropdown-item" href="#">Mullaitivu</a></li>
//     <li><a class="dropdown-item" href="#">Kilinochchi</a></li>
//     <li><a class="dropdown-item" href="#">Jaffna</a></li>
//     <li><a class="dropdown-item" href="#">Mannar</a></li>
//   </ul>
// </div>
//           </div>
//           <div className="butres">
//             <a href="/join">
//               <button className="button1" id="button11">
//                 Join
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>

//     <div className="cardstractor">
//        <TractorCard/>

//       </div>
//     </div>
//   )
// }

// export default Tractor

// import React, { useState } from "react";
// import Logo from "../../../Assets/uzavan.png";
// import "./tractor.css";
// import TractorCard from "../../../Componets/card/Card";
// import Footercard from "../../../Componets/card/navbarforcard/footerforcard";


// function Tractor() {
//   const [selectedDistrict, setSelectedDistrict] = useState("All-District");

//   const handleDistrictChange = (district) => {
//     setSelectedDistrict(district);
//   };

//   return (
//     <div>
//       <div className="main">
//         <div className="container">
//           <div className="logo">
//             <div className="logoimg">
//               <img src={Logo} id="logoimage" alt="Logo" />
//             </div>
//             <div className="logoname">
//               <h2>Uzhavan</h2>
//             </div>
//           </div>
//           <div className="Navlings">
//             <div className="navname">
//               <div className="dropdown">
//                 <button
//                   className="btn btn-secondary dropdown-toggle"
//                   type="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   id="drop"
//                 >
//                   {selectedDistrict}
//                 </button>
//                 <ul className="dropdown-menu" id="menu">
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("Vavuniya")}
//                     >
//                       Vavuniya
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("Mullaitivu")}
//                     >
//                       Mullaitivu
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("Kilinochchi")}
//                     >
//                       Kilinochchi
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("Jaffna")}
//                     >
//                       Jaffna
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("Mannar")}
//                     >
//                       Mannar
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={() => handleDistrictChange("All-District")}
//                     >
//                       All
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="butres">
//               <a href="/join">
//                 <button className="button1" id="button11">
//                   Join
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="cardstractor">
//         <TractorCard selectedDistrict={selectedDistrict} />
//       </div>
//       <Footercard/>
//     </div>
//   );
// }

// export default Tractor;
import React, { useState, useEffect } from "react";
import Logo from "../../../Assets/uzavan.png";
import "./tractor.css";
import TractorCard from "../../../Componets/card/Card";
import Footercard from "../../../Componets/card/navbarforcard/footerforcard";

function Tractor() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState("All-District");


  
  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };

  const handleLogout = () => {
    // Remove JWT token and update isLoggedIn state
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.href = "/";

  };

  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="logo" id='traclogo'>
            <div className="logoimg">
              <img src={Logo} id="logoimage" alt="Logo" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <div className="dropdown" id="droptrac"> 
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="drop"
                >
                  {selectedDistrict}
                </button>
                <ul className="dropdown-menu" id="menu">
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Vavuniya")}
                    >
                      Vavuniya
                    </button>
                  </li>
                
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Mullaitivu")}
                    >
                      Mullaitivu
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Kilinochchi")}
                    >
                      Kilinochchi
                    </button>
                  </li>
                  
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Jaffna")}
                    >
                      Jaffna
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("Mannar")}
                    >
                      Mannar
                    </button>
                  </li>
                  {/* Other district options */}
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => handleDistrictChange("All-District")}
                    >
                      All
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="butres">
              {isLoggedIn ? (
                <button className="button1" id="button11" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <a href="/join">
                  <button className="button1" id="button11">
                    Join
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="cardstractor">
        <TractorCard selectedDistrict={selectedDistrict} />
      </div>
      <Footercard />
    </div>
  );
}

export default Tractor;
