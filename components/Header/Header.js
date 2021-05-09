import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import HeaderTop from './HeaderTop';
import Link from 'next/link'
import Button from '../master/Button/Button';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    const toggleNav = "basic-navbar-nav"
    return (
        <d>
            <HeaderTop />
            <div className="bg-light">
                <Navbar bg="light" expand="lg">
                    <Container>

                        <div className="custome-navbar">
                            <Navbar.Brand href="/">
                                <img src={"/images/logo.png"} alt="deshi bazaar bd" className="brand-logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls={toggleNav} />
                            <Navbar.Collapse id={toggleNav} >
                                <div className="header-search-product">
                                    <input placeholder="Search for products, brands or more" />
                                    <div className="header-custome-prepend pointer">
                                        <FontAwesomeIcon className="custome-fontAwesome" icon={faSearch} />
                                    </div>
                                </div>
                                <div className="ml-auto header-nav">
                                    <Link href="/" className="header-nav-link">Sign In</Link>
                                    <Link href="/">
                                        <Button buttonText="Sign up" />
                                    </Link>
                                    <Link href="/" className="header-nav-link">
                                        <a><FontAwesomeIcon className="custome-fontAwesome" icon={faHeart} /> Wishlist</a>
                                    </Link>
                                    <Link href="/" className="header-nav-link">
                                        <a><FontAwesomeIcon className="custome-fontAwesome" icon={faShoppingBag} /> Cart</a>
                                    </Link>
                                </div>
                            </Navbar.Collapse>
                        </div>
                    </Container>
                    <HeaderMenu toggleNav={toggleNav} />
                </Navbar>
            </div>
        </d>
    );
};

export default Header;