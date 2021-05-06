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
            productImg: "https://atelierninetynine.com/wp-content/uploads/2015/09/Valentino_atelier99.jpg"
        },
        {
            title: "Men's Watches",
            rating: 3,
            price: 430,
            stock: 250,
            productImg: "https://fossil.scene7.com/is/image/FossilPartners/FS5790-alt?$sfcc_fos_medium$"
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
            productImg: "https://www.mercator-ocean.fr/wp-content/uploads/2019/11/Mock-Up_BlueBookCopernicus_2.jpg"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_SHOP_BY_CATEGORIES_LIST, payload: responseData});
}