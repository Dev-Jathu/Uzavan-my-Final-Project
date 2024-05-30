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
              alt="this is image"
              id="bgphot"
            />
          </div>
        </div>
       
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
