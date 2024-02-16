import React from "react";
import serviceimg from "../assets/servicepic.png";

export default function Service() {
  return (
    // <div>Service</div>
    <>
      <div className="servicediv">
        <div className="service-cont">
          <div className="serviceinfo">
            <div className="servicenext">/Next service</div>
            <div className="servicename">
              <h2>Web and mobile apps</h2>
            </div>
            <div className="servicedesc">
              <p>
                Design stickiness and retention for web and mobile customer apps
                with our proven and tested Customer Experience Design process,
                builds behavioural engagement by leveraging Design Thinking for
                an end-to-end view of the customer acquisition and retention
                journey.
              </p>
            </div>

            <div className="servicebtn">
              <button>Know more</button>
            </div>
          </div>

          <div className="servicepic">
            <img src={serviceimg} alt="serviceimg" />
          </div>
          <button className="srvbtn">Know more</button>

        </div>
      </div>
    </>
  );
}
