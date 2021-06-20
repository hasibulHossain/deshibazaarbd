import {
  faHeart,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Link from "next/link";

// third party imports
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// local imports
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import Button from "../master/Button/Button";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction } from "../_redux/CartProduct/Action/CartAction";
import SearchInput from "../SearchInput/SearchInput";

const Header = () => {
  const dispatch = useDispatch();
  const toggleNav = "basic-navbar-nav";
  const carts = useSelector((state) => state.CartReducer.carts);

  const toggleCartHandler = () => {
    dispatch(toggleFloatingCart());
  };

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

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
                  <SearchInput />
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

                  <Link href="/wishlist" className="header-nav-link">
                    <a>
                      <FontAwesomeIcon
                        className="custom-fontAwesome"
                        icon={faHeart}
                      />{" "}
                      Wishlist
                    </a>
                  </Link>

                  {/* <Link href="/carts" className="header-nav-link"> */}
                  <span
                    onClick={toggleCartHandler}
                    className="header-nav-link pointer cart-nav-link"
                  >
                    <FontAwesomeIcon
                      className="custom-fontAwesome"
                      icon={faShoppingBag}
                    />
                    <span className="cart-qty">{carts.length}</span>
                    &nbsp;&nbsp; Cart
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
