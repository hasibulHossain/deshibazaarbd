import Axios from 'axios';
import * as Types from "../Type/Types";

export const getHomeCarouselData = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_BANNER_CAROUSEL_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://i.ibb.co/zSbt1kD/store2-slider-bg.png"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://cdn5.vectorstock.com/i/1000x1000/52/04/online-shopping-e-commerce-banner-concept-vector-25035204.jpg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://cdn1.vectorstock.com/i/1000x1000/94/20/online-shop-e-commerce-service-banner-template-vector-25109420.jpg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://image.freepik.com/free-vector/e-commerce-online-shopping-banner-template_82574-11343.jpg"
        },
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_BANNER_CAROUSEL_LIST, payload: responseData});
}