import Axios from 'axios';
import * as Types from "../Type/Types";

export const getCompanyPolicyList = () => (dispatch) => {
    // const responseData = {
    //     data: [],
    //     status: false,
    //     isLoading: true,
    // }
    // dispatch({type: Types.GET_COMPANY_POLICY_LIST, payload: responseData});
    //this data is use for only test
    const data = [
        {
            title: "30 days return",
            description: "no question ask",
            icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/product-return-1959065-1652786.png"
        },
        {
            title: "secure payment",
            description: "100% secure payment",
            icon: "https://img.icons8.com/ios/452/card-in-use.png"
        },
        {
            title: "24/7 support",
            description: "dedicated support",
            icon: "https://pics.freeicons.io/uploads/icons/png/2515875551582823581-512.png"
        },
     
    ]
    const responseData = {
        data: data,
        status: true,
        isLoading: false,
    }
    dispatch({type: Types.GET_COMPANY_POLICY_LIST, payload: responseData});
}