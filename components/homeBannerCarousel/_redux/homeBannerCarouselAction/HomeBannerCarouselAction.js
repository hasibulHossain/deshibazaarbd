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
            BannerURL: "https://i.ibb.co/VgFb7XN/01-Slider.jpg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://i.ibb.co/Y4gtp8Y/02-Slider.jpg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://i.ibb.co/bFhznRD/03-Slider.jpg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://i.ibb.co/7QMpmpQ/04-Slider.jpg"
        },
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_BANNER_CAROUSEL_LIST, payload: responseData});
}