import { combineReducers } from "redux";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import ShopByCategoriesReducer from "../components/ShopByCategory/_redux/Reducer/ShopByCategoriesReducer";

export default combineReducers({
    HomeBannerCarouselReducer: HomeBannerCarouselReducer,
    ShopByCategoriesReducer: ShopByCategoriesReducer,
});
