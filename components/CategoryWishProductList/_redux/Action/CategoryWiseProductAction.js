import Axios from "axios";
import * as Types from "../Type/Types";

const Base_Url = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getCategories = () => async (dispatch) => {
  const responseData = {
    data: [],
    isLoading: true,
  };
  try {
    dispatch({ type: Types.GET_CATEGORIES, payload: responseData });
    const res = await Axios.get(`${Base_Url}categories`);
    responseData.isLoading = false;
    responseData.data = res.data.data;
    dispatch({ type: Types.GET_CATEGORIES, payload: responseData });
  } catch (error) {
    dispatch({ type: Types.GET_CATEGORIES_FAILED });
  }
};

export const getFilteredProducts = (filterParamObj) => async (dispatch) => {
  const filterParamObjClone = {
    ...filterParamObj,
    category: filterParamObj.category.join(","),
    brand: filterParamObj.brand.join(","),
  };

  const filterParam = Object.keys(filterParamObjClone)
    .filter((item) => filterParamObjClone[item])
    .map((item) => `${item}=${filterParamObjClone[item]}`)
    .join("&");

  const responseData = {
    data: [],
    isLoading: true,
  };

  try {
    dispatch({ type: Types.INIT_FILTER_PRODUCT_LIST });
    const res = await Axios(`${Base_Url}get-items?${filterParam}`);
    responseData.isLoading = false;
    responseData.data = res.data.data;
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST, payload: responseData });
  } catch (error) {
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST_FAILED });
  }
};

export const setFilterParams = (filterParams) => ({
  type: Types.SET_FILTER_PARAM,
  payload: filterParams,
});
