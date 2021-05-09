import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HeaderTop from './HeaderTop';
import Link from 'next/link'
import Button from '../master/Button/Button';


// import logo from './logo.png'
const Header = () => {
    return (
        <d>
            <HeaderTop />
            <div className="bg-light">
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="/">
                            <img src={"/images/logo.png"} alt="deshi bazaar bd" className="brand-logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
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
                    </Navbar>
                </Container>
            </div>
        </d>
    );
};

export default Header;