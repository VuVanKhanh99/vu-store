import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import NumberFormat from "react-number-format";
import "./Payment.scss";
import { getBasketTotal } from "../../redux/reducer/reducer";
import { addToBasket, rmFromBasket } from "../../redux/action";


function Payment() {
  const basket = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    //  console.log(countItemBasket({basket,item}));
  };
 useEffect(()=> {
  
 },[basket])
  const handleBasket = () => {
    console.log(
      'test',basket.map(item => basket.filter(item))
     );
  };

  return (
    <div className="payment-checkout">
      <h2 className="title-page">Checkout payment</h2>
      { 
      basket.map((item) => (      
        <div className="container-payment">
        <img src={item.img} />
        <p className="title">{item.name}</p>
        <span className="price-checkout">
          <NumberFormat
            value={item.priceUpdate}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"Vnd"}
          />
        </span>
        <button >-</button>
  
        <input type="text" />
        <button >+</button>
      </div>
      ))
      
     
    }
      <h3>
        Total payment <span></span>
      </h3>
    </div>
  );
}

export default Payment;
