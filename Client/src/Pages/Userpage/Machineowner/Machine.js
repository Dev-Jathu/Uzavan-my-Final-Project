import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../../Assets/uzavan.png";
import Backgroundpgoto3 from "../../../Assets/macine.mp4";
import Button from '../../../Componets/Button/Button';
import './Machine.css'

function Machine() {
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
                <a href="#">
                  <i class="fa-solid fa-user" id="userprofile"></i>
                </a>
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
            <video
              autoPlay
              loop
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
        <div className="parahome" id="paramachine">
          <h6 className="h6" id="h6">
            <span className="welcome" id="welcome">
              Welcome To Uzhavan!
            </span>
            <br />
            We are ready to serve your Time
          </h6>
          <Button class="homebutton" name="Add Service" />
        </div>
      </div>
      <div id="Serviceid">
        <div className="machineservice">
          <p className="hedingservice">Our Services !</p>
          <p className="paraservise">
            Welcome to Our Uzhavan Website. We are Focus on main Agriculture
            Machinery's.In this menu have 3 Option. You can add your servive
            click the Add Service. Thank You!{" "}
          </p>
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
                        <a href="/Learnmore">Tractor</a>
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
                    <a href="#">
                      <i class="fa-brands fa-facebook" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-instagram" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-youtube" id="editicon"></i>
                    </a>
                    <a href="#">
                      <i class="fa-brands fa-google" id="editicon"></i>
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
