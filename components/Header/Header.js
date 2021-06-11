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
                  <input placeholder="Search for products, brands or more" />
                  <div className="header-custome-prepend pointer">
                    <FontAwesomeIcon
                      className="custome-fontAwesome"
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
                        className="custome-fontAwesome"
                        icon={faHeart}
                      />{" "}
                      Wishlist
                    </a>
                  </Link>
                  {/* <Link href="/carts" className="header-nav-link"> */}
                  <span onClick={toggleCartHandler} className="header-nav-link">
                    <FontAwesomeIcon
                      className="custome-fontAwesome"
                      icon={faShoppingBag}
                    />{" "}
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
