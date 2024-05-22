import "./Home.css";
import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Backgroundpgoto from "../../Assets/final.jpg";
import Backgroundpgoto2 from "../../Assets/final.jpg";
import Footer from "../../Componets/Footer/Footer";
import Button from '../../Componets/Button/Button'
import About from "../About/About";
import Service from '../Service/Service'
import Contact from "../Contact/Contact";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div 
      className="mainhome"
        id="carouselExampleAutoplaying"
        
       
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Backgroundpgoto}
              class="d-block w-100"
              alt="background photo"
              id="bgphot"
            />
          </div>
          <div class="carousel-item active">
            <img
              src={Backgroundpgoto2}
              class="d-block w-100"
              alt="..."
              id="bgphot"
            />
          </div>
        </div>
        {/* <button
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
        </button> */}
        <div className="parahome">
          <h6 className="h6"><span className="welcome">Welcome To Uzhavan!</span><br/>We are ready to save  your Time</h6>
          <Link to='#Serviceid'>
          <button className='homebutton'> Learn more </button>

          </Link>
  
          
        </div>
      </div>
      <About/>
      <Service/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;
