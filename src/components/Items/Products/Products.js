import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Product from "../Product/Product";
import PreArrow from "../Arrow/PreArrow";
import NextArrow from "../Arrow/NextArrow";
import './Products.scss'
function Products({ item }) {
  const ref = useRef({});
  const settings = {
    dot: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
    swipeToSlide: true,
  };

  const handlePrevious = () => {
    ref.current.slickPrev();
  };
  const handleNext = () => {
    ref.current.slickNext();
  };
  return (
    <div className="show-items">
      <div className="direction-arrow" onClick={handlePrevious}>
        <PreArrow  />
      </div>

        <div className="show-list">
        <Slider ref={ref} {...settings} >
        {item &&
          item.map((item) => (
            <Product
              item={item}
            />
          ))}
        </Slider>
        </div>
      <div className="direction-arrow" onClick={handleNext}>
        <NextArrow  />
      </div>
    </div>
  );
}

export default Products;
