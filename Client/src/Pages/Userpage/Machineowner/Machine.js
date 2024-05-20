// import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import Logo from "../../../Assets/uzavan.png";
// import Backgroundpgoto3 from "../../../Assets/newmachine.jpg";
// import Button from "../../../Componets/Button/Button";
// import axios from "axios";
// import "./Machine.css";
// import { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";

// function Machine() {
//   const [product, setProduct] = useState({
//     name: "Uzhavan", // Changed to lowercase 'name'
//     price: 100,
//     productBy: "uki",
//   });

//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     return fetch("http://localhost:3000/payment", {
//       // Ensure the backend server is running on this port
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log("Response:", response);
//         const { status } = response;
//         console.log("Status:", status);
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div>
//         <div className="main">
//           <div className="container">
//             <div className="logo">
//               <div className="logoimg">
//                 <img src={Logo} id="logoimage" />
//               </div>
//               <div className="logoname">
//                 <h2>Uzhavan</h2>
//               </div>
//             </div>
//             <div className="Navlings">
//               <div className="navname" id="navnamefarmer">
//                 <Link to="#carouselExampleAutoplaying">Home</Link>

//                 <Link to="#Serviceid" smooth>
//                   Service
//                 </Link>
//               </div>
//               <div className="navnamecopy">
//                 <Link to="#carouselExampleAutoplaying">
//                   <i class="fa-solid fa-house" id="copylog1"></i>
//                 </Link>
//                 <Link to="#Aboutid" smooth>
//                   <i class="fa-solid fa-user-tag" id="copylog1"></i>
//                 </Link>
//               </div>
//               <div className="butresfarmer">
//                 <Link to="/Viewrofile">
//                   <i class="fa-solid fa-user" id="userprofile"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="mainhome"
//         id="carouselExampleAutoplaying"
//         class="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img
//               src={Backgroundpgoto3}
//               class="d-block w-100"
//               alt="..."
//               id="bgphot"
//             />
//           </div>
//         </div>
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="prev"
//         >
//           <span
//             class="carousel-control-prev-icon"
//             aria-hidden="true"
//             id="prebutton"
//           ></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="next"
//         >
//           <span
//             class="carousel-control-next-icon"
//             aria-hidden="true"
//             id="nextbutton"
//           ></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//         <div className="parahome" id="paramachine">
//           <h6 className="h6" id="h6">
//             <span className="welcome" id="welcome">
//               Welcome To Uzhavan!
//             </span>
//             <br />
//             We are ready to serve your Time
//           </h6>
//           <div>
           
