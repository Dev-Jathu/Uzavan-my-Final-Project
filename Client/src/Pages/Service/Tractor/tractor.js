import React from 'react'
import pic from '../../../Assets/tractor1.jpg'
import pic1 from '../../../Assets/tractor2.jpg'
import pic2 from '../../../Assets/tractor3.jpg'
import pic3 from '../../../Assets/tractor4.jpg'
import Logo from '../../../Assets/uzavan.png'
import './tractor.css'


function tractor() {
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
          <div className="navname">
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id='drop'>
    Your Place
  </button>
  <ul class="dropdown-menu" id='menu'>
    <li><a class="dropdown-item" href="#">Vavuniya</a></li>
    <li><a class="dropdown-item" href="#">Mullaitivu</a></li>
    <li><a class="dropdown-item" href="#">Kilinochchi</a></li>
    <li><a class="dropdown-item" href="#">Jaffna</a></li>
    <li><a class="dropdown-item" href="#">Mannar</a></li>
  </ul>
</div>
          </div>
          <div className="butres">
            <a href="/join">
              <button className="button1" id="button11">
                Join
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>

       <div className="cardstractor">
        <div class="card">
          <img src={pic} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="view" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        <div class="card">
          <img src={pic1} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        
        <div class="card">
          <img src={pic2} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        
        <div class="card">
          <img src={pic3} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="view" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        <div class="card">
          <img src={pic3} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        <div class="card">
          <img src={pic2} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>
        <div class="card">
          <img src={pic1} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1">
              Hire Me
            </a>
          </div>
        </div>

        <div class="card">
          <img src={pic} class="card-img-top" alt="..."  className='track1'/>
          <div class="card-body">
            <h5 class="card-title"id="cardtitletractor">Tractor</h5>
            <p class="card-text" id='cardtexttractor'>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary" id="buttoncardtractor">
              View
            </a>
            <a href="#" class="btn btn-primary" id="buttoncardtractor1" >
              Hire Me
            </a>
          </div>
        </div>
        
              
      </div>
    </div>
  )
}

export default tractor
