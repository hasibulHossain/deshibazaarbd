import Axios from 'axios';
import * as Types from "../Type/Types";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getTopProductList = () => (dispatch) => {
    const responseData = {
        data: [],
        status: true,
        isLoading: true,
    }
    dispatch({type: Types.GET_TOP_PRODUCTS_LIST, payload: responseData});

    Axios.get(`${baseUrl}get-items?type=hot-deal&paginate_no=5`)
    .then(res => {
        responseData.data = res.data.data.data;
        responseData.isLoading = false;
        dispatch({type: Types.GET_TOP_PRODUCTS_LIST, payload: responseData});
    })
    .catch(err => {
        console.log('hot deals err => ', err)
    })

}