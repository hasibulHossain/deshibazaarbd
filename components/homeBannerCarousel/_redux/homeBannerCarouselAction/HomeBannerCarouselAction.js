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
            BannerURL: "https://deshibazaarbd.com/images/slider/01-Slider.jpeg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://deshibazaarbd.com/images/slider/02-Slider.jpeg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://deshibazaarbd.com/images/slider/03-Slider.jpeg"
        },
        {
            title: "Sopping as you love",
            discountType: "Winter Sale",
            dicountRate: "50%",
            ProuctLink: "https://www.google.com",
            BannerURL: "https://deshibazaarbd.com/images/slider/04-Slider.jpeg"
        },
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_BANNER_CAROUSEL_LIST, payload: responseData});
}