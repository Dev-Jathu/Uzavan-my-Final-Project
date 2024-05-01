import "./Navbar.css";
import React from "react";
import Logo from "../../Assets/uzavan.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
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
            <Link to="#carouselExampleAutoplaying"><i class="fa-solid fa-house" id="copylog"></i></Link>
            <Link to="#Aboutid" smooth>
            <i class="fa-solid fa-user-tag" id="copylog"></i>
            </Link>
            <Link to="#Serviceid" smooth>
            <i class="fa-solid fa-briefcase"id="copylog"></i>
            </Link>
            <Link to="#Contactid" smooth>
            <i class="fa-solid fa-address-book"id="copylog"></i>
            </Link>
          </div>
          <div className="butres">
            <a href="/join">
              <button className="button1" id="button10">
                Join
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
