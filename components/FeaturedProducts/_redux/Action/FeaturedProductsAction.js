import Axios from "axios";
import * as Types from "../Type/Types";

const Base_Url = process.env.NEXT_PUBLIC_API_URL;

export const getFeaturedProductList = () => async (dispatch) => {
  const data = [
    {
      title: "Antisocial T-shirt",
      rating: 5,
      price: 230,
      stock: 250,
      productImg:
        "https://m.media-amazon.com/images/I/61tZQmRl5oL._AC._SR360,460.jpg",
      productDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
      offerPrice: 200,
      categories: "Vegetables, Fresh Vegetables, Daily Food",
      tags: "Vegetables",
      color: [
        { colorCode: "#f94c5a" },
        { colorCode: "#ffd447" },
        { colorCode: "#292929" },
        { colorCode: "#5cb2e1" },
      ],
      productGallery: [
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
        {
          img: "https://i.ibb.co/vL0SPsd/10-590-X668-crop-center-removebg-preview.png",
        },
      ],
    },
  ];

  try {
    dispatch({ type: Types.INIT_FEATURED_PRODUCT_LIST });
    const res = await Axios.get(`${Base_Url}get-items`);
    const data = res.data.data.data;
    dispatch({
      type: Types.GET_FEATURED_PRODUCT_LIST,
      payload: { ProductList: data },
    });
  } catch (error) {
    dispatch({
      type: Types.ERROR_OCCURRED,
      payload: { error: true },
    });
  }
};

export const getFeaturedProductDetails = (sku) => async (dispatch) => {
  try {
    const res = await Axios.get(`${Base_Url}get-item-detail/${sku}`);
    const data = res.data.data;
    dispatch({
      type: Types.GET_FEATURED_PRODUCT_DETAILS,
      payload: { product: data },
    });
  } catch (err) {
    dispatch({ type: Types.ERROR_OCCURRED });
  }
};

export const resetFeaturedProductDetails = () => {
  return {
    type: Types.RESET_FEATURED_PRODUCT_DETAILS,
  };
};
