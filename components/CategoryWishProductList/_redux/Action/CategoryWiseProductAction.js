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

export const getFilteredProducts = (filterParamObj, source = {token: ""}) => async (dispatch) => {
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
    const res = await Axios.get(`${Base_Url}get-items?${filterParam}`, {cancelToken: source.token});
    responseData.isLoading = false;
    responseData.data = res.data.data;
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST, payload: responseData });
  } catch (error) {
    if(Axios.isCancel(error)) {
    }
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST_FAILED });
  }
};

export const getCategoryOrBrandDetails = (endPoint) => async (dispatch) => {
  const url = Base_Url + endPoint
  let response = {
    loading: true,
    data: {
      banner_url: "",
      childs: []
    }
  }
  
  try {
    dispatch({type: Types.GET_CATEGORY_OR_BRAND_DETAILS, payload: response})

    const res = await Axios.get(url)
    response.loading = false;
    response.data.banner_url = res.data.data.banner_url;
    response.data.childs = res.data.data.childs;

    dispatch({type: Types.GET_CATEGORY_OR_BRAND_DETAILS, payload: response})
  } catch (err) {
    console.log('categories details err => ', err)
  }
}

export const setFilterParams = (filterParams) => ({
  type: Types.SET_FILTER_PARAM,
  payload: filterParams,
});

export const resetFilterParams = () => ({
  type: Types.RESET_FILTER_PARAM
});
