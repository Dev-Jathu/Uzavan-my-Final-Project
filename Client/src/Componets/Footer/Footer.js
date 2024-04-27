import React from "react";
import "./Footer.css";
import Logo from "../../Assets/uzavan.png";

export default function Footer() {
  return (
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
                This website focus on connect machinery's owners to Farmer.Thank
                you!
              </div>
              <div className="footnavling">
                <p className="navlingtitle">Quick links</p>
                <a href="/" className="shortling">
                  Home
                </a>
                <a href="/About" className="shortling">About</a>
                <a href="/Service" className="shortling">Service</a>
                <a href="/Contact" className="shortling">Contact</a>
              </div>
              <div className="Service">
                <div className="services">
                  <p className="footerh1">Our Services</p>
                  <div className="servicelink">
                    <a href="#">Tractor</a>
                    <br />
                    <a href="#" className="paddie">Paddie Cropper</a>
                    <br />
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
                    <i class="fa-solid fa-phone"></i> <span>+94 762464317</span>
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
  );
}
