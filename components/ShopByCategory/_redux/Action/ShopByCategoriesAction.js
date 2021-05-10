import Axios from 'axios';
import * as Types from "../Type/Types";

export const getProductCategiesListByShop = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_SHOP_BY_CATEGORIES_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Antisocial T-shirt",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://m.media-amazon.com/images/I/61tZQmRl5oL._AC._SR360,460.jpg"
        },
        {
            title: "Valentino Fragrance",
            rating: 4,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/1QWFWqL/axe-signature-deo-500x500.jpg"
        },
        {
            title: "Men's Watches",
            rating: 3,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/pJ0S828/uniq-w-14.jpg"
        },
        
        {
            title: "Girls Maxi/Full Length Party Dress",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://rukminim1.flixcart.com/image/714/857/k5pn6vk0/kids-lehenga-choli/f/e/7/8-9-years-kids-blue-katri-08-rayasa-original-imafhgrxahehxn3v.jpeg"
        },
        {
            title: "girl frock suit design",
            rating: 2,
            price: 1230,
            stock: 50,
            productImg: "https://i.pinimg.com/originals/03/b7/ea/03b7ea3ad366cbf9dd45b49bfb9bada9.jpg"
        },
        {
            title: "Digital Camera",
            rating: 5,
            price: 12500,
            stock: 50,
            productImg: "https://i.ibb.co/xYB48B0/q-flora-l-681.jpg"
        },
        {
            title: "CCTV",
            rating: 3,
            price: 5500,
            stock: 50,
            productImg: "https://i.ibb.co/vwv5Z4H/abor-05.jpg"
        },
        {
            title: "Gents Jacket",
            rating: 4,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/3CwKrwx/sdj07f-3.jpg"
        },
        {
            title: "Beauty & Care",
            rating: 3,
            price: 130,
            stock: 100,
            productImg: "https://i.ibb.co/D5ww8Dw/d.jpg"
        },
        {
            title: "Gents Jacket",
            rating: 2,
            price: 1030,
            stock: 50,
            productImg: "https://i.ibb.co/x7Dmjtr/quck-c-07-min.jpg"
        },
        {
            title: "Wall TV 24' ",
            rating: 4,
            price: 10500,
            stock: 50,
            productImg: "https://i.ibb.co/qgjXs7T/ntl-e-71.jpg"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_SHOP_BY_CATEGORIES_LIST, payload: responseData});
}