import * as Types from "../Type/Types";

const initialState = {
  products: [],
  filteredProducts: [],
  categories: [],
  filterParams: {
    type: "",
    search: "",
    category: [],
    brand: [],
    min_price: null,
    max_price: null,
    attributes: null,
    rating: null,
    order_by: "",
    order: "",
    page: 1,
    paginate_no: 20,
  },
  paginate: {
    pages: [],
    current_page: null,
    first_page_url: null,
    from: null,
    last_page: null,
    last_page_url: null,
    next_page_url: null,
    per_page: null,
    prev_page_url: null,
    to: null,
    total: null,
  },
  isLoading: false,
  error: false,
};

function CategoryWiseProductReducer(state = initialState, { type, payload }) {
  switch (type) {
    case Types.INIT_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_PRODUCT_LIST:
      const totalPage = Math.ceil(payload.data.total / payload.data.per_page);

      return {
        ...state,
        isLoading: payload.isLoading,
        products: payload.data.data,
        paginate: {
          pages: [...new Array(totalPage)],
          current_page: payload.data.data.current_page,
          first_page_url: payload.data.first_page_url,
          from: payload.data.from,
          last_page: payload.data.last_page,
          last_page_url: payload.data.last_page_url,
          next_page_url: payload.data.next_page_url,
          per_page: payload.data.per_page,
          prev_page_url: payload.data.prev_page_url,
          to: payload.data.to,
          total: payload.data.total,
        },
      };

    case Types.GET_FILTER_PRODUCT_LIST:
      const totalPage_ = Math.ceil(payload.data.total / payload.data.per_page);

      return {
        ...state,
        isLoading: payload.isLoading,
        products: payload.data.data,
        paginate: {
          pages: [...new Array(totalPage_)],
          current_page: payload.data.data.current_page,
          first_page_url: payload.data.first_page_url,
          from: payload.data.from,
          last_page: payload.data.last_page,
          last_page_url: payload.data.last_page_url,
          next_page_url: payload.data.next_page_url,
          per_page: payload.data.per_page,
          prev_page_url: payload.data.prev_page_url,
          to: payload.data.to,
          total: payload.data.total,
        },
      };

    case Types.GET_PRODUCT_LIST_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
      };

    case Types.INIT_FILTER_PRODUCT_LIST:
      return {
        ...state,
        isLoading: true,
      };

    case Types.GET_CATEGORIES:
      return {
        ...state,
        isLoading: payload.isLoading,
        categories: payload.data,
      };

    case Types.GET_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case Types.SET_FILTER_PARAM:
      return {
        ...state,
        filterParams: payload,
      };

    case Types.RESET_FILTER_PARAM:
      return {
        ...state,
        filterParams: {
          ...state.filterParams,
          type: "",
          search: "",
          category: [],
          brand: [],
          min_price: null,
          max_price: null,
          attributes: null,
          rating: null,
          order_by: "",
          order: "",
          page: 1,
          paginate_no: 10,
        },
      };

    default:
      return state;
  }
}
export default CategoryWiseProductReducer;
