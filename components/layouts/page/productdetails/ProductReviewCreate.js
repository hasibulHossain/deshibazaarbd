import React from 'react';
import { Form, Modal } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import ProfileSideBar from '../myprofile/profileSideBar';

const ProductReviewCreate = ({ ReviewItem }) => {

    const [ratingValue, setRatingValue] = React.useState(3);
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
    console.log(`ReviewItem`, ReviewItem)
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Product Review
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card audienceContainer p-2">
                    <form>
                        <div className="pool-container m-1">
                            <h6>Delivered on 24 Feb 2021</h6>
                            <p>Rate and review purchased product:</p>
                            <div className="row">
                                <div className="col-2">
                                    <img width="120px" className="img-thumbnail" src="https://images.vexels.com/media/users/3/158212/isolated/preview/e2d389a08c3c2766bc12bbefac44ec7c-simple-smile-emoticon-face-by-vexels.png" />
                                </div>
                                <div className="col-10">
                                    <h3>{ReviewItem.item_name && ReviewItem.item_name}</h3>
                                    <p>Seller : {ReviewItem.business_name && ReviewItem.business_name}</p>
                                    <div className="d-flex">
                                        <p>Price : ৳ {ReviewItem.selling_price && ReviewItem.selling_price}</p>
                                        <p className="ml-3">Discount Amount : ৳ {ReviewItem.tax_amount && ReviewItem.tax_amount}</p>
                                    </div>
                                    <ReactStars {...secondExample} />
                                    <label>Review detail</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Please share your feedback about the product: was the product as described? What is the quality like?" />
                                    <br />

                                    <div className="mb-3">
                                        <Form.File id="formcheck-api-custom" custom>
                                            <Form.File.Input isValid />
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
                        <button type="submit" className="btn btn-outline-primary float-right mt-3">SUBMIT</button>
                    </form>
                </div>
                {/* <Button onClick={handleClose}>Close</Button> */}
            </Modal.Body>
        </>
    );
};

export default ProductReviewCreate;