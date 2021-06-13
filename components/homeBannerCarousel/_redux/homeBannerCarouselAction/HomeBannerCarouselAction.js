import Axios from "axios";
import * as Types from "../Type/Types";

export const getHomeCarouselData = () => async (dispatch) => {
  try {
    dispatch({ type: Types.INIT_BANNER_CAROUSEL_LIST });
    const res = await Axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}sliders-frontend`
    );
    const data = res.data.data;
    dispatch({
      type: Types.GET_BANNER_CAROUSEL_LIST,
      payload: { carouselList: data },
    });
  } catch (error) {
    console.log("homebanner carousel error ", error);
    dispatch({ type: Types.FETCH_BANNER_CAROUSEL_LIST_FAILED });
  }
};
