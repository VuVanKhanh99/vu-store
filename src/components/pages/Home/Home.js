import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { useSelector} from 'react-redux';
import {
  phone,
  laptop_hp,
  laptop_dell,
  accessorie,
} from "../../assets/Info_products/Info.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Dell1,
  headPhone1,
  samsung1,
  SlideBar1,
  SlideBar2,
  SlideBar3,
  SlideBar4,
  SlideBar5,
} from "../../assets/images";
import "./Home.scss";
import PreArrow from "../../Items/Arrow/PreArrow.js";
import NextArrow from "../../Items/Arrow/NextArrow.js";
import Products from "../../Items/Products/Products.js";

function Home() {
  const history = useHistory();
  const item = useSelector(state => state.basket);
  console.log(item);
  return (
    <div className="home-page">
      <navbar>
        <Carousel
          interval={4000}
          nextIcon={<NextArrow />}
          prevIcon={<PreArrow />}
        >
          <Carousel.Item>
            <img className="d-block w-100" src={SlideBar1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SlideBar2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SlideBar3} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SlideBar4} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={SlideBar5} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </navbar>
      <div className="link-products">
        <div className="link-product" onClick={() => history.push("/phone")}>
          <p className="title">Discount to 40% when you buy phone in here</p>
          <img src={samsung1} />
        </div>
        <div className="link-product" onClick={() => history.push("/laptop")}>
          <p className="title">Many gift for you with big value</p>
          <img src={Dell1} />
        </div>
        <div
          className="link-product"
          onClick={() => history.push("/accessorie")}
        >
          <p className="title">
            Discount to 20% when you buy phone in here and only one programs :
            buy one get one
          </p>
          <img src={headPhone1} />
        </div>
      </div>
      <div className="show-products">
        <div className="show-product">
          <h2 className="title-item">Phone</h2>
          {phone && <Products item={phone} />}
        </div>
        <div className="show-product">
          <h2>Laptop Dell</h2>
          {laptop_dell && <Products item={laptop_dell} />}
        </div>
        <div className="show-product">
          <h2>Laptop HP</h2>
          {laptop_hp && <Products item={laptop_hp} />}
        </div>
        <div className="show-product">
          <h2>Accessore</h2>
          {accessorie && <Products item={accessorie} />}
        </div>
      </div>
    </div>
  );
}

export default Home;
