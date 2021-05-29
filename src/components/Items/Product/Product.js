import React from "react";
import "./Product.scss";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addToBasket, rmFromBasket } from "../../redux/action";

function Product({item}) {
  
  const dispatch = useDispatch();
  
  return (
    <div className="item-container">
      <div className="show-item">
        <img src={item.img} />
        <div className="title">
          <p className="show-title">{item.name}</p>
        </div>
        <span className="update-price">
          <NumberFormat
            value={item.priceUpdate}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"Vnd"}
          />
        </span>
        <span className="old-price">
          <NumberFormat
            value={item.priceOld}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"Vnd"}
          />
        </span>
      </div>
      <div className="action-item">
        <button className="add-cart" onClick={() => dispatch(addToBasket({item,quantity:1}))}>Add to cart</button>
        <button className="show-detail" onClick={() => dispatch(rmFromBasket({item}))}>Show detail</button>
      </div>
    </div>
  );
}

export default Product;
