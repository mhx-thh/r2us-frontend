import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InforContact from "./InforContact";

class APP1 extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrow: true,
      slidesToScroll: 1,
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <InforContact />
          <InforContact />
          <InforContact />
          <InforContact />
        </Slider>
      </div>
    );
  }
}
export default APP1;
