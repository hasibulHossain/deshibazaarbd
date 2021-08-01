
import React, { useEffect } from "react";
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
import { getUserDataAction } from "../_redux/getUserData/Action/UserDataAction";

import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import ActiveLink from "../master/activeLink/ActiveLink";

const Header = () => {
	const dispatch = useDispatch();
	const toggleNav = "basic-navbar-nav";
	const { totalQuantity } = useSelector((state) => state.CartReducer);
	const { userData } = useSelector((state) => state.UserDataReducer);

	const toggleCartHandler = () => {
		dispatch(toggleFloatingCart());
	};

	useEffect(() => {
		dispatch(getCartsAction());
		dispatch(getUserDataAction());
	}, []);

	const formatCartTotalQty = (totalQuantity) => {
		if (totalQuantity <= 9) {
			return <span style={{ paddingLeft: 2 }}> {totalQuantity} </span>;
		} else if (totalQuantity > 9 && totalQuantity <= 99) {
			return totalQuantity;
		} else {
			return <span style={{ fontSize: 8 }}> {totalQuantity} </span>;
		}
	}

	return (
		<div>
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
											src="/images/logos/logo-en.svg"
											alt=""
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
									<div className="d-flex">
										{
											!userData ? (
												<>
													<Link href="/login" className="header-nav-link">
														<a className=""><Translate>Sign In</Translate></a>
													</Link>

													<Link href="/register">
														<a>
															<Button buttonText={translate('Sign up')} />
														</a>
													</Link>

												</>
											) : (
												<>
													{/* <Link href="/profile" className="header-nav-link">
													<a>
														<FontAwesomeIcon
															className="custom-fontAwesome"
															icon={faUser}
														/>{" "}
														<Translate>My Account</Translate>
													</a>
												</Link> */}
													<Dropdown>
														<Dropdown.Toggle variant="simple_btn_bg" className="btn-sm" id="dropdown-basic">
															<Translate>{userData && userData.first_name + " " + userData.last_name}</Translate>
														</Dropdown.Toggle>

														<Dropdown.Menu>
															<ActiveLink href="/profile" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faUser}
																/>{" "}
																<Translate>My Account</Translate>
															</ActiveLink>
															<ActiveLink href="/account-setting" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faUserCog}
																/>{" "}
																<Translate>Account Setting</Translate>
															</ActiveLink>
															<ActiveLink href="/wishlist" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faHeart}
																/>{" "}
																<Translate>My Wish list</Translate>
															</ActiveLink>
															<ActiveLink href="/order" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faShoppingBag}
																/>{" "}
																<Translate>My Orders</Translate>
															</ActiveLink>
															<ActiveLink href="/product-review" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faComment}
																/>{" "}
																<Translate>My Reviews</Translate>
															</ActiveLink>
															<ActiveLink href="" activeLink="activeLink">
																<FontAwesomeIcon
																	className=""
																	icon={faSignOutAlt}
																/>{" "}
																<Translate>Logout</Translate>
															</ActiveLink>
														</Dropdown.Menu>
													</Dropdown>

													<Link href="/wishlist" className="header-nav-link">
														<a>
															<FontAwesomeIcon
																className="custom-fontAwesome"
																icon={faHeart}
															/>{" "}
															<Translate>Wishlist</Translate>
														</a>
													</Link>

													{/* <Link href="/carts" className="header-nav-link"> */}

													{/* </Link> */}
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
												{formatCartTotalQty(totalQuantity)}
											</span>
											&nbsp;&nbsp; <Translate>Cart</Translate>
										</span>
									</div>
								</div>
							</Navbar.Collapse>
						</div>
					</div>

					{/* </Container> */}
					<HeaderMenu toggleNav={toggleNav} />
				</Navbar>
			</div>
		</div>
	);
};

export default Header;
