import React from "react";
import phase1 from "../assets/phase0.png";
import phase2 from "../assets/phase1.png";
import phase3 from "../assets/phase2.png";
import phase4 from "../assets/phase3.png";
import IdealDiv from "./IdealDiv";

export default function DesignSection() {
  return (
    <>
      <div className="desc-container">
        <div className="desc-header">
          <h2>A design system for website & apps is critical to resolve:</h2>
        </div>

        <div className="design-container">
          <div className="designer-div">
            <div class="row">
              <div class="col de1">
                <div className="dehead">/01</div>
                <div className="dedesc">Inconsistent user experience.</div>
              </div>
              <div class="col de2">
                <div className="dehead">/02</div>
                <div className="dedesc">Design-led delays in go-to-market.</div>
              </div>
              <div class="col de3">
                <div className="dehead">/03</div>
                <div className="dedesc">Disjointed digital brand image.</div>
              </div>
              <div class="col de4">
                <div className="dehead">/04</div>
                <div className="dedesc">Disconnected dev-design sprints.</div>
              </div>
            </div>
            <div className="hrdiv">
              <hr></hr>
            </div>
          </div>

          <div className="infodiv">
            <div className="infotitle">
              <h2>Our proven methodology for Design Systems.</h2>
            </div>
            <div className="infodesc">
              <p>
                Redesigning a design system is a densely strategised process
                that involves careful planning, collaboration, and iterative
                refinement.
              </p>
            </div>
          </div>

          <div className="carousaldiv">
            <div class="row">
              <div class="col ce1">
                <img src={phase1} alt="phase0" />
              </div>
              <div class="col ce2">
                <img src={phase2} alt="phase1" />
              </div>
              <div class="col ce3">
                <img src={phase3} alt="phase2" />
              </div>
              <div class="col ce4">
                <img src={phase4} alt="phase3" />
              </div>
            </div>
          </div>
          <div className="hrdiv">
            <br></br><hr></hr>
          </div>
        </div>

        <div className="systeminfo">
          <div className="head">
            <div className="title">
              <h2>Design system process highlights:</h2>
            </div>
            <div className="desc">
              <p>
                A Design System redesign roadmap has to be delicately handled
                and marked out with much careful consideration rather than
                impulse.
              </p>
            </div>
          </div>

          <div className="infocols">
            <div class="row">
              <div class="col de1">
                <div className="infohead">
                  <div className="infonum">/01</div>
                  <div className="infotitles">
                    <h2>Research first.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    Our research is designed to interview stakeholders,
                    end-users, and decision-makers in order to grasp diverse
                    needs. We incorporate findings into a comprehensive strategy
                    that aligns with business goals, ensuring the Design system
                    meets user expectations and industry standards.
                  </p>
                </div>
              </div>

              <div class="col de2">
                <div className="infohead">
                  <div className="infonum">/02</div>
                  <div className="infotitle">
                    <h2>Brand-centric DLS.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    To reinforce the brand's visual identity, values and tone of
                    voice, we build consistency in the use of brand colours,
                    typography, and imagery, coupled with intuitive interactions
                    to foster brand affinity and loyalty across all touchpoints.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col de1">
                <div className="infohead">
                  <div className="infonum">/03</div>
                  <div className="infotitle">
                    <h2>Design principles and guidelines.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    Based on design trends, research outcomes and brand essence,
                    we identify core values, guidelines and themes that drive
                    the design creation process and craft an experience that is
                    unique to the brand for its users.
                  </p>
                </div>
              </div>
              <div class="col de2">
                <div className="infohead">
                  <div className="infonum">/04</div>
                  <div className="infotitle">
                    <h2>Modularity for multiple use-cases.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    We adopt a modular process of Design System creation. Based
                    on use-cases and development prioritization we create
                    components, patterns and templates that empower the design
                    and dev teams to scale the sprint outcomes exponentially.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col de1">
                <div className="infohead">
                  <div className="infonum">/05</div>
                  <div className="infotitle">
                    <h2>Cross-functional collaboration.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    Our Design System collaboration is characterized by an
                    inclusive working approach, fostering outcomes that excel in
                    scale, efficiency and cost-effectiveness. We drive results
                    that go beyond expectations, ensuring a synergy of
                    creativity and practicality for optimal Design System
                    performance.
                  </p>
                </div>
              </div>
              <div class="col de2">
                <div className="infohead">
                  <div className="infonum">/06</div>
                  <div className="infotitle">
                    <h2>Version control and documentation handover.</h2>
                  </div>
                </div>

                <div className="infodesc">
                  <p>
                    We manage the handover process meticulously, with robust
                    documentation and tight governance. Our processes ensure
                    lasting consistency and quality, facilitating a seamless
                    transition and nurturing the sustained success of the design
                    system over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <IdealDiv/>
      </div>
    </>
  );
}
