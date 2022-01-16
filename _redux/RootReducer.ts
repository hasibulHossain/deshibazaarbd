import { combineReducers } from "redux";

import GlobalReducer, { IGlobalReducer } from "./store/reducer/GlobalReducer";
import CategoryWiseProductReducer from "../components/CategoryWishProductList/_redux/Reducer/CategoryWiseProductReducer";
import CompanyPolicyReducer from "../components/CompanyPolicy/_redux/Reducer/CompanyPolicyReducer";
import DealFlashReducer from "../components/DealFlash/_redux/Reducer/DealFlashReducer";
import HeaderReducer from "../components/Header/_redux/HeaderReducer/HeaderReducer";
import HomeBannerCarouselReducer from "../components/homeBannerCarousel/_redux/homeBannerCarouselReducer/HomeBannerCarouselReducer";
import ProductTopListReducer from "../components/ProductTopList/_redux/Reducer/ProductTopListReducer";
import ShopReducer from "../components/Shop/_redux/Reducer/ShopReducer";
import StoreReducer from "../components/store/_redux/reducer/store-reducer";
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
import ProductReviewReducer from "../components/product-review/_redux/reducer/productReviewReducer";
import ShippingInfoReducer from "../components/ShippingInfo/_redux/Reducer/ShippingInfoReducer";
import FooterReducer from "../components/Footer/_redux/Reducer/FooterReducer";
import ReviewReducer from "../components/product-review/_redux/reducer/productReviewReducer";
import ForgetPasswordReducer from '../components/forget-password/_redux/reducer/forget-password-reducer';
import StoreInfoReducer from '../components/store-info/_redux/reducer/store-info_reducer';
import NewOfferReducer from "../components/NewCollection/_redux/Reducer/new-offer-reducer";

export interface IRootReducer {
  global                      : IGlobalReducer;
  HeaderReducer               : object; // @TODO: Need to implement interface for all of this reducers.
  HomeBannerCarouselReducer   : object;
  ProductTopListReducer       : object;
  CategoryReducer             : object;
  CompanyPolicyReducer        : object;
  DealFlashReducer            : object;
  NewOfferReducer             : object;
  CategoryWiseProductReducer  : object;
  ShopReducer                 : object;
  StoreReducer                : object;
  StoreInfoReducer            : object;
  AuthReducer                 : object;
  UserDataReducer             : object;
  ProfileAccountSettingReducer: object;
  WishlistReducer             : object;
  CartReducer                 : object;
  SearchReducer               : object;
  DeliveryInfoReducer         : object;
  ProfileUpdateReducer        : object;
  PaymentMethodReducer        : object;
  ProductReducer              : object;
  OrderReducer                : object;
  ProductReviewReducer        : object;
  ShippingInfoReducer         : object;
  FooterReducer               : object;
  ReviewReducer               : object;
  ForgetPasswordReducer       : object;
}

const reducers = {
  global                      : GlobalReducer,
  HeaderReducer               : HeaderReducer,
  ProductTopListReducer       : ProductTopListReducer,
  CategoryReducer             : CategoryReducer,
  CompanyPolicyReducer        : CompanyPolicyReducer,
  DealFlashReducer            : DealFlashReducer,
  NewOfferReducer             : NewOfferReducer,
  ShopReducer                 : ShopReducer,
  StoreReducer                : StoreReducer,
  StoreInfoReducer            : StoreInfoReducer,
  AuthReducer                 : AuthReducer,
  UserDataReducer             : UserDataReducer,
  WishlistReducer             : WishlistReducer,
  CartReducer                 : CartReducer,
  SearchReducer               : SearchReducer,
  DeliveryInfoReducer         : DeliveryInfoReducer,
  ProfileUpdateReducer        : ProfileUpdateReducer,
  PaymentMethodReducer        : PaymentMethodReducer,
  ProductReducer              : ProductReducer,
  OrderReducer                : OrderReducer,
  ProductReviewReducer        : ProductReviewReducer,
  ShippingInfoReducer         : ShippingInfoReducer,
  FooterReducer               : FooterReducer,
  ReviewReducer               : ReviewReducer,
  ForgetPasswordReducer       : ForgetPasswordReducer,
  HomeBannerCarouselReducer   : HomeBannerCarouselReducer,
  CategoryWiseProductReducer  : CategoryWiseProductReducer,
  ProfileAccountSettingReducer: ProfileAccountSettingReducer,
};


export default combineReducers(reducers);
