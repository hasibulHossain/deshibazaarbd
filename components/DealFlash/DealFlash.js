import React from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import CountdownTimer from "react-component-countdown-timer";
import { formatCurrency } from "../../services/currency";
import Translate from "../translation/Translate";
import { addToCartAction } from "../carts/_redux/action/CartAction";
import { showToast } from "../master/Helper/ToastHelper";
import SimpleBtn from "../master/SimpleBtn/SimpleBtn";
import AddWishList from "../Wishlist/AddWishList";
import ViewAll from "../ViewAll/ViewAll";
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";
import Link from 'next/link';

const DealFlash = (props) => {
  const { dealFlashList: flashDealList } = props;

  const dispatch = useDispatch();

  const addToCart = (product) => {
    if (parseInt(product.current_stock) === 0) {
        showToast("error", "This product is out of stock!");
    } else {
        dispatch(addToCartAction(product));
    }
  }

  return (
    <section className="container product-container">
      <div className="product-heading">
        <h2>
          <Translate>Deals OF The Day</Translate>
        </h2>
        <ViewAll type="deals-of-day" />
      </div>
      <div className="flash-deal-section">
        <div className="row flash-deal-row no-gutters">
        {
          !flashDealList && (
            <LoadingPlaceHolder className="col-md-6 pr-md-2" count={2} height={255} />
          )
        }
          {flashDealList && flashDealList.length > 0 &&
            flashDealList.map((item, index) => {
              const offerEndDate     = new Date(item.offer_end_date).getTime();
              const currentTime      = new Date().getTime();
              const offerEndCount    = (offerEndDate - currentTime) / 1000
              const isOfferAvailable = offerEndCount > 1;
              const imageURL         = `${process.env.NEXT_PUBLIC_URL}images/products/${item.image}`;

              let padding = "";
              if( index === 0) {
                padding = 'pr-md-2';
              }
              if(index === 1) {
                padding = 'pl-md-2';
              }

              return (
              <div className={`col-md-6 ${padding}`} key={index + 1}>
                    <div className="flash-deal-card p-3">
                      <div className="flash-deal-img">
                        <img
                          src={imageURL ? imageURL : ''}
                          alt={item.name}
                        />
                      </div>
                      <div className="flash-deal-detail">
                        <Link href={`/products/${item.sku}`}>
                          <a className="flash-deal-title-link">
                            <h3 className="flash-deal-title">{item.name}</h3>
                          </a>
                        </Link>
                        <ReactStars
                          value={+item.average_rating}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                        />
                          <div className="flash-deal-prices">
                            <p className="price" style={{marginBottom: '0px'}}>
                              <span className="offerPrice">{formatCurrency(item.offer_selling_price)}</span>
                              <br />
                              <del style={{marginLeft: '10px'}}>{formatCurrency(item.default_selling_price)} </del>
                            </p>

                            <div className="flash-deal-actions">
                              <div>
                                <SimpleBtn 
                                  variant="danger" 
                                  size="sm"
                                  onClick={() => addToCart(item)} 
                                  style={{width: 'fix-content', background: 'var(--color-primary)', border: '1px solid var(--color-primary)', color: '#fff', padding: '5px 10px' }}>
                                  Add to Cart
                                </SimpleBtn>
                              </div>
                              <div className="flash-deal-actions__love">
                                <AddWishList productId={item.id} />
                              </div>
                            </div>
                          </div>
                        {/* <p className="inStock">
                          <Translate>Availability</Translate> : <span>{formatCurrency(item.current_stock, ',', '')}  <Translate>in stock </Translate></span>
                        </p> */}
                        <div className="flash-count">
                          <CountdownTimer
                            showTitle
                            noPoints
                            count={isOfferAvailable ? offerEndCount : 0}
                            size={20}
                            labelSize={14}
                            color="var(--color-primary)"
                            dayTitle="DAY"
                            hourTitle="HRS"
                            minuteTitle="MINS"
                            secondTitle="SECS"
                          />
                        </div>
                      </div>
                    </div>
              </div>
            )})}
        </div>
      </div>
    </section>
  );
};

export default DealFlash;
