import "./About.css";
import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Servicelogo from "../../Assets/about1.png";
import Servicelogo1 from "../../Assets/about2.png";
import Servicelogo2 from "../../Assets/about3.png";
import Servicelogo3 from "../../Assets/about4.png";
import Servicelogo4 from "../../Assets/about5.png";
import Logoabout1 from "../../Assets/uzavan17.jpg";
import Logoabout2 from "../../Assets/uzavan17.1.jpg";
import Logoabout3 from "../../Assets/TOP.jpg";
import Button from "../../Componets/Button/Button";
import { HashLink as Link } from "react-router-hash-link";


export default function Ababoutfinalout() {
  return (
    <div className="mainfinal">
      <div className="aboutfinal" id="Aboutid">
        <p className="why">Why Choose Us!</p>

        <div className="fullabout">
          <div className="gridabout">
            <div className="subdiv">
              <div className="logosabout">
                <div className="photoabout">
                  <img src={Servicelogo2} className="picabout" id="resicon" />
                </div>
                <div className="gridparaabout">
                  <p className="shortpara">Best Service</p>
                </div>
                <div>
                  <p className="headingabout ">
                    The paragraphs that you write must follow a very specific
                    structure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="subdivdiv">
            <div className="logosabout1">
              <div className="photoabout1">
                <img src={Servicelogo3} className="picabout1" id="resicon" />
              </div>
              <div className="gridparaabout">
                <p className="shortpara1">Verified Profile</p>
              </div>
              <div>
                <p className="headingabout1 ">
                  The paragraphs that you write must follow a very specific
                  structure.
                </p>
              </div>
            </div>
          </div>
          <div className="subdives">
            <div className="logosabout2">
              <div className="photoabout2">
                <img src={Servicelogo1} className="picabout2" id="resicon"/>
              </div>
              <div className="gridparaabout">
                <p className="shortpara2">Review & Rating</p>
              </div>
              <div>
                <p className="headingabout2 ">
                  The paragraphs that you write must follow a very specific
                  structure.
                </p>
              </div>
            </div>
          </div>
          <div className="subdives3">
            <div className="logosabout3">
              <div className="photoabout3">
                <img src={Servicelogo} className="picabout3" id="resicon"/>
              </div>
              <div className="gridparaabout">
                <p className="shortpara3">Customer Service</p>
              </div>
              <div>
                <p className="headingabout3 ">
                  The paragraphs that you write must follow a very specific
                  structure.
                </p>
              </div>
            </div>
          </div>
          <div className="subdives4">
            <div className="logosabout4">
              <div className="photoabout4">
                <img src={Servicelogo4} className="picabout4" id="resicon"/>
              </div>
              <div className="gridparaabout">
                <p className="shortpara4">Message</p>
              </div>
              <div>
                <p className="headingabout4 ">
                  The paragraphs that you write must follow a very specific
                  structure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutpage">
        <div className="aboutgrid">
          <div className="photo_about">
            <div className="pic1about">
              <img src={Logoabout1} className="pic1edit" />
            </div>
            <div className="pic2about">
              <img src={Logoabout2} className="pic1edit1" />
            </div>
            <div className="pic3about">
              <img src={Logoabout3} className="pic1edit2" />
            </div>
          </div>
          <div className="paraaboutpage">
            <p className="headingaboutsub">Uzhavan The Best Agriculture Machinery’s Here!</p>
            <p className="headingaboutsub1">In this websites Show Three Varities Of Machinery's  For farmers Needs!</p>
            <p className="headingaboutsub2">Lot's of machinery's Owner Profile Here.All profile Are Verified For our Best Team. The  Machinery's owner Connected To Our farmers. Do you Check Our Service Collection Click The Go Service Button </p>
            <p className="headingaboutsub2">Connect WIth Our Social Network</p>
            <div className="footlings1">
                <Link to="https://www.facebook.com/people/Uzhavan/61559226045426/">
                  <i class="fa-brands fa-facebook" id="editicon1"></i>
                </Link>
                <Link to="#">
                  <i class="fa-brands fa-instagram" id="editicon1"></i>
                </Link>
                <Link to="#">
                  <i class="fa-brands fa-youtube" id="editicon1"></i>
                </Link>
                <Link to="#">
                  <i class="fa-brands fa-google" id="editicon1"></i>
                </Link>
              </div>
            <Button name="Go Service" class='goservice'/>
          </div>
          
        </div>
      </div>
      </div>
  );
}