//             <Link to="/Addprofile">
//             <StripeCheckout
//               stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI" // Use camelCase for props
//               token={makePayment}
//               name="Buy Uzhavan" // Updated prop to lowercase 'name'
//               amount={product.price * 100}
//             />
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div id="Serviceid">
//         <div className="machineservice">
//           <p className="hedingservice">Our Services !</p>
//           <p className="paraservise">
//             Welcome to Our Uzhavan Website. We are Focus on main Agriculture
//             Machinery's.In this menu have 3 Option. You can add your servive
//             click the Add Service. Thank You!{" "}
//           </p>
//         </div>
//         <div className="footermain">
//           <div className="footergrid">
//             <div className="Footerlings">
//               <div className="Footlogopara">
//                 <div className="footlogo">
//                   <img src={Logo} />
//                   <p className="footlname">Uzhavan</p>
//                 </div>
//                 <div className="footsubgrid">
//                   <div className="footpara">
//                     Hi Welcome To the Uzhavan Website. <br />
//                     This website focus on connect machinery's owners to
//                     Farmer.Thank you!
//                   </div>
//                   <div className="footnavling" id="farfoot">
//                     <p className="navlingtitle">Quick links</p>
//                     <a href="/" className="shortling">
//                       Home
//                     </a>
//                     <a href="about" className="shortling" smooth>
//                       About
//                     </a>
//                     <a href="contact" className="shortling" smooth>
//                       Contact
//                     </a>
//                   </div>
//                   <div className="Service">
//                     <div className="services">
//                       <p className="footerh1">Our Services</p>
//                       <div className="servicelink">
//                         <a href="/Learnmore1">Tractor</a>
//                         <br />
//                         <a href="/Harvester" className="paddie">
//                           Paddie Cropper
//                         </a>
//                         <br />
//                         <a href="/Tsunami" className="paddie">
//                           Tsunami Machine
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footcontact">
//                     <div className="contactfoot">
//                       <p className="contacttitle">Contact Us</p>
//                     </div>
//                     <div className="addrespanel">
//                       <div>
//                         <i class="fa-solid fa-house"></i>{" "}
//                         <span>Vavuniya, Sri Lanka</span>
//                       </div>
//                       <div>
//                         <i class="fa-solid fa-envelope"></i>{" "}
//                         <span>jathusansujan@gmail.com</span>
//                       </div>
//                       <div>
//                         <i class="fa-solid fa-phone"></i>{" "}
//                         <span>+94 762464317</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footlings">
//                     <a href="#">
//                       <i class="fa-brands fa-facebook" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i class="fa-brands fa-instagram" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i class="fa-brands fa-youtube" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i class="fa-brands fa-google" id="editicon"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="Footercopyright"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Machine;


// import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Logo from "../../../Assets/uzavan.png";
// import Backgroundpgoto3 from "../../../Assets/newmachine.jpg";
// import Button from "../../../Componets/Button/Button";
// import StripeCheckout from "react-stripe-checkout";
// import "./Machine.css";

// function Machine() {
//   const navigate = useNavigate(); // Initialize useNavigate

//   const [product, setProduct] = useState({
//     name: "Uzhavan", // Changed to lowercase 'name'
//     price: 100,
//     productBy: "uki",
//   });

//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//     };
//     const headers = {
//       "Content-Type": "application/json",
//     };

