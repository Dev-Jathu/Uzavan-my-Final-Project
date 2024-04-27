import React from "react";
import Navbar from "../../Componets/Navbar/Navbar";
import "./Contact.css";
import Form from "../../Componets/Form/Form";
import Button from "../../Componets/Button/Button";
import ContactPic from '../../Assets/contactt.jpg'

export default function Contact() {
  return (
    <div className="totalcontact">
      <div className="maingrid">
        <div className="addresspanel">
          <div className="gridaddresspanel">
            <div className="address" id="addressedit">
              <i class="fa-solid fa-location-dot" id="icoedit"></i>
              <p className="subadress">ADDRESS</p>
              <p className="subadresspara">
                No:03 SInnathampanai Neryakulam,Vavuniya
              </p>
            </div>
            <div className="Phone">
              <i class="fa-solid fa-phone-volume" id="icoedit"></i>
              <p className="subadress1">PHONE</p>
              <p className="subadresspara1">
                +94 762660588 <br />
                +94 762464317
              </p>
            </div>
            <div className="email" id="mailabout">
              <i class="fa-regular fa-envelope" id="icoedit1"></i>
              <p className="subadress2">EMAIL</p>
              <p className="subadresspara2">uzhavantheconnector@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactphotogrid">
          <div className="photocontact">
            <img src={ContactPic} className="piccontact2"/>
          </div>
          <div className="massagepanel">
            <div className="contact details">
              <div className="nameadd">
                <Form
                  class="ContactName"
                  name="Name"
                  type="text"
                  classinput="inputContactName"
                  place="Enter your Full Name"
                  required
                />
                <Form
                  class="ContactAddress"
                  name="Address"
                  type="text"
                  classinput="inputContactAddress"
                  place="Enter your Address"
                  required
                />
              </div>
              <div className="mailphone">
                <Form
                  class="Contactphone"
                  name="Contact Number"
                  type="number"
                  classinput="inputContactPhone"
                  place="Enter Phone number"
                  required
                />
              </div>

              <Form
                class="Contactmassage"
                name="Massage"
                type="text"
                classinput="inputContactmassage"
                place="Type Your Massage"
                required
              />
              <Button class="contactbutton" name="Send Massage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
