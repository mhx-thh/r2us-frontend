import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
import InforContact from "./InforContact/InforContact";
import InforContact2 from "./InforContact/InforContact2";
import InforContact3 from "./InforContact/InforContact3";

class APP1 extends Component {
  render() {
    const settings = {
      dots: true,
      fade: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrow: false,
      autoplay: true,
      autoplaySpeed: 4000,
      appendDots: (dots) => {
        return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
      },
    };
    return (
      <div className="w-full">
        <Slider {...settings}>
          <InforContact />
          <InforContact2 />
          <InforContact3 />
        </Slider>
      </div>
    );
  }
}
export default APP1;
