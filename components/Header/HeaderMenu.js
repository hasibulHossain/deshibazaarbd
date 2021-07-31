import React, { useEffect, memo } from "react";

// third party imports
import { useRouter } from 'next/router';
import { Navbar } from "react-bootstrap";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// local imports
import { getMenuListData } from "./_redux/HeaderAction/HeaderAction";
import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";

const HeaderMenu = ({ toggleNav }) => {
  const { menuList } = useSelector((state) => state.HeaderReducer);
  const router       = useRouter();
  const dispatch     = useDispatch();

  useEffect(() => {
    dispatch(getMenuListData());
  }, []);

  /**
   * Click Menu Link & Redirect to that page
   * 
   * @since 1.0.0
   * 
   * @param string categorySlug
   * 
   * return void
   */
  const clickMenuLink = ( categorySlug ) => {
    router.push(`/products?category=${categorySlug}`);
  }

  return (
    <div className="menu_list">
      <Navbar.Collapse id={toggleNav}>
        <Menu
          menuButton={
            <MenuButton className="font-weight-bold">
              <img
                src="/images/logos/menu.png"
                className="menu pr-2"
                style={{ width: 30 }}
              />
              <Translate>All Categories</Translate>
            </MenuButton>
          }
          key={1}
        >
          {menuList.map((category, i) => {
            if (category.childs.length === 0) {
              return <MenuItem onClick={() => clickMenuLink(category.id)} key={i}><Translate>{category.name}</Translate></MenuItem>;
            } else {
              return (
                <SubMenu key={i} label={translate(category.name)}>
                  {category.childs.map((subCategory, i) => {
                    if (subCategory.childs.length === 0) {
                      return <MenuItem key={i} onClick={() => clickMenuLink(subCategory.id)}><Translate>{subCategory.name}</Translate></MenuItem>;
                    } else {
                      return (
                        <SubMenu key={i} label={translate(subCategory.name)} onClick={() => clickMenuLink(subCategory.id)}>
                          {subCategory.childs.map((subCtgOne, i) => (
                            <MenuItem key={i} onClick={() => clickMenuLink(subCtgOne.id)}>
                              <Translate>{subCtgOne.name}</Translate>
                            </MenuItem>
                          ))}
                        </SubMenu>
                      );
                    }
                  })}
                </SubMenu>
              );
            }
          })}
        </Menu>

        {menuList.length > 0 &&
          menuList.map((category, i) => (
            <Menu
              menuButton={
                <MenuButton>
                  {translate(category.name)}{" "}
                  <FontAwesomeIcon
                    className="custom-fontAwesome"
                    icon={faCaretDown}
                  />
                </MenuButton>
              }
              key={i}
            >
              {category.childs.length > 0 &&
                category.childs.map((subCategory, i) => {
                  if (subCategory.childs.length === 0) {
                    return <MenuItem onClick={() => clickMenuLink(subCategory.id)} key={i}><Translate>{subCategory.name}</Translate></MenuItem>;
                  } else {
                    return (
                      <SubMenu key={i} label={translate(subCategory.name)}>
                        {subCategory.childs.length > 0 &&
                          subCategory.childs.map((subCtgOne, i) => (
                            <MenuItem onClick={() => clickMenuLink(subCtgOne.id)} key={i}><Translate>{subCtgOne.name}</Translate></MenuItem>
                          ))}
                      </SubMenu>
                    );
                  }
                })}
            </Menu>
          ))}
      </Navbar.Collapse>
    </div>
  );
};

export default memo(HeaderMenu);
