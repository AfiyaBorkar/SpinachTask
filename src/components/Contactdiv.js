import React from "react";
import spiralimg from '../assets/spiral.png'

export default function Contactdiv() {
  return (
    <>
      <div className="contactdiv">
        <div className="partnershipinfo">
          <div className="contitle">
            <h2>Feeling the lag of inconsistent design?</h2>
          </div>
          <div className="conpretitle">
            <p>
            Partner with us
            </p>
          </div>
          <div className="conbtn">
            <button>Contact Now</button>
          </div>
        </div>
        <div className="spiralimg">
            <img src={spiralimg} alt="spiral"  />
        </div>
      </div>
    </>
  );
}
