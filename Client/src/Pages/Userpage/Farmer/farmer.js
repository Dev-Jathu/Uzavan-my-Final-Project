import React, { useEffect } from "react";
import Backgroundpgoto3 from "../../../Assets/newfarmer1.jpg";
import Button from "../../../Componets/Button/Button";
import Logo from "../../../Assets/uzavan.png";
import pic from "../../../Assets/final.jpg";
import pic1 from "../../../Assets/new3.jpg";
import pic2 from "../../../Assets/new1.jpg";
import { HashLink as Link } from "react-router-hash-link";
import "./farmer.css";
import axios from "axios";

function Farmer() {

  return (
    <div>
      <div>
        <div className="main">
          <div className="container">
            <div className="logo">
              <div className="logoimg">
                <img src={Logo} id="logoimage" />
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
                  <i class="fa-solid fa-house" id="copylog1"></i>
                </Link>
                <Link to="#Aboutid" smooth>
                  <i class="fa-solid fa-user-tag" id="copylog1"></i>
                </Link>
              </div>
              <div className="butresfarmer">
                <Link to="#">
                  <i class="fa-solid fa-user" id="userprofile"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="mainhome"
        id="carouselExampleAutoplaying"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Backgroundpgoto3}
              class="d-block w-100"
              alt="..."
              id="bgphot"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
            id="prebutton"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
            id="nextbutton"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
        <div className="parahome" hd='para'>
          <h6 className="h6" id="h6">
            <span className="welcome" id="welcome">
              Welcome To Uzhavan!
            </span>
            <br />
            We are ready to save your Time
          </h6>
          <Button id='farmerbutton' class="homebutton1" name="Find Machine" />
        </div>
      </div>
      <div id="Serviceid">
        <p className="hedingservice">Our Services !</p>
        <p className="paraservise">
          Welcome to Our Uzhavan Website. We are Focus on main Agriculture
          Machinery's.In this menu have 3 Option. Do you want more details click
          the Learn more button.Thankyou!
        </p>
        <div className="cards">
          <div class="card" id="card">
            <img src={pic} class="card-img-top" className="pic2" alt="..." />
            <div class="card-body">
              <h5 class="card-title" id="cardtitle">
                Tractor
              </h5>
              <p class="card-text" id="cardtext">
                This filed only Have the Tractor Click The Learn More Botton For
                more details.
              </p>
              <Link to="Learnmore" class="btn btn-primary" id="buttoncard">
                Learn More
              </Link>
            </div>
          </div>
          <div class="card" id="card">
            <img src={pic1} class="card-img-top" alt="..." className="pic2" />
            <div class="card-body">
              <h5 class="card-title" id="cardtitle">
                paddy Harvester
              </h5>
              <p class="card-text" id="cardtext">
                This filed only Have the Paddy Harvester Click The Learn More
                Botton For more details.
              </p>
              <Link to="Harvester" class="btn btn-primary" id="buttoncard">
                Learn More
              </Link>
            </div>
          </div>
          <div class="card" id="card">
            <img
              src={pic2}
              class="card-img-top"
              alt="..."
              id="pic2"
              className="pic2"
            />
            <div class="card-body">
              <h5 class="card-title" id="cardtitle" className="cardtitle">
                Tsunami machine
              </h5>
              <p class="card-text" id="cardtext">
                This filed only Have the Tsunami Click The Learn More Botton For
                more details.
              </p>
              <Link to="Tsunami" class="btn btn-primary" id="buttoncard">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footermain">
        <div className="footergrid">
          <div className="Footerlings">
            <div className="Footlogopara">
              <div className="footlogo">
                <img src={Logo} />
                <p className="footlname">Uzhavan</p>
              </div>
              <div className="footsubgrid">
                <div className="footpara">
                  Hi Welcome To the Uzhavan Website. <br />
                  This website focus on connect machinery's owners to
                  Farmer.Thank you!
                </div>
                <div className="footnavling" id="farfoot">
                  <p className="navlingtitle">Quick links</p>
                  <Link to="/" className="shortling">
                    Home
                  </Link>
                  <Link to="about" className="shortling" smooth>
                    About
                  </Link>
                  <Link to="contact" className="shortling" smooth>
                    Contact
                  </Link>
                </div>
                <div className="Service">
                  <div className="services">
                    <p className="footerh1">Our Services</p>
                    <div className="servicelink">
                      <Link to="/Learnmore">Tractor</Link>
                      <br />
                      <Link to="/Harvester" className="paddie">
                        Paddie Cropper
                      </Link>
                      <br />
                      <Link to="/Tsunami" className="paddie">
                        Tsunami Machine
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="footcontact">
                  <div className="contactfoot">
                    <p className="contacttitle">Contact Us</p>
                  </div>
                  <div className="addrespanel">
                    <div>
                      <i class="fa-solid fa-house"></i>{" "}
                      <span>Vavuniya, Sri Lanka</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-envelope"></i>{" "}
                      <span>jathusansujan@gmail.com</span>
                    </div>
                    <div>
                      <i class="fa-solid fa-phone"></i>{" "}
                      <span>+94 762464317</span>
                    </div>
                  </div>
                </div>
                <div className="footlings">
                  <Link to="#">
                    <i class="fa-brands fa-facebook" id="editicon"></i>
                  </Link>
                  <Link to="#">
                    <i class="fa-brands fa-instagram" id="editicon"></i>
                  </Link>
                  <Link to="#">
                    <i class="fa-brands fa-youtube" id="editicon"></i>
                  </Link>
                  <Link to="#">
                    <i class="fa-brands fa-google" id="editicon"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="Footercopyright"></div>
        </div>
      </div>
    </div>
  );
}

export default Farmer;
