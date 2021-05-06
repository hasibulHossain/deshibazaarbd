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
            title: "Antisocial T-shirt",
            rating: 5,
            price: 230,
            stock: 250,
            productImg: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80"
        },
        {
            title: "Valentino Fragrance",
            rating: 4,
            price: 430,
            stock: 250,
            productImg: "https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg"
        },
        {
            title: "Men's Watches",
            rating: 3,
            price: 430,
            stock: 250,
            productImg: "http://fiestafarms.ca/custom/uploads/2016/06/pomegranate_4.jpg"
        },
        
        {
            title: "Girls Maxi/Full Length Party Dress",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://post.healthline.com/wp-content/uploads/2020/09/AN445-Dragonfruit-732x549-thumb-732x549.jpg"
        },
        {
            title: "girl frock suit design",
            rating: 2,
            price: 1230,
            stock: 50,
            productImg: "https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"
        },
        {
            title: "The Blue Book",
            rating: 5,
            price: 1230,
            stock: 50,
            productImg: "https://static.toiimg.com/thumb/80231652.cms?width=804&height=603&resizemode=4&imgsize=235892"
        },
        
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_BEST_SELLER_LIST, payload: responseData});
}