import Axios from "axios";
import * as Types from "../Type/Types";

export const getHomeCarouselData = () => async (dispatch) => {
  const data = [
    {
      title: "Shopping as you love",
      discountType: "Winter Sale",
      dicountRate: "50%",
      ProuctLink: "https://www.google.com",
      BannerURL: "https://deshibazaarbd.com/images/slider/01-Slider.jpeg",
    },
    {
      title: "Shopping as you love",
      discountType: "Winter Sale",
      dicountRate: "50%",
      ProuctLink: "https://www.google.com",
      BannerURL: "https://deshibazaarbd.com/images/slider/02-Slider.jpeg",
    },
    {
      title: "Shopping as you love",
      discountType: "Winter Sale",
      dicountRate: "50%",
      ProuctLink: "https://www.google.com",
      BannerURL: "https://deshibazaarbd.com/images/slider/03-Slider.jpeg",
    },
    {
      title: "Shopping as you love",
      discountType: "Winter Sale",
      dicountRate: "50%",
      ProuctLink: "https://www.google.com",
      BannerURL: "https://deshibazaarbd.com/images/slider/04-Slider.jpeg",
    },
  ];
  console.log("url => ", `${process.env.NEXT_PUBLIC_API_URL}sliders-frontend`);
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
