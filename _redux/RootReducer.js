import { combineReducers } from "redux";
import BestSellerReducer from "../components/BestSeller/_redux/Reducer/BestSellerReducer";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import DealFlashReducer from "../components/DealFlash/_redux/Reducer/DealFlashReducer";
import HeaderReducer from "../components/Header/_redux/HeaderReducer/HeaderReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import ProductTopListReducer from "../components/ProductTopList/_redux/Reducer/ProductTopListReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import ShopByCategoriesReducer from "../components/ShopByCategory/_redux/Reducer/ShopByCategoriesReducer";

export default combineReducers({
    HeaderReducer: HeaderReducer,
    HomeBannerCarouselReducer: HomeBannerCarouselReducer,
    BestSellerReducer: BestSellerReducer,
    ProductTopListReducer: ProductTopListReducer,
    ShopByCategoriesReducer: ShopByCategoriesReducer,
    CompanyPolicyReducer: CompanyPolicyReducer,
    DealFlashReducer: DealFlashReducer,
    ShopReducer: ShopReducer,
});
