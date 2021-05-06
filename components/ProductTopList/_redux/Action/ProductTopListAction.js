import Axios from 'axios';
import * as Types from "../Type/Types";

export const getTopProductList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_TOP_PRODUCTS_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "hot deal products",
            name: "top smart phone 2021",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg"
        },
        {
            title: "hot deal products",
            name: "top smart phone 2021",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://png.pngtree.com/thumb_back/fh260/background/20210227/pngtree-blue-3d-headset-background-banner-image_563472.jpg"
        },
        {
            title: "hot deal products",
            name: "top configure laptop 2021",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://image.freepik.com/free-vector/work-home-banner-flat-lay-top-view-office-desk-with-laptop-notebook-coffee-pencil-pen-realistic_174639-369.jpg"
        },
        {
            title: "hot deal products",
            name: "top smart phone 2021",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://hispeedsecuritynetwork.com.au/wp-content/uploads/2018/11/services-banner.jpg"
        },
      
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_TOP_PRODUCTS_LIST, payload: responseData});
}