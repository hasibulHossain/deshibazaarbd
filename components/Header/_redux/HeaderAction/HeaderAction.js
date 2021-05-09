import Axios from 'axios';
import * as Types from "../Type/Types";

export const getMenuListData = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_MENU_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            menu: "clothing & accessories",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
        {
            menu: "baby & kids",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
        {
            menu: "health",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
        {
            menu: "Beauty & personal care",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
        {
            menu: "Electronics",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
        {
            menu: "toys & games",
            subMenu1: [
                {
                    SubMenu: "Gents Dress",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [],
                },
                {
                    SubMenu: "Brand T-shirt",
                    subMenu2: [
                        { subMenu: "Sultan Brand" },
                        { subMenu: "Arong" },
                        { subMenu: "Dada" },
                    ]
                },
                {
                    SubMenu: "Sunglasses",
                    subMenu2: []
                },
                {
                    SubMenu: "Watch",
                    subMenu2: [
                        { subMenu: "Benson" },
                        { subMenu: "Cartier" },
                        { subMenu: "Dada" },
                    ]
                },
            ]
        },
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({ type: Types.GET_MENU_LIST, payload: responseData });
}