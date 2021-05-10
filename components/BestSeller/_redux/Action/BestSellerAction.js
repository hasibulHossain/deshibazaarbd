import Axios from 'axios';
import * as Types from "../Type/Types";

export const getBestSellerList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_BEST_SELLER_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Turnip",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Litchi",
            rating: 4,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/tcThVXd/19-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Tometo",
            rating: 3,
            price: 430,
            stock: 250,
            productImg: "https://i.ibb.co/8DXM1zv/21-590-X668-crop-center-removebg-preview.png"
        },
        
        {
            title: "Eggplant",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/kHQD9q9/22-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Fresh Apple",
            rating: 2,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/bBQZvqN/24-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Sweet Pumpkin",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/fxc2YTf/29-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Shrimp",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/b6ty9gb/36-1-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Coconut",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/wgMKdFb/37-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Nuts",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/cTZjHkt/40-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Almonds",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/RGnBGVX/41-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Juices Pack",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/8sV05YG/47-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Orange Juice",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/25Zcyqf/49-590-X668-crop-center-removebg-preview.png"
        },
        {
            title: "Watermelon",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/T2WbBTP/cat1-removebg-preview.png"
        },
        {
            title: "Cauliflower",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/Fh9mszs/cat2-removebg-preview.png"
        },
        {
            title: "Fresh Fruits",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/XktSWjR/cat3-removebg-preview.png"
        },
        {
            title: "Tometo",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/3Rj1NXc/cat5-removebg-preview.png"
        },
        {
            title: "Marine Fish",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/4J2d24j/cat6-removebg-preview.png"
        },
        {
            title: "Fresh Apples",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/HG4Rwtr/cat7-removebg-preview.png"
        },
        {
            title: "Cooking Spices",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/QnpyyBm/cat9-removebg-preview.png"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_BEST_SELLER_LIST, payload: responseData});
}