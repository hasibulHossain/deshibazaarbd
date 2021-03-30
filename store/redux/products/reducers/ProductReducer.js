import * as Types from "../../../Types";

const initialState = {
  products: [],
  productsPaginated: null,
  loading: false,
  error: null,
  filterProduct: {
    category: null,
    brand: null,
    min_price: null,
    max_price: null,
    rating: null,
  },
  pushDataString: '',
  category: [],
  brands: [],
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case Types.GET_PRODUCTS:
      console.log(`action.payload`, action.payload);
      return {
        ...state,
        productsPaginated: action.payload.paginated,
        products: (action.payload.data !== null && typeof action.payload.data !== 'undefined') ? action.payload.data : [],
        loading: false,
      };
    //get category list data 
    case Types.GET_CATEGORIES_LIST:
      return {
        ...state,
        category: action.payload.data
      }
    case Types.GET_BRANDS_LIST_DATA:
      return {
        ...state,
        brands: action.payload.data
      }
    case Types.CHANGE_PRODUCT_FILTER:
      const filterProduct = { ...state.filterProduct }
      filterProduct[action.payload.name] = action.payload.value;
      return {
        ...state,
        filterProduct,
        pushDataString: getPushDataFromFilterProduct(filterProduct)
      }
    default:
      return {
        ...state,
      };
      break;
  }
};

function getPushDataFromFilterProduct(filterProduct) {
  let pushDataString = '';

  Object.keys(filterProduct).map((item, index) => {
    if (filterProduct[item] !== null) {
      const singleItem = filterProduct[item];

      if (item === 'category') {
        pushDataString += '&category=' + singleItem.short_code;
      }

      if (item === 'brand') {
        pushDataString += '&brand=' + singleItem.slug;
      }

      if (item === 'min_price') {
        pushDataString += '&min_price=' + singleItem;
      }

      if (item === 'max_price') {
        pushDataString += '&max_price=' + singleItem;
      }

      if (item === 'rating') {
        pushDataString += '&rating=' + singleItem;
      }

    }
  });
  return pushDataString;
}

function setFilterProductFromPushData() {

}
export default ProductReducer;
