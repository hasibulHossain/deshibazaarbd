import * as Types from "../../Types";

const initialState = {
  sliderList: [],
  isLoading: false,
  error: null,
};

const SliderReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case Types.GET_SLIDERS:
      return {
        ...state,
        sliderList: action.payload.sliderList,
        isLoading: action.payload.isLoading

      };

    default:
      return {
        ...state,
      };
      break;
  }
};

export default SliderReducer;
