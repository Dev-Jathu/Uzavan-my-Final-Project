import React from 'react'
import Logo from '../../../Assets/uzavan.png'
import { Link } from 'react-router-dom'

function navbarforcard() {
  return (
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
                <Link to="#">
                  <i class="fa-solid fa-user" id="userprofile"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default navbarforcard
