import { combineReducers } from "redux";
import BestSellerReducer from "../components/BestSeller/_redux/Reducer/BestSellerReducer";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import ProductTopListReducer from "../components/ProductTopList/_redux/Reducer/ProductTopListReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import ShopByCategoriesReducer from "../components/ShopByCategory/_redux/Reducer/ShopByCategoriesReducer";

export default combineReducers({
    HomeBannerCarouselReducer: HomeBannerCarouselReducer,
    BestSellerReducer: BestSellerReducer,
    ProductTopListReducer: ProductTopListReducer,
    ShopByCategoriesReducer: ShopByCategoriesReducer,
    CompanyPolicyReducer: CompanyPolicyReducer,
    ShopReducer: ShopReducer,
});
