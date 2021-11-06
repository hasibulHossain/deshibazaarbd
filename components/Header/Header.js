import React, { useEffect, useState } from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";

import DemoWarning from "../Demo/DemoWarning";
import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import Button from "../master/Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { toggleBackdrop, toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction } from "../carts/_redux/action/CartAction";

import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";
import ActiveLink from "../master/activeLink/ActiveLink";
import HeaderWishlist from "./HeaderWishlist";
import { signOut } from 'next-auth/client';

const Header = () => {
  const [showToolbar, setShowToolbar] = useState(false);
  const dispatch = useDispatch();
  const { totalQuantity } = useSelector((state) => state.CartReducer);
  const { isSignedIn } = useSelector((state) => state.GlobalReducer);
  const { isMobile, backdrop } = useSelector((state) => state.GlobalReducer);

  const toggleCartHandler = () => {
    dispatch(toggleFloatingCart());
  };

  useEffect(() => {
    dispatch(getCartsAction());
  }, []);

  const formatQtyDisplay = (totalQuantity) => {
    if (totalQuantity <= 9) {
      return <span> {totalQuantity} </span>;
    } else if (totalQuantity > 9 && totalQuantity <= 99) {
      return totalQuantity;
    } else {
      return <span> {totalQuantity} </span>;
    }
  };

  const handleLogOut = () => {
    (async () => {
      const data = await signOut({redirect: false});

      if(data) {
        window.location.replace('/');
      }
    })();
    
    localStorage.removeItem('user-info');
    localStorage.removeItem('carts');
  };

  const navigationToggleHandler = () => {
    setShowToolbar((preState) => !preState);
    dispatch(toggleBackdrop());
  };

  return (
    <div>
      <DemoWarning />
      <HeaderTop />
      <div className="header__root">
        <div className="header__container">
          <div className="container">
            <div className="header__top">
              <div className="navigation__toggle-btn" onClick={navigationToggleHandler}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
              <div className="header__logo">
                <div className="header__logo-box">
                  <Link href="/">
                    <a>
                      <img src="/images/logos/logo-en.svg" alt="brand logo" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="header__srh-box">
                <div className="header__srh-box-container">
                  <div className="header-search-product">
                    <SearchInput />
                  </div>
                </div>
              </div>
              <div className="header__signupIn header-nav">
                <div className="d-flex align-items-center">
                  {!isSignedIn ? (
                    <div>
                      {
                        isMobile ? (
                          <Link href="/login">
                            <a>
                              <Button buttonText={translate("Sign Up / In")} />
                            </a>
                          </Link>

                        ) : (
                          <>
                            <Link href="/login" className="header-nav-link">
                              <a className="">
                                <Translate>Sign In</Translate>
                              </a>
                            </Link>

                            <Link href="/register">
                              <a>
                                <Button buttonText={translate("Sign up")} />
                              </a>
                            </Link>
                          </>
                        )
                      }
                    </div>
                  ) : (
                    <>
                      <Dropdown className="auth-navbar-dropdown">
                        <Dropdown.Toggle
                          variant="simple_btn_bg"
                          className="btn-sm text-capitalize"
                          id="dropdown-basic"
                        >
                          <div className="auth-user-name">
                            {/* {userData.first_name} */}
                            My account
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <ActiveLink
                            href="/profile"
                            activeLink="custom_dropdown_link"
                          >
                            <span className="custom_drop_item">
                              <i className="fas fa-user"></i>
                              {" "}
                              <Translate>My Account</Translate>
                            </span>
                          </ActiveLink>

                          <ActiveLink
                            href="/account-setting"
                            activeLink="custom_dropdown_link"
                          >
                            <span className="custom_drop_item">
                            <i className="fas fa-user-cog"></i>
                              {" "}
                              <Translate>Account Setting</Translate>
                            </span>
                          </ActiveLink>
                          <ActiveLink
                            href="/wishlist"
                            activeLink="custom_dropdown_link"
                          >
                            <span className="custom_drop_item">
                            <i className="fas fa-heart"></i>
                              {" "}
                              <Translate>My Wish list</Translate>
                            </span>
                          </ActiveLink>
                          <ActiveLink
                            href="/order"
                            activeLink="custom_dropdown_link"
                          >
                            <span className="custom_drop_item">
                            <i className="fas fa-shopping-bag"></i>
                              {" "}
                              <Translate>My Orders</Translate>
                            </span>
                          </ActiveLink>
                          <ActiveLink
                            href="/product-review"
                            isDropDown={true}
                            activeLink="custom_dropdown_link"
                          >
                            <span className="custom_drop_item">
                            <i className="fas fa-comment"></i>
                              {" "}
                              <Translate>My Reviews</Translate>
                            </span>
                          </ActiveLink>
                          <ActiveLink href={""}>
                            <span
                              className="custom_drop_item"
                              onClick={() => handleLogOut()}
                            >
                              <i className="fas fa-sign-out-alt"></i>
                              {" "}
                              <Translate>Logout</Translate>
                            </span>
                          </ActiveLink>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Link href="/wishlist">
                        <a>
                          <HeaderWishlist />
                        </a>
                      </Link>
                    </>
                  )}
                  <Link href="/carts">
                    <a>
                      <span
                        className="header-nav-link pointer cart-nav-link"
                      >
                        <i className="fas fa-shopping-bag"></i>

                        <span className="cart-qty">
                          {formatQtyDisplay(totalQuantity)}
                        </span>
                        {/* {!isMobile && (
                          <>
                            &nbsp;&nbsp; <Translate>Cart</Translate>
                          </>
                        )} */}
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!backdrop && (
          <div className="container py-2">
            <div className="header__srh-box-bottom">
              <div className="header__srh-box-container">
                <div className="header-search-product">
                  <SearchInput />
                </div>
              </div>
            </div>
          </div>
        )}
        <HeaderMenu showToolbar={showToolbar} navigationToggleHandler={navigationToggleHandler} />
      </div>
    </div>
  );
};

export default Header;
