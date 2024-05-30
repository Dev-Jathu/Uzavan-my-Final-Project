import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../Assets/uzavan.png'



function footerforcard() {
  return (
    <div>
      <div className="footermain" id='footermain'>
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
                  <div className="services" id='service'>
                    <p className="footerh1">Our Services</p>
                    <div className="servicelink">
                      <Link to="/Learnmore" className="paddie">Tractor</Link>
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
  )
}

export default footerforcard
