import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
// import {uuid} from "uuid";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow
  };

  slides = [
    {
      key: uuidv4(),
      content: <img src="https://www.spinachexperience.design/assets/previous_experience_carousal/web/smitfit_banner.png" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://www.spinachexperience.design/assets/previous_experience_carousal/web/360one_banner.png" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="https://www.spinachexperience.design/assets/previous_experience_carousal/web/ring_banner.png" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://www.spinachexperience.design/assets/previous_experience_carousal/web/spicejet_banner.png" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://www.spinachexperience.design/assets/previous_experience_carousal/web/club_m_banner.png" alt="5" />
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div className="carousel-div">
      <div className="crousal-heading">
        <h2>
Our previous experience.
        </h2>
      </div>
      <div className="c-divv" >
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        {/* <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "30%",
            display: "flex",
            justifyContent: "space-around"
          }}
        >
         
          
        </div> */}
      </div>
      </div>
    );
  }
}
