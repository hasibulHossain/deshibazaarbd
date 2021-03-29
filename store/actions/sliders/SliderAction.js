import * as Types from "../../Types";
import axios from "axios";

export const fetchSliders = () => (dispatch) => {
  const responseList = {
    status: false,
    isLoading: true,
    sliderList: []
}
  dispatch({ type: Types.GET_SLIDERS, payload: responseList });

  axios.get(`${process.env.NEXT_PUBLIC_API_URL}sliders-frontend`)
    .then(res => {
      if (res.data.status) {
        responseList.status = res.data.status;
        responseList.sliderList = res.data.data;
        responseList.isLoading = false;
        dispatch({ type: Types.GET_SLIDERS, payload: responseList });
      }
    });
};
