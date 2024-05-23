import React from "react";
import "./Contact.css";
import Form from "../../Componets/Form/Form";
import Button from "../../Componets/Button/Button";
import ContactPic from "../../Assets/machin8.jpg";

export default function Contact() {
  return (
    <div className="totalcontact">
      <div className="maingrid" id="Contactid">
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
              <p className="subadresspara2">uzhavan@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactphotogrid">
          <div className="photocontact">
            <div className="contactabout">
              <p className="HEADINGCONTACT">Message Us</p>

              <p className="contactpara">
                Lot's of machinery's Owner Profile Here.All profile Are Verified
                For our Best Team. The Machinery's owner Connected To Our
                farmers. If you have eny Doubt You can Contact me!Thank you.{" "}
              </p>
              <img src={ContactPic} className="piclastcontact" />
            </div>
          </div>
          <div className="massagepanel">
            <div className="contact details">
              {/* <div className="nameadd"> */}
              <form>
                <label className="ContactName"> Name</label>
                <br />

                <input
                  type="text"
                  className="inputContactName"
                  placeholder="Enter your Full Name"
                  required
                />
                <br />
                <label className="ContactAddress"> Address</label>
                <br />
                <input
                  type="text"
                  className="inputContactAddress"
                  placeholder="Enter your Address"
                  required
                />
                <br />
                <label className="Contactphone"> Contact Number</label>
                <br />
                <input
                  type="number"
                  className="inputContactPhone"
                  placeholder="Enter Phone number"
                  required
                />
                <br />
                <label className="Contactmassage"> Message</label>
                <br />

                <textarea
                  className="inputContactmassage"
                  placeholder="Type Your Message"
                  maxLength={200}
                  required
                />

                {/* <Button class="contactbutton" name="Send Message" /> */}
                <button className="contactbutton">Send Message</button>
              </form>
            </div>
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63093.79259309366!2d80.44436334408775!3d8.751965622375431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afc150e0fc66c73%3A0x37b6b473c8b4d008!2sVavuniya!5e0!3m2!1sen!2slk!4v1707315340836!5m2!1sen!2slk"
                width="380"
                height="290"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
