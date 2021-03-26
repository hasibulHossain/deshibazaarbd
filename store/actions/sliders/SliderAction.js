import * as Types from "../../Types";
import axios from "axios";

export const fetchSliders = () => (dispatch) => {
  dispatch({ type: Types.GET_SLIDERS_LOADING, payload: true });

  axios.get(`${process.env.NEXT_PUBLIC_API_URL}sliders-frontend`)
    .then(res => {
      dispatch({ type: Types.GET_SLIDERS, payload: res.data.data });
    });
};
