import Axios from "axios";
import * as Types from "../Type/Types";


/**
 * Get Categories
 * 
 * @since 1.0.0
 * 
 * @param int parentID Default null, when null passed, all categories will be showed
 * 
 * @returns void Dispatch `GET_CATEGORIES` action
 */
export const getCategories = (parentID = null, limit = null, type = null) => async (dispatch) => {
  let response = {
    loading: true,
    data   : []
  }

  parentID = (typeof parentID === 'undefined' || parentID === null ) ? null : parentID;
  let url = '';
  
  if (type === 'homepage') {
    url = `frontend-categories?type=${type}&limit=${limit}`
  } else {
    url = `categories`
  }

  try {
    dispatch({ type: Types.GET_CATEGORIES, payload: response });
    const res        = await Axios.get(url);
    response.loading = false;
    if (type === 'homepage') {
      response.data    = res.data.data;
    } else {
      response.data    = parentID !== 'all' ? getCategoryByParentID( res.data.data, parentID, limit ) : res.data.data;
    }
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
const getCategoryByParentID = ( allCategories = [], parentID = null, limit = null) => {
  const categories =  allCategories.filter(cat => (cat.parent_id === parentID && cat.short_code !== 'others'));
  
  if(typeof limit !== 'undefined' && limit !== null && ! isNaN(limit)) {
    return categories.slice(0, parseInt(limit));
  }
  
  return categories;
}
