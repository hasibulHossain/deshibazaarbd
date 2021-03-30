import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageTitle from '../page-title/PageTitle';
import LoadingSkelleton from '../master/skelleton/LoadingSkelleton';
import { getWishListData } from './_redux/Action/GiftCardListAction';

const GiftCardList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getWishListData())
    }, []);

    const giftCardList = useSelector((state) => state.GiftCardListReducer.giftCardList)
    const isLoading = useSelector((state) => state.GiftCardListReducer.isLoading)

    return (
        <div className="container">
            <PageTitle title='Gift Cards' description='Gift Card Items..' />

            <div className="row mt-3 justify-content-center">
                {isLoading && (
                    <div className="p-3">
                        <LoadingSkelleton
                            alignment="vertical"
                            count={1}
                            width={900}
                            height={140}
                        />
                    </div>
                )}
                {
                    giftCardList && giftCardList.length > 0 && (
                        giftCardList.map((item, index) => (
                            <div className="col-lg-3 col-md-3">
                                <div className="border mb-2 p-2 giftCardList">
                                    <img src={item.image_url} alt="GIFT CARD IMAGE" />
                                    <h6 className="title mt-2"> {item.title} </h6>
                                    <p className="price"> Card Price : ৳ {item.price_value_for} </p>
                                    <p className="price"> Change Value : ৳ {item.change_price_value} </p>
                                    <button className="btn custom-pay-btn" disabled={true}>
                                        PURCHASE
                                    </button>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default GiftCardList;