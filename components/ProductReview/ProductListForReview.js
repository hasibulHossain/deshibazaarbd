import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoadingSkeleton from '../master/skelleton/LoadingSkelleton';
import { Modal } from 'react-bootstrap';

const ProductListForReview = () => {
    // const dispatch = useDispatch();
    const {isLoading, itemList} = useSelector((state) => state.ProductReviewReducer);

    // useEffect(() => {
    //     dispatch(getItemListByUser());
    // }, []);
    const [show, setShow] = useState(false);
    const [ReviewItem, setReviewItem] = useState(null);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = (item) => {
        setShow(true)
        setReviewItem(item)
    };

    return (
        <>
            {isLoading && (
                <div className="p-3">
                    <LoadingSkeleton
                        alignment="vertical"
                        count={1}
                        width={800}
                        height={120}
                    />
                </div>
            )}
            {
                itemList.length > 0 && (
                    <>
                        {itemList.map((item, index) => (
                            <div className="mt-2 p-2" key={index}>
                                <div className="innerItemList p-3">
                                    <div className="wishsingleproduct">
                                        <img src="/images/default/chair.png" />
                                    </div>
                                    <div className="wishsingleproductText">
                                        <h1>{item.item_name && item.item_name}</h1>
                                        <h4>৳ {item.selling_price && `${item.selling_price}`}</h4>
                                        <h6>Tax Amount : {item.tax_amount && `৳ ${item.tax_amount}`}</h6>
                                        <h5>Seller: {item.business_name && item.business_name}</h5>
                                    </div>

                                    <div className="wishsingleproductIcon">
                                        <FavoriteIcon />
                                        <button onClick={() => handleShow(item)} className="btn btn-warning float-right mt-5">REVIEW</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )
            }

            {/* <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <ProductReviewCreate ReviewItem={ReviewItem} />
            </Modal> */}
        </>
    );
};

export default ProductListForReview;