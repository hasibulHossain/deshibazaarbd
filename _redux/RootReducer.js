import { combineReducers } from "redux";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import ShopByCategoriesReducer from "../components/ShopByCategory/_redux/Reducer/ShopByCategoriesReducer";

export default combineReducers({
    HomeBannerCarouselReducer: HomeBannerCarouselReducer,
    ShopByCategoriesReducer: ShopByCategoriesReducer,
    CompanyPolicyReducer: CompanyPolicyReducer,
    ShopReducer: ShopReducer,
});
