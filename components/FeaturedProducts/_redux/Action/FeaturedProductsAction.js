import Axios from 'axios';
import * as Types from "../Type/Types";

export const getFeaturedProductList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_FEATURED_PRODUCT_LIST, payload: responseData});
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
            title: "Deshi Bazzar Jacket",
            rating: 4,
            price: 600,
            stock: 200,
            productImg: "https://i.ibb.co/HxPy9PP/t-shirt2-removebg-preview.png"
        },
        {
            title: "Deshi Bazzar T-shirt",
            rating: 5,
            price: 400,
            stock: 250,
            productImg: "https://i.ibb.co/HKBVM30/t-shirt-removebg-preview.png"
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
            title: "The Blue Book",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://i.ibb.co/jHv8dL8/Mock-Up-Blue-Book-Copernicus-2-removebg-preview.png"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_FEATURED_PRODUCT_LIST, payload: responseData});
}