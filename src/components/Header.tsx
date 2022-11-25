import React from "react";
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from '../redux/configStore'
// import {cart} from '../redux/reducers/cartReducer'
import '../assets/scss/components/_header.scss'
import {
  ACCESS_TOKEN,
  clearCookie,
  clearLocalStorage,
  USER_LOGIN,
} from "../util/setting";

type Props = {
  title?: string;
};

export default function Header({ }: Props) {
  // const { cart } = useSelector((state:RootState) => state.cartReducer);
  const { userLogin } = useSelector((state:any) => state.userReducer);

  const elearning = require("../assets/img/elearning.webp")
  const renderUserNavLink = () => {
    if (userLogin) {
      return (
        <>
         <div className="row">
          <li className="nav-item">
            <NavLink className="nav-link " to="/profile" aria-current="page">
              XIN CHÀO: {userLogin.taiKhoan}!
            </NavLink>
          </li>
          <li className="nav-item">
            <span
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => {
                clearLocalStorage(USER_LOGIN);
                clearLocalStorage(ACCESS_TOKEN);
                clearCookie(ACCESS_TOKEN);

                window.location.href = "/";
              }}
            >
              Đăng xuất 
            </span>
          </li>
          </div>
        </>
      );
    }
    return (
          
      <NavLink className="nav-link" to="/login">
        Đăng nhập
        <NavLink
            className="nav-link text-light header_icon"
            to="/cart"
            aria-current="page"
          >   
            <i className="fa fa-cart-plus"></i>(0)
          </NavLink>
      </NavLink>
      
      
    );
    
  };
  return (
    <nav
      // style={{ padding: "10px" }}
      className=" navbar-expand-sm navbar-light bg-dark header_fixed "
    >
      <NavLink className="navbar-brand header_text" to="/">
        <i
          style={{ color: "#06BBCC", fontSize: "50px" }}
          className="fas fa-book"
        ></i>
      </NavLink>
   
      <h2>eLEARNING</h2>
      <div
        className="header__right"
      >
        {/* <NavLink
          className="nav-link text-light header_icon"
          to="/cart"
          aria-current="page"
        >
          <i className="fa fa-cart-plus"></i>(0)
        </NavLink> */}
        <ul className=" login_regis">
          <li className="nav-item">

            {renderUserNavLink()}
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active register"
              to="/register"
              aria-current="page"
            >
              Đăng Ký
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
