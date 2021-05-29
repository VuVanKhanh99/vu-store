import React from "react";
import { LogoIcon } from "../../assets/images";
import fire from "../../Items/firebase";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../../redux/action";
import {useHistory } from 'react-router-dom';

function Header() {
  const user = useSelector((state) => state.user);
  const countItemBasket = useSelector(state => state.basket).length;
  const dispatch = useDispatch();
  const history = useHistory()

  const handleName = (user) => {
    const index = user.indexOf("@");
    return user.substring(0, index);
  };
  const handleLogout = () => {
    dispatch(removeUser());
    fire.auth().signOut();
  };
  
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img src={LogoIcon} className="logo-icon" />
        </Link>
      </div>
      <div className="flex-right">
        {user ? 
          <h2 className="show-user">Hello , {handleName(user)}</h2>
         : 
          <div className="login">
            <Link to="/signup" className="link-signup">
              Sign up
            </Link>
            <p>or</p>
            <Link to="/login" className="link-signup">
              Login
            </Link>
          </div>
        }
        <div className="basket" >
          <Link to="/payment" className="link-basket">
            <ShoppingCartIcon className="basket-icon" />
          </Link>
          <p className="count-item">{ countItemBasket >0 && countItemBasket}</p>
        </div>
        <p className="link-logout" onClick={handleLogout}>
          Log out
        </p>
      </div>
    </div>
  );
}

export default Header;
