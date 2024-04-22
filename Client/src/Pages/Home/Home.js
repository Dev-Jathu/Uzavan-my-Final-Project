import "./Home.css";
import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import Backgroundpgoto from "../../Assets/machin2.jpg";
import Backgroundpgoto1 from '../../Assets/machin7.jpg';
import Backgroundpgoto2 from '../../Assets/machin3.jpg';
import Backgroundpgoto3 from '../../Assets/machin1.jpg';
import Backgroundpgoto4 from '../../Assets/machin4.jpg';
import Backgroundpgoto5 from '../../Assets/machin5.jpeg';
import videoFile from '../../Assets/vid.mp4'
import Contact from "../Contact/Contact";
function Home() {
  return (
    <div>
      <Navbar />
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Backgroundpgoto} class="d-block w-100" alt="..." id="bgphot"/>

    </div>
    <div class="carousel-item">
      <img src={Backgroundpgoto1} class="d-block w-100" alt="..." id="bgphot"/>
    </div>
    <div class="carousel-item">
      <img src={Backgroundpgoto2} class="d-block w-100" alt="..." id="bgphot"/>
    </div>
    <div class="carousel-item">
      <img src={Backgroundpgoto3} class="d-block w-100" alt="..." id="bgphot"/>
    </div>
    <div class="carousel-item">
      <img src={Backgroundpgoto4} class="d-block w-100" alt="..." id="bgphot"/>
    </div>
    <div class="carousel-item">
      <img src={Backgroundpgoto5} class="d-block w-100" alt="..." id="bgphot"/>
    </div>
    <div class="carousel-item">

    <video controls autoPlay loop muted id="bgvideo">
        <source src={videoFile} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>

    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" id="prebutton"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" id="nextbutton"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    </div>
  );
}

export default Home;
