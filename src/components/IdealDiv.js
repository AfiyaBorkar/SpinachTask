import React from "react";

export default function IdealDiv() {
  return (
    // <div>IdealDiv</div>
    <>
      <div className="ideal-div" style={{ backgroundColor: "white" }}>
        <div className="ideal-head">
          <h2>This is ideal for</h2>
        </div>
        <hr></hr>
        <div className="serv">
          <div className="serv1 serv-box">
            <div className="serv-head">/01</div>
            <div className="serv-title">
              <p>Websites, apps and products</p>
            </div>
          </div>
          <div className="serv2 serv-box">
            <div className="serv-head">/02</div>
            <div className="serv-title">Product teams</div>
          </div>
          <div className="serv3 serv-box">
            <div className="serv-head">/03</div>
            <div className="serv-title">Saas and Enterprise start-ups</div>
          </div>
        </div>
      </div>
    </>
  );
}
