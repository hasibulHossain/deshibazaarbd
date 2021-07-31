import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import PriceCalculation from '../products/partials/PriceCalculation';
import { handleChangeReviewItemInput, storeReviewData } from './_redux/action/reviewAction';

const ProductReviewCreate = ({ ReviewItem }) => {

    const dispatch = useDispatch()
    const [ratingValue, setRatingValue] = React.useState(1);
    const secondExample = {
        size: 25,
        count: 5,
        color: "black",
        activeColor: "gold",
        value: ratingValue,
        a11y: true,
        // isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setRatingValue(newValue)
        }
    };

    const { register, handleSubmit, watch, errors } = useForm();
    const reviewSubmitting = useSelector((state) => state.ReviewReducer.reviewSubmitting);
    const reviewInput = useSelector((state) => state.ReviewReducer.reviewInput);

    const reviewStoreInput = {
        item_id     : ReviewItem.item_id,
        rating_value: ratingValue,
        comment     : reviewInput.comment,
        images      : reviewInput.images
    }
    const handleChangeCouponCode = (name, value) => {
        dispatch(handleChangeReviewItemInput(name, value))
    }

    const onSubmit = () => {
        dispatch(storeReviewData(reviewStoreInput))
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Product Review
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card audienceContainer p-2">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        autoComplete="off"
                    >
                        <div className="pool-container m-1">
                            <h6>Delivered on 24 Feb 2021</h6>
                            <p>Rate and review purchased product:</p>
                            <div className="row">
                                <div className="col-2">
                                    <img width="120px" src={`${process.env.NEXT_PUBLIC_URL}images/products/${ReviewItem.featured_image}`} alt={ReviewItem.item_name} className="img-thumbnail" />
                                </div>
                                <div className="col-10">
                                    <h3>{ReviewItem.item_name && ReviewItem.item_name}</h3>
                                    <p>Seller : {ReviewItem.business_name && ReviewItem.business_name}</p>
                                    <div className="">
                                        <PriceCalculation item={ReviewItem} />
                                        <p>Discount Amount : ৳ {ReviewItem.tax_amount && ReviewItem.tax_amount}</p>
                                    </div>
                                    <ReactStars {...secondExample} />
                                    <label>Review detail</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Please share your feedback about the product: was the product as described? What is the quality like?"
                                        name="comment"
                                        onChange={(e) => handleChangeCouponCode("comment", e.target.value)}
                                        ref={register({ required: true })}
                                    />
                                    {errors.comment &&
                                        <span className="text-danger font-weight-bold mt-2">Your Comments can't be blank! </span>
                                    }
                                    <br />

                                    <div className="mb-3">
                                        <Form.File id="formcheck-api-custom" custom>
                                            <Form.File.Input
                                                name="images"
                                                onChange={(e) => handleChangeCouponCode("images", e)}
                                                isValid />
                                            <Form.File.Label data-browse="UPLOAD">
                                                Choose Your Review Image
                                            </Form.File.Label>
                                        </Form.File>
                                    </div>
                                    {/* <div class="input-group">
                                        <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                        <input type="file" class="form-control" id="inputGroupFile01" />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        {
                            !reviewSubmitting && (
                                <button type="submit" className="btn btn-outline-primary float-right mt-3">Submit</button>
                            )
                        }

                        {reviewSubmitting && (
                            <button disabled={true} className="btn btn-primary d-flex float-right">
                                <span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span> Submitting...
                            </button>
                        )}
                    </form>
                </div>
                {/* <Button onClick={handleClose}>Close</Button> */}
            </Modal.Body>
        </>
    );
};

export default ProductReviewCreate;