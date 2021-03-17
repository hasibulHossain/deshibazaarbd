import React from 'react';
import ReactStars from "react-rating-stars-component";
import ProfileSideBar from '../myprofile/profileSideBar';

const ProductReviewCreate = () => {

    const [ratingValue, setRatingValue] = React.useState(3);
    const secondExample = {
        size: 25,
        count: 5,
        color: "black",
        activeColor: "gold",
        value: ratingValue,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setRatingValue(newValue)
        }
    };
    return (
        <>
            <div className="wishbanner pb">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 offset-lg-1">
                            <ProfileSideBar />
                        </div>

                        <div className="col-lg-7">
                            <div className="wishlisttitle">
                                <h1>Product Review</h1>
                            </div>

                            <div className="card audienceContainer p-2 mt-3">
                                <form>
                                    <div className="pool-container m-1">
                                        <h6>Delivered on 24 Feb 2021</h6>
                                        <p>Rate and review purchased product:</p>
                                        <div className="row">
                                            <div className="col-2">
                                                <img width="40px" className="img-thumbnail" src="https://images.vexels.com/media/users/3/158212/isolated/preview/e2d389a08c3c2766bc12bbefac44ec7c-simple-smile-emoticon-face-by-vexels.png" />
                                                {/* <img className="img-fluid" src="../../../../public/images/default/fallback-image.png" /> */}
                                            </div>
                                            <div className="col-10">
                                                <h4>Indian Net Febrics Unstiched Weigtless Jorjet Emvroidery Work Fashiona....</h4>
                                                <p>Size:Int: One size</p>
                                                <ReactStars {...secondExample} />
                                                <label>Review detail</label>
                                                <textarea className="form-control" placeholder="Please share your feedback about the product: 
                                               was the product as described? What is the quality like?" />

                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-outline-primary float-right mt-3">SUBMIT</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductReviewCreate;