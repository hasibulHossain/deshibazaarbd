import Axios from "axios";
import * as Types from "../Type/Types";

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
    const res = await Axios.get(`get-items?${filterParam}`, {cancelToken: source.token});
    responseData.isLoading = false;
    responseData.data = res.data.data;
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST, payload: responseData });
  } catch (error) {
    if(Axios.isCancel(error)) {
    } else {
      dispatch({ type: Types.GET_FILTER_PRODUCT_LIST_FAILED });
    }
  }
};

export const getProductsBySellerId = (id) => async dispatch => {
  const responseData = {
    data: [],
    isLoading: true,
  };
  const url = `get-items?seller_id=${id}`
  
  try {
    dispatch({ type: Types.INIT_FILTER_PRODUCT_LIST });
    const res = await Axios.get(url);
    responseData.isLoading = false;
    responseData.data = res.data.data;
    dispatch({ type: Types.GET_FILTER_PRODUCT_LIST, payload: responseData });
  } catch (error) {
      dispatch({ type: Types.GET_FILTER_PRODUCT_LIST_FAILED });
  }
}

export const getCategoryOrBrandDetails = (endPoint) => async (dispatch) => {
  const url = endPoint
  let response = {
    loading: true,
    data: {
      name: "",
      banner_url: "",
      childs: []
    }
  }

  try {
    dispatch({type: Types.GET_CATEGORY_OR_BRAND_DETAILS, payload: response})

    const res = await Axios.get(url);
    response.loading = false;
    response.data.banner_url = res.data.data.banner_url;
    response.data.name = res.data.data.name;
    if(endPoint.includes('categories')) {
      response.data.childs = res.data.data.childs.length > 5 ? res.data.data.childs.slice(0, 5) : res.data.data.childs
    }

    dispatch({type: Types.GET_CATEGORY_OR_BRAND_DETAILS, payload: response})
  } catch (err) {
    console.log('err => ', err)
  }
}

export const setFilterParams = (filterParams) => ({
  type: Types.SET_FILTER_PARAM,
  payload: filterParams,
});

export const resetFilterParams = () => ({
  type: Types.RESET_FILTER_PARAM
});

export const setCategories = (allCategories) => {
  
};