//     return fetch("http://localhost:3000/payment", {
//       // Ensure the backend server is running on this port
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then((response) => {
//         console.log("Response:", response);
//         const { status } = response;
//         console.log("Status:", status);
//         if (status === 200) {
//           // Navigate to /Addprofile if the payment is successful
//           navigate("/Addprofile");
//         }
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div>
//       <div>
//         <div className="main">
//           <div className="container">
//             <div className="logo">
//               <div className="logoimg">
//                 <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
//               </div>
//               <div className="logoname">
//                 <h2>Uzhavan</h2>
//               </div>
//             </div>
//             <div className="Navlings">
//               <div className="navname" id="navnamefarmer">
//                 <Link to="#carouselExampleAutoplaying">Home</Link>
//                 <Link to="#Serviceid" smooth>
//                   Service
//                 </Link>
//               </div>
//               <div className="navnamecopy">
//                 <Link to="#carouselExampleAutoplaying">
//                   <i className="fa-solid fa-house" id="copylog1"></i>
//                 </Link>
//                 <Link to="#Aboutid" smooth>
//                   <i className="fa-solid fa-user-tag" id="copylog1"></i>
//                 </Link>
//               </div>
//               <div className="butresfarmer">
//                 <Link to="/Viewrofile">
//                   <i className="fa-solid fa-user" id="userprofile"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="mainhome carousel slide"
//         id="carouselExampleAutoplaying"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src={Backgroundpgoto3}
//               className="d-block w-100"
//               alt="..."
//               id="bgphot"
//             />
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//             id="prebutton"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleAutoplaying"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//             id="nextbutton"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//         <div className="parahome" id="paramachine">
//           <h6 className="h6" id="h6">
//             <span className="welcome" id="welcome">
//               Welcome To Uzhavan!
//             </span>
//             <br />
//             We are ready to save your Time
//           </h6>
//           <div>
//             <Link to="/Addprofile">
//               <StripeCheckout
//                 stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI" // Use camelCase for props
//                 token={makePayment}
//                 name="Buy Uzhavan" // Updated prop to lowercase 'name'
//                 amount={product.price * 100}
//               > <button className="addhire">Add</button></StripeCheckout>
//             </Link>
//           </div>
//         </div>
//       </div>
//       <div id="Serviceid">
//         <div className="machineservice">
//           <p className="hedingservice">Our Services !</p>
//           <p className="paraservise">
//             Welcome to Our Uzhavan Website. We are Focus on main Agriculture
//             Machinery's.In this menu have 3 Option. You can add your servive
//             click the Add Service. Thank You!
//           </p>
//         </div>
//         <div className="footermain">
//           <div className="footergrid">
//             <div className="Footerlings">
//               <div className="Footlogopara">
//                 <div className="footlogo">
//                   <img src={Logo} alt="Uzhavan Logo" />
//                   <p className="footlname">Uzhavan</p>
//                 </div>
//                 <div className="footsubgrid">
//                   <div className="footpara">
//                     Hi Welcome To the Uzhavan Website. <br />
//                     This website focus on connect machinery's owners to
//                     Farmer.Thank you!
//                   </div>
//                   <div className="footnavling" id="farfoot">
//                     <p className="navlingtitle">Quick links</p>
//                     <a href="/" className="shortling">
//                       Home
//                     </a>
//                     <a href="about" className="shortling" smooth>
//                       About
//                     </a>
//                     <a href="contact" className="shortling" smooth>
//                       Contact
//                     </a>
//                   </div>
//                   <div className="Service">
//                     <div className="services">
//                       <p className="footerh1">Our Services</p>
//                       <div className="servicelink">
//                         <a href="/Learnmore1">Tractor</a>
//                         <br />
//                         <a href="/Harvester" className="paddie">
//                           Paddie Cropper
//                         </a>
//                         <br />
//                         <a href="/Tsunami" className="paddie">
//                           Tsunami Machine
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footcontact">
//                     <div className="contactfoot">
//                       <p className="contacttitle">Contact Us</p>
//                     </div>
//                     <div className="addrespanel">
//                       <div>
//                         <i className="fa-solid fa-house"></i>{" "}
//                         <span>Vavuniya, Sri Lanka</span>
//                       </div>
//                       <div>
//                         <i className="fa-solid fa-envelope"></i>{" "}
//                         <span>jathusansujan@gmail.com</span>
//                       </div>
//                       <div>
//                         <i className="fa-solid fa-phone"></i>{" "}
//                         <span>+94 762464317</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="footlings">
//                     <a href="#">
//                       <i className="fa-brands fa-facebook" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i className="fa-brands fa-instagram" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i className="fa-brands fa-youtube" id="editicon"></i>
//                     </a>
//                     <a href="#">
//                       <i className="fa-brands fa-google" id="editicon"></i>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="Footercopyright"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Machine;


import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import Logo from "../../../Assets/uzavan.png";
import Backgroundpgoto3 from "../../../Assets/newmachine.jpg";
import Button from "../../../Componets/Button/Button";
import StripeCheckout from "react-stripe-checkout";
import "./Machine.css";

function Machine() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "Uzhavan",
    price: 100,
    productBy: "uki",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin"); // Redirect to login if token is not present
    } else {
      // Optionally, verify token with backend if needed
    }
  }, [navigate]);

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    return fetch("http://localhost:3000/payment", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("Response:", response);
        const { status } = response;
        console.log("Status:", status);
        if (status === 200) {
          navigate("/Addprofile"); // Navigate to Addprofile if the payment is successful
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div>
        <div className="main">
          <div className="container">
            <div className="logo">
              <div className="logoimg">
                <img src={Logo} id="logoimage" alt="Uzhavan Logo" />
              </div>
              <div className="logoname">
                <h2>Uzhavan</h2>
              </div>
            </div>
            <div className="Navlings">
              <div className="navname" id="navnamefarmer">
                <Link to="#carouselExampleAutoplaying">Home</Link>
                <Link to="#Serviceid" smooth>
                  Service
                </Link>
              </div>
              <div className="navnamecopy">
                <Link to="#carouselExampleAutoplaying">
                  <i className="fa-solid fa-house" id="copylog1"></i>
                </Link>
                <Link to="#Aboutid" smooth>
                  <i className="fa-solid fa-user-tag" id="copylog1"></i>
                </Link>
              </div>
              <div className="butresfarmer">
                <Link to="/Viewrofile">
                  <i className="fa-solid fa-user" id="userprofile"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mainhome carousel slide"
        id="carouselExampleAutoplaying"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Backgroundpgoto3}
              className="d-block w-100"
              alt="..."
              id="bgphot"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            id="prebutton"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            id="nextbutton"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
        <div className="parahome" id="paramachine">
          <h6 className="h6" id="h6">
            <span className="welcome" id="welcome">
              Welcome To Uzhavan!
            </span>
            <br />
            We are ready to save your Time
          </h6>
          <div>
            <Link to="/Addprofile">
              <StripeCheckout
                stripeKey="pk_test_51PILqiEp6JPeXInZx8QfmFl1DToJ5gg5bAXgIH6JMHKpkPeS7RaxnWq3rGGzLdyz35RtgFaO1XlOsTsJtPAC91Oc00KBUr8fEI"
                token={makePayment}
                name="Buy Uzhavan"
                amount={product.price * 100}
              >
                <button className="addhire">Add Srvice</button>
              </StripeCheckout>
            </Link>
          </div>
        </div>
      </div>
      <div id="Serviceid">
        <div className="machineservice">
          <p className="hedingservice">Our Services !</p>
          <p className="paraservise">
            Welcome to Our Uzhavan Website. We are Focus on main Agriculture
            Machinery's. In this menu have 3 Option. You can add your service
            click the Add Service. Thank You!
          </p>
        </div>
        <div className="footermain">
          <div className="footergrid">
            <div className="Footerlings">
              <div className="Footlogopara">
                <div className="footlogo">
                  <img src={Logo} alt="Uzhavan Logo" />
                  <p className="footlname">Uzhavan</p>
                </div>
                <div className="footsubgrid">
                  <div className="footpara">
                    Hi Welcome To the Uzhavan Website. <br />
                    This website focus on connect machinery's owners to
                    Farmer. Thank you!
                  </div>
                  <div className="footnavling" id="farfoot">
                    <p className="navlingtitle">Quick links</p>
                    <a href="/" className="shortling">
                      Home
                    </a>
                    <a href="about" className="shortling" smooth>
                      About
                    </a>
                    <a href="contact" className="shortling" smooth>
                      Contact
                    </a>
                  </div>
                  <div className="Service">
                    <div className="services">
                      <p className="footerh1">Our Services</p>
                      <div className="servicelink">
                        <a href="/Learnmore1">Tractor</a>
                        <br />
                        <a href="/Harvester" className="paddie">
                          Paddie Cropper
                        </a>
                        <br />
                        <a href="/Tsunami" className="paddie">
                          Tsunami Machine
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footcontact">
                    <div className="contactfoot">
                      <p className="contacttitle">Contact Us</p>
                    </div>
                    <div className="addrespanel">
                      <div>
                        <i className="fa-solid fa-house"></i>{" "}
                        <span>Vavuniya, Sri Lanka</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-envelope"></i>{" "}
                        <span>jathusansujan@gmail.com</span>
                      </div>
                      <div>
                        <i className="fa-solid fa-phone"></i>{" "}
                        <span>+94 762464317</span>
                      </div>
                    </div>
                  </div>
                  <div className="footlings">
                    <a href="#">
                      <i className="fa-brands fa-facebook" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-google" id="editicon"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="Footercopyright"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Machine;
