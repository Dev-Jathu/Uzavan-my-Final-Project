import React from "react";
import pic from "../../../Assets/new1.jpg";
import pic1 from "../../../Assets/new6.jpg";
import pic2 from "../../../Assets/now2.png";
import pic3 from "../../../Assets/new1.jpg";
import Logo from "../../../Assets/uzavan.png";
import TsumaniCard from "../../../Componets/card/Tsunamicaed";
import { useState } from "react";

function Tsunami() {
  const [selectedDistrict, setSelectedDistrict] = useState("All-District");

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
  };
  return (
    <div>
      <div>
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
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      id="drop"
                    >
                      {selectedDistrict}
                    </button>
                    <ul class="dropdown-menu" id="menu">
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("Vavuniya")}
                        >
                          Vavuniya
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("Mullaitivu")}
                        >
                          Mullaitivu
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("Kilinochchi")}
                        >
                          Kilinochchi
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("Jaffna")}
                        >
                          Jaffna
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("Mannar")}
                        >
                          Mannar
                        </button>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDistrictChange("All-District")}
                        >
                          All
                        </button>
                      </li>
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
        <TsumaniCard selectedDistrict={selectedDistrict} />

          </div>
        </div>
      </div>
    </div>
  );
}

export default Tsunami;
