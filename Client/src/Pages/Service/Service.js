import "./Service.css";
import React from "react";
import pic from "../../../src/Assets/final.jpg";
import pic1 from "../../../src/Assets/new3.jpg";
import pic2 from "../../../src/Assets/new1.jpg";
import { HashLink as Link } from "react-router-hash-link";

function Service() {
  return (
    <div id="Serviceid">
      <p className="hedingservice">Our Services !</p>
      <p className="paraservise">
        Welcome to Our Uzhavan Website. We are Focus on main Agriculture
        Machinery's.In this menu have 3 Option. Do you want more details click
        the Search button.Thankyou!
      </p>
      <div className="cards">
        <div class="card"  id="card">
          <img src={pic} class="card-img-top" className='pic2'alt="this is image"/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitle">Tractor</h5>
            <p class="card-text" id='cardtext'>
           This filed only Have the Tractor Click The Search button For more details.
            </p>
            <Link to="/Learnmore" class="btn btn-primary" id="buttoncard">
              Search
            </Link>
          </div>
        </div>
        <div class="card" id="card">
          <img src={pic1} class="card-img-top" alt="this is image" className="pic2"/>
          <div class="card-body">
            <h5 class="card-title" id="cardtitle">paddy Harvestor</h5>
            <p class="card-text"id='cardtext' >
            This filed only Have the Paddy Harvester Click The Search Botton For more details.

            </p>
            <Link to="/Harvester" class="btn btn-primary"id="buttoncard">
            Search
            </Link>
          </div>
        </div>
        <div class="card" id="card">
          <img src={pic2} class="card-img-top" alt="this is image"  id='pic2'className="pic2"/>
          <div class="card-body">
            <h5 class="card-title" id="cardtitle" className="cardtitle">Tsunami machine</h5>
            <p class="card-text"id='cardtext'>
            This filed only Have the Tsunami Click The Search Botton For more details.

            </p>
            <Link to="/Tsunami" class="btn btn-primary"id="buttoncard">
            Search
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
