import {
  faHeart,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";

// third party imports
import { useDispatch } from "react-redux";
import { Container, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// local imports
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import Button from "../master/Button/Button";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";

const Header = () => {
  const toggleNav = "basic-navbar-nav";
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(toggleFloatingCart());
  };
  return (
    <d>
      <HeaderTop />
      <div className="bg-light">
        <Navbar bg="light" expand="lg">
          {/* <Container> */}
          <div className="header-container-section">
            <div className="custome-navbar">
              <Link href="/">
                <a href="">
                  <Navbar.Brand>
                    <img
                      src={"/images/logo.png"}
                      alt="deshi bazaar bd"
                      className="brand-logo"
                    />
                  </Navbar.Brand>
                </a>
              </Link>

              <Navbar.Toggle aria-controls={toggleNav} />
              <Navbar.Collapse id={toggleNav}>
                <div className="header-search-product">
                  <input placeholder="Search for Products, Brands or more" />
                  <div className="header-custom-prepend pointer">
                    <FontAwesomeIcon
                      className="custom-fontAwesome"
                      icon={faSearch}
                    />
                  </div>
                </div>
                <div className="ml-auto header-nav">
                  <Link href="/login" className="header-nav-link">
                    <a className="">Sign In</a>
                  </Link>
                  <Link href="/register">
                    <a>
                      <Button buttonText="Sign up" />
                    </a>
                  </Link>
                  <Link href="/" className="header-nav-link">
                    <a>
                      <FontAwesomeIcon
                        className="custom-fontAwesome"
                        icon={faHeart}
                      />{" "}
                      Wishlist
                    </a>
                  </Link>
                  {/* <Link href="/carts" className="header-nav-link"> */}
                  <span onClick={toggleCartHandler} className="header-nav-link pointer cart-nav-link">
                    <FontAwesomeIcon
                      className="custom-fontAwesome"
                      icon={faShoppingBag}
                    />
                    <span class="cart-qty">0</span>
                    &nbsp;&nbsp;
                    Cart
                  </span>
                  {/* </Link> */}
                </div>
              </Navbar.Collapse>
            </div>
          </div>

          {/* </Container> */}
          <HeaderMenu toggleNav={toggleNav} />
        </Navbar>
      </div>
    </d>
  );
};

export default Header;
