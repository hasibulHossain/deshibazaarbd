
import React, { useEffect } from "react";
import Link from "next/link";
import { faHeart, faShoppingBag, faUser } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";
import Button from "../master/Button/Button";
import SearchInput from "../SearchInput/SearchInput";
import { toggleFloatingCart } from "../../_redux/store/action/globalAction";
import { getCartsAction } from "../carts/_redux/action/CartAction";
import { getUserDataAction } from "../_redux/getUserData/Action/UserDataAction";

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
									{
										!userData ? (
											<>
												<Link href="/login" className="header-nav-link">
													<a className="">Sign In</a>
												</Link>

												<Link href="/register">
													<a>
														<Button buttonText="Sign up" />
													</a>
												</Link>

											</>
										) : (
											<>
												<Link href="/profile" className="header-nav-link">
													<a>
														<FontAwesomeIcon
															className="custom-fontAwesome"
															icon={faUser}
														/>{" "}
														My Account
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
										&nbsp;&nbsp; Cart
									</span>
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
