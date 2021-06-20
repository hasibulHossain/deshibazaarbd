import React, { useEffect } from "react";

// third party imports
import { Navbar } from "react-bootstrap";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";

// local imports
import { getMenuListData } from "./_redux/HeaderAction/HeaderAction";

const HeaderMenu = ({ toggleNav }) => {
  const { menuList } = useSelector((state) => state.HeaderReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenuListData());
  }, []);

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
              {"ALL CATEGORIES"}
            </MenuButton>
          }
          key={1}
        >
          {menuList.map((category, i) => {
            if (category.childs.length === 0) {
              return <MenuItem key={i}>{category.name}</MenuItem>;
            } else {
              return (
                <SubMenu key={i} label={category.name}>
                  {category.childs.map((subCategory, i) => {
                    if (subCategory.childs.length === 0) {
                      return <MenuItem key={i}>{subCategory.name}</MenuItem>;
                    } else {
                      return (
                        <SubMenu key={i} label={subCategory.name}>
                          {subCategory.childs.map((subCtgOne, i) => (
                            <MenuItem key={i}>{subCtgOne.name}</MenuItem>
                          ))}
                        </SubMenu>
                      );
                    }
                  })}
                </SubMenu>
              );
            }
          })}

          <SubMenu label="Product Category">
            <MenuItem>Category-1</MenuItem>
            <MenuItem>Category-2</MenuItem>
            <SubMenu label="Product Sub Category">
              <MenuItem>Category Sub-1</MenuItem>
              <MenuItem>Category Sub-2</MenuItem>
              <MenuItem>Category Sub-3</MenuItem>
            </SubMenu>
          </SubMenu>
        </Menu>

        {menuList.length > 0 &&
          menuList.map((category, i) => (
            <Menu
              menuButton={
                <MenuButton>
                  {category.name}{" "}
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
                    return <MenuItem>{subCategory.name}</MenuItem>;
                  } else {
                    return (
                      <SubMenu key={i} label={subCategory.name}>
                        {subCategory.childs.length > 0 &&
                          subCategory.childs.map((subCtgOne, i) => (
                            <MenuItem key={i}>{subCtgOne.name}</MenuItem>
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

export default HeaderMenu;
