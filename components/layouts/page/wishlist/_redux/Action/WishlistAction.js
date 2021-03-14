import * as Types from "../Types/Types";
import Axios from "axios";

// export const getWishList = () => (dispatch) => {
//     const responseList = {
//       status: false,
//       isLoading: true,
//       wishList: []
//     }
//     dispatch({ type: Types.GET_WISHLIST_DATA, payload: responseList });
//     Axios.get(`${process.env.NEXT_PUBLIC_API_URL}wishlist`)
//       .then((res) => {
//         console.log('res data for wishlist:>> ', res);

//         if (res.data.status) {
//           responseList.status = res.data.status;
//           responseList.wishList = res.data.data;
//           responseList.isLoading = false;
//           dispatch({ type: Types.GET_WISHLIST_DATA, payload: responseList })
//         }
//       })
//   }