
import React, { useEffect, useState, memo } from "react";
import Link from "next/link";
import { faComment, faHeart, faShoppingBag, faSignOutAlt, faUser, faUserCog } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import Button from "../master/Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction } from "../carts/_redux/action/CartAction";
import { getUserDataAction, handleLogoutUser } from "../_redux/getUserData/Action/UserDataAction";

import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";
import ActiveLink from "../master/activeLink/ActiveLink";
import HeaderWishlist from "./HeaderWishlist";

const Header = () => {
	const dispatch = useDispatch();
	const toggleNav = "basic-navbar-nav";
	const { totalQuantity } = useSelector((state) => state.CartReducer);
	const { userData } = useSelector((state) => state.UserDataReducer);
	const { isMobile } = useSelector(state => state.GlobalReducer);
	const [isHidden, setIsHidden] = useState(false);

	const toggleCartHandler = () => {
		dispatch(toggleFloatingCart());
	};

	useEffect(() => {
		dispatch(getCartsAction());
		dispatch(getUserDataAction());
	}, []);

	// useEffect(() => {
	// }, [isHidden])

	const formatQtyDisplay = (totalQuantity) => {
		if (totalQuantity <= 9) {
			return <span style={{ paddingLeft: 2 }}> {totalQuantity} </span>;
		} else if (totalQuantity > 9 && totalQuantity <= 99) {
			return totalQuantity;
		} else {
			return <span style={{ fontSize: 8 }}> {totalQuantity} </span>;
		}
	}

	const handleLogOut = () => {
		dispatch(handleLogoutUser());
		window.location.reload();
	}

	return (
		<div>
			<HeaderTop />
			<div className="bg-light">
				<Navbar bg="light" expand="lg">
					<div className="header-container-section">
						<div className="custome-navbar container">
							<Link href="/">
								<a href="" className="brand-logo-link">
									<Navbar.Brand>
										<img
											src="/images/logos/logo-en.svg"
											alt=""
											className="brand-logo"
										/>
									</Navbar.Brand>
								</a>
							</Link>
							<div onClick={() => setIsHidden(preState => !preState)} className="three-dot-box">
								<div className="three-dot">
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<div className="header-search-product">
								<SearchInput />
							</div>

							<Navbar.Toggle aria-controls={toggleNav} />
							{ (!isHidden ) && (
							<div className="ml-auto header-nav">
							<div className="header-nav-inner">
								{
									!userData ? (
										<div>
											<Link href="/login" className="header-nav-link">
												<a className=""><Translate>Sign In</Translate></a>
											</Link>

											<Link href="/register">
												<a>
													<Button buttonText={translate('Sign up')} />
												</a>
											</Link>
										</div>
									) : (
										<>
											<Dropdown className="auth-navbar-dropdown">
												<Dropdown.Toggle variant="simple_btn_bg" className="btn-sm text-capitalize" id="dropdown-basic">
													<div className="auth-user-name">{userData.first_name}</div>
												</Dropdown.Toggle>

												<Dropdown.Menu>
													<ActiveLink href="/profile" activeLink="custom_dropdown_link">
														<span className="custom_drop_item">
															<FontAwesomeIcon
																className="mr-1"
																icon={faUser}
															/>{" "}
															<Translate>My Account</Translate>
														</span>
													</ActiveLink>

													<ActiveLink href="/account-setting" activeLink="custom_dropdown_link">
														<span className="custom_drop_item">
															<FontAwesomeIcon
																className="mr-1"
																icon={faUserCog}
															/>{" "}
															<Translate>Account Setting</Translate>
														</span>
													</ActiveLink>
													<ActiveLink href="/wishlist" activeLink="custom_dropdown_link">
														<span className="custom_drop_item">
															<FontAwesomeIcon
																className="mr-1"
																icon={faHeart}
															/>{" "}
															<Translate>My Wish list</Translate>
														</span>
													</ActiveLink>
													<ActiveLink href="/order" activeLink="custom_dropdown_link">
														<span className="custom_drop_item">
															<FontAwesomeIcon
																className="mr-1"
																icon={faShoppingBag}
															/>{" "}
															<Translate>My Orders</Translate>
														</span>
													</ActiveLink>
													<ActiveLink href="/product-review" isDropDown={true} activeLink="custom_dropdown_link">
														<span className="custom_drop_item">
															<FontAwesomeIcon
																className="mr-1"
																icon={faComment}
															/>{" "}
															<Translate>My Reviews</Translate>
														</span>
													</ActiveLink>
													<ActiveLink href={""}>
														<span className="custom_drop_item" onClick={() => handleLogOut()}>
															<FontAwesomeIcon
																className="mr-1"
																icon={faSignOutAlt}
															/>{" "}
															<Translate>Logout</Translate>
														</span>
													</ActiveLink>
												</Dropdown.Menu>
											</Dropdown>
											<HeaderWishlist />
										</>
									)
								}
								<span
									onClick={toggleCartHandler}
									className="header-nav-link pointer cart-nav-link"
								>
									<FontAwesomeIcon
										className="custom-fontAwesome"
										icon={faShoppingBag}
									/>
									<span className="cart-qty">
										{formatQtyDisplay(totalQuantity)}
									</span>
									&nbsp;&nbsp; <Translate>Cart</Translate>
								</span>
							</div>
							</div>
							)}
							<Navbar.Collapse id={toggleNav}>
							</Navbar.Collapse>
						</div>
					</div>
					
					<HeaderMenu toggleNav={toggleNav} />
				</Navbar>
			</div>
		</div>
	);
};

export default memo(Header);
