import Axios from "axios";
import * as Types from "../Type/Types";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

/**
 * Get Categories
 * 
 * @since 1.0.0
 * 
 * @param int parentID Default null, when null passed, all categories will be showed
 * 
 * @returns void Dispatch `GET_CATEGORIES` action
 */
export const getCategories = (parentID = null) => async (dispatch) => {
  let response = {
    loading: true,
    data   : []
  }

  parentID = (typeof parentID === 'undefined' || parentID === null ) ? null : parentID;
  
  try {
    dispatch({ type: Types.GET_CATEGORIES, payload: response });
    const res        = await Axios.get(`${baseUrl}categories`);
    response.loading = false;
    response.data    = parentID !== 'all' ? getCategoryByParentID( res.data.data, parentID ) : res.data.data;
    dispatch({ type: Types.GET_CATEGORIES, payload: response });
  } catch (error) {
    response.loading = false;
    dispatch({ type: Types.GET_CATEGORIES, payload: response });
  }
};

/**
 * Get category by parent ID
 * 
 * @since 1.0.0
 * 
 * @param array allCategories 
 * @param int parentID 
 * 
 * @returns array categories after filtering
 */
const getCategoryByParentID = ( allCategories = [], parentID = null) => {
  return allCategories.filter(cat => cat.parent_id === parentID);
}
