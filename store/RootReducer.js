import { combineReducers } from "redux";
import VendorReducer from "./redux/vendors/reducers/VendorReducer";
import ProductReducer from "./redux/products/reducers/ProductReducer";
import ProductDetailReducer from "./redux/products/reducers/ProductDetailReducer";
import BrandReducer from "./redux/brands/reducers/BrandReducer";
import ProductWish from "./redux/productWishes/reducers/ProductWishReducer";
import MyOrder from "./redux/myOrders/reducers/MyOrderReducer";
import Wallet from "./redux/wallets/reducers/WalletReducer";
// import SliderReducer from "./sliders/SliderReducer";
// import AuthReducer from "./auth/AuthReducer";
import Notification from "./redux/notifications/reducers/NotificationReducer";
import RegisterReducer from "./reducers/auth/RegisterReducer";
import CartReducer from "./reducers/orders/CartReducer";
import OrderReducer from "./reducers/orders/OrderReducer";
import AuthReducer from "./reducers/auth/AuthReducer";
import VendorRegisterReducer from "./reducers/auth/VendorRegisterReducer";
import MenuReducer from "../components/layouts/Header/_redux/MenuReducer/MenuReducer";
import HomeCarouselReducer from "../pages/api/_redux/reducer/reducer";
import AudiencePoll from "./reducers/AudiencePoll/AudiencePoll";
import wishListReducer from "../components/WishList/_redux/Reducer/wishListReducer";
import UserDataReducer from "../components/getUserData/Reducer/UserDataReducer";
import UserReducer from "./reducers/user/UserReducer";
import MyOrderReducer from "./redux/myOrders/reducers/MyOrderReducer";
import PaymentReducer from "../components/layouts/page/payment/_redux/Reducer/PaymentReducer";
import ReviewReducer from "../components/layouts/page/productdetails/_redux/ReviewReducer/ReviewReducer";
import CheckoutPaymentReducer from "../components/layouts/page/CheckoutPayment/_redux/Reducer/CheckoutPayment";
import GiftCardListReducer from "../components/GiftCardList/_redux/Reducer/GiftCardListReducer";
import SearchReducer from "../components/search-input/redux/SearchReducer";
// import WishlistReducer from "../components/layouts/page/wishlist/_redux/Reducer/WishlistReducer";

export default combineReducers({
  product: ProductReducer,
  search: SearchReducer,
  productDetail: ProductDetailReducer,
  // slider: SliderReducer,
  cart: CartReducer,
  OrderReducer: OrderReducer,
  authReducer: AuthReducer,
  vendor: VendorReducer,
  brand: BrandReducer,
  productWish: ProductWish,
  myOrder: MyOrder,
  wallet: Wallet,
  notification: Notification,
  registerReducer: RegisterReducer,
  VendorRegisterReducer: VendorRegisterReducer,
  MenuReducer: MenuReducer,
  HomeCarouselReducer: HomeCarouselReducer,
  AudiencePoll: AudiencePoll,
  wishListReducer: wishListReducer,
  UserDataReducer: UserDataReducer,
  UserReducer: UserReducer,
  MyOrderReducer: MyOrderReducer,
  PaymentReducer: PaymentReducer,
  ReviewReducer: ReviewReducer,
  CheckoutPaymentReducer: CheckoutPaymentReducer,
  GiftCardListReducer: GiftCardListReducer,
});
