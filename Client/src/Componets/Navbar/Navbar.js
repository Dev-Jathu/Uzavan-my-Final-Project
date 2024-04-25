import "./Navbar.css";
import React from "react";
import Logo from '../../Assets/uzavan.png';

export default function Navbar() {
  return (
    <div className="main">
      <div className="container">
        <div className="logo">
          <div className="logoimg">
            <img src={Logo} id="logoimage" />
          </div>
          <div className="logoname">
            <h2>Uzavan</h2>
          </div>
        </div>
        <div className="Navlings">
            <div className="navname">
                <a href='/'>Home</a>
                <a href='/About'>About</a>
                <a href='/Service'>Service</a>
                <a href='/Contact'>Contact</a>
               <a href="/join"><button className="button1" >Join</button></a> 
            </div>
        </div>
      </div>
    </div>
  );
}
