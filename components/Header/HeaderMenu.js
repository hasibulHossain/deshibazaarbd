import React, { useEffect } from 'react';

import {
    Menu,
    MenuItem,
    MenuButton,
    SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuListData } from './_redux/HeaderAction/HeaderAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link'

const HeaderMenu = ({ toggleNav }) => {
    const dispatch = useDispatch();
    const menuList = useSelector((state) => state.HeaderReducer.menuList)
    useEffect(() => {
        dispatch(getMenuListData())
    }, []);

    return (
        <div className="menu_list">
            <Navbar.Collapse id={toggleNav} >

                <Link href="/categories-wise-product">
                    <a className="all_category_menu font-weight-bold">
                        <img src="/images/logos/menu.png" className="menu pr-2" style={{ width: 30 }}/>
                        All Categories
                    </a>
                </Link>

                {
                    menuList.length > 0 && menuList.map((item, index) => (
                        <Menu menuButton={<MenuButton>{item.menu} <FontAwesomeIcon className="custome-fontAwesome" icon={faCaretDown} /></MenuButton>} key={index}>
                            {
                                item.subMenu1.length > 0 && item.subMenu1.map((item2, index2) => (
                                    <MenuItem>{item2.SubMenu}</MenuItem>

                                ))
                            }
                            <SubMenu label="Product Category">
                                <MenuItem>Category-1</MenuItem>
                                <MenuItem>Category-2</MenuItem>
                                <SubMenu label="Product Sub Category">
                                    <MenuItem>Category Sub-1</MenuItem>
                                    <MenuItem>Category Sub-2</MenuItem>
                                    <MenuItem>Category Sub-3</MenuItem>
                                </SubMenu>
                            </SubMenu>
                            <MenuItem>Save</MenuItem>
                        </Menu>
                    ))
                }
            </Navbar.Collapse >
        </div>

    );
};

export default HeaderMenu;
