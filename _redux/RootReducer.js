import { combineReducers } from "redux";

import GlobalReducer from "./store/reducer/globalReducer";
import BestSellerReducer from "../components/BestSeller/_redux/Reducer/BestSellerReducer";
import CategoryWiseProductReducer from "../components/CategoryWishProductList/_redux/Reducer/CategoryWiseProductReducer";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import DealFlashReducer from "../components/DealFlash/_redux/Reducer/DealFlashReducer";
import FastestDeliveryReducer from "../components/FastestDelivery/_redux/Reducer/FastestDeliveryReducer";
import FeaturedProductsReducer from "../components/FeaturedProducts/_redux/Reducer/FeaturedProductsReducer";
import HeaderReducer from "../components/Header/_redux/HeaderReducer/HeaderReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import RegisterReducer from "../components/LoginRegistration/_redux/Reducer/RegisterReducer";
import ProductTopListReducer from "../components/ProductTopList/_redux/Reducer/ProductTopListReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import ShopByCategoriesReducer from "../components/ShopByCategory/_redux/Reducer/ShopByCategoriesReducer";
import AuthReducer from "../components/LoginRegistration/_redux/Reducer/AuthReducer";
import UserDataReducer from "../components/_redux/getUserData/Reducer/UserDataReducer";
import ProfileAccountSettingReducer from "../components/ProfileAccountSetting/_redux/Reducer/ProfileAccountSettingReducer";
import WishlistReducer from "../components/Wishlist/_redux/Reducer/WishlistReducer";
import CartReducer from "../components/_redux/CartProduct/Reducer/CartReducer";
import SearchReducer from "../components/SearchInput/_redux/Reducer/SearchInputReducer";
import DeliveryInfoReducer from "../components/Delivery/_redux/Reducer/DeliveryInfoReducer";
import ProfileUpdateReducer from "../components/myprofile/_redux/Reducer/ProfileUpdateReducer";

export default combineReducers({
  GlobalReducer: GlobalReducer,
  HeaderReducer: HeaderReducer,
  HomeBannerCarouselReducer: HomeBannerCarouselReducer,
  BestSellerReducer: BestSellerReducer,
  ProductTopListReducer: ProductTopListReducer,
  ShopByCategoriesReducer: ShopByCategoriesReducer,
  FastestDeliveryReducer: FastestDeliveryReducer,
  FeaturedProductsReducer: FeaturedProductsReducer,
  CompanyPolicyReducer: CompanyPolicyReducer,
  DealFlashReducer: DealFlashReducer,
  CategoryWiseProductReducer: CategoryWiseProductReducer,
  ShopReducer: ShopReducer,
  RegisterReducer: RegisterReducer,
  AuthReducer: AuthReducer,
  UserDataReducer: UserDataReducer,
  ProfileAccountSettingReducer: ProfileAccountSettingReducer,
  WishlistReducer: WishlistReducer,
  CartReducer: CartReducer,
  SearchReducer: SearchReducer,
  DeliveryInfoReducer: DeliveryInfoReducer,
  ProfileUpdateReducer: ProfileUpdateReducer,
});
