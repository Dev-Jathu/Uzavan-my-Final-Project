import './view.css'
import { Link } from 'react-router-dom'
import Logo from '../../../Assets/uzavan.png'
import Boss from '../../../Assets/boss.png'
import React from 'react'

function ProfileView() {
  return (
    <div>
          <div>
      <div className="main">
        <div className="container">
          <div className="logo" id="logoadmin">
            <div className="logoimg">
              <img src={Logo} id="logoimage" alt="this is image" />
            </div>
            <div className="logoname">
              <h2>Uzhavan</h2>
            </div>
          </div>
          <div className="Navlings">
            <div className="navname">
              <p className="boss">Welcome Back! mr Jathusan</p>
            </div>
            <div>
              <img src={Boss} className="bossimg"  alt="this is image"/>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gridcount">
            <div className="Farmercount">
              <p className="fcount">Farmercount</p>
              <i class="fa-solid fa-user" id="addlogo"></i>
            </div>
            <div className="Farmercount">
              <p className="fcount">Machinery Count</p>
              <i class="fa-solid fa-user" id="addlogo"></i>
            </div>
            <div className="Farmercount">
              <p className="fcount">Total Booking</p>
              <i class="fa-solid fa-user" id="addlogo"></i>
            </div>
          </div>
          <div className='Notecontainer'>
        
        </div>
        </div>

        <div className="sidbarboss">
          <p className="sidetext">
            Uzhavan <br />
            <span5>The Connector</span5>
          </p>

          <Link to="#">
            <button className="dash">Service Add</button>
          </Link>
          <br />
          <Link to="#">
            <button className="dash">Order</button>
          </Link>
          <br />
          <Link to="/Machine">
            <button className="dash">Home</button>
          </Link>
       
          <img src={Logo} className="footlogoboss" alt="this is image"/>
        </div>
      </div>
    </div>
  
      
    </div>
  )
}

export default ProfileView
