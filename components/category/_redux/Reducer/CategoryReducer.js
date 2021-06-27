import * as Types from "../Type/Types";

const initialState = {
  categories: [],
  loading   : false,
};

function CategoryReducer(state = initialState, { type, payload }) {

  switch (type) {
    case Types.GET_CATEGORIES:
      return {
        ...state,
        categories: payload.data,
        loading   : payload.loading,
      };

    default:
      return state;
  }
}
export default CategoryReducer;
