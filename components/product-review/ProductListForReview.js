import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from "@material-ui/icons/Favorite";
import LoadingSkeleton from '../master/skelleton/LoadingSkelleton';
import { Modal } from 'react-bootstrap';
import { getItemListByUser } from './_redux/action/reviewAction';
import ProductReviewCreate from './ProductReviewCreate';
import PriceCalculation from '../products/partials/PriceCalculation';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import AddWishList from '../Wishlist/AddWishList';

const ProductListForReview = () => {
    const dispatch = useDispatch();
    const { isLoading, itemList } = useSelector((state) => state.ProductReviewReducer);

    useEffect(() => {
        dispatch(getItemListByUser());
    }, []);
    const [show, setShow] = useState(false);
    const [ReviewItem, setReviewItem] = useState(null);
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = (item) => {
        setShow(true)
        setReviewItem(item)
    };
    console.log('itemList :>> ', itemList);
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
                            <div className="product_preview_inner_item" key={index + 1}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`} alt={item.item_name} className="img-fluid" />
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="">
                                            <h4 className="product_preview_title">{item.item_name && item.item_name}</h4>
                                            <PriceCalculation item={item} />
                                            <h6>Tax Amount : {item.tax_amount && `৳ ${item.tax_amount}`}</h6>
                                            <h6 style={{ color: "#6c6c6c", fontWeight: 400, fontSize: '1rem' }}>Seller: {item.business_name && item.business_name}</h6>
                                            <SimpleBtn variant="btn-warning" style={{ width: 'fit-content' }} onClick={() => handleShow(item)}>
                                                REVIEW
                                            </SimpleBtn>
                                        </div>
                                        <div className="product_preview_button_section float-bottom">
                                            <AddWishList product={item} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                )
            }

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
            >
                <ProductReviewCreate ReviewItem={ReviewItem} />
            </Modal>
        </>
    );
};

export default ProductListForReview;