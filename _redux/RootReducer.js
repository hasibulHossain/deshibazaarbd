import { combineReducers } from "redux";

import GlobalReducer from "./store/reducer/globalReducer";
import CategoryWiseProductReducer from "../components/CategoryWishProductList/_redux/Reducer/CategoryWiseProductReducer";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import DealFlashReducer from "../components/DealFlash/_redux/Reducer/DealFlashReducer";
import HeaderReducer from "../components/Header/_redux/HeaderReducer/HeaderReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import RegisterReducer from "../components/LoginRegistration/_redux/Reducer/RegisterReducer";
import ProductTopListReducer from "../components/ProductTopList/_redux/Reducer/ProductTopListReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import CategoryReducer from "../components/category/_redux/Reducer/CategoryReducer";
import AuthReducer from "../components/LoginRegistration/_redux/Reducer/AuthReducer";
import UserDataReducer from "../components/_redux/getUserData/Reducer/UserDataReducer";
import ProfileAccountSettingReducer from "../components/ProfileAccountSetting/_redux/Reducer/ProfileAccountSettingReducer";
import WishlistReducer from "../components/Wishlist/_redux/Reducer/WishlistReducer";
import CartReducer from "../components/carts/_redux/reducer/CartReducer";
import SearchReducer from "../components/SearchInput/_redux/Reducer/SearchInputReducer";
import DeliveryInfoReducer from "../components/Delivery/_redux/Reducer/DeliveryInfoReducer";
import ProfileUpdateReducer from "../components/myprofile/_redux/Reducer/ProfileUpdateReducer";
import PaymentMethodReducer from "../components/PaymentMethod/_redux/Reducer/PaymentMethodReducer";
import ProductReducer from "../components/products/_redux/Reducer/ProductReducer";
import OrderReducer from "../components/orders/_redux/reducer/OrderReducer";
import ProductReviewReducer from "../components/ProductReview/_redux/reducer/productReviewReducer";

export default combineReducers({
  GlobalReducer               : GlobalReducer,
  HeaderReducer               : HeaderReducer,
  HomeBannerCarouselReducer   : HomeBannerCarouselReducer,
  ProductTopListReducer       : ProductTopListReducer,
  CategoryReducer             : CategoryReducer,
  CompanyPolicyReducer        : CompanyPolicyReducer,
  DealFlashReducer            : DealFlashReducer,
  CategoryWiseProductReducer  : CategoryWiseProductReducer,
  ShopReducer                 : ShopReducer,
  RegisterReducer             : RegisterReducer,
  AuthReducer                 : AuthReducer,
  UserDataReducer             : UserDataReducer,
  ProfileAccountSettingReducer: ProfileAccountSettingReducer,
  WishlistReducer             : WishlistReducer,
  CartReducer                 : CartReducer,
  SearchReducer               : SearchReducer,
  DeliveryInfoReducer         : DeliveryInfoReducer,
  ProfileUpdateReducer        : ProfileUpdateReducer,
  PaymentMethodReducer        : PaymentMethodReducer,
  ProductReducer              : ProductReducer,
  OrderReducer                : OrderReducer,
  ProductReviewReducer        : ProductReviewReducer
});
