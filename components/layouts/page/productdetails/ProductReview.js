import React from 'react';
import ReactStars from "react-rating-stars-component";

const ProductReview = () => {

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
        <div className="ratingbanner pb">
            <div className="container">
                <div className="elegentratingsection">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 col-md-10 col-12">
                            <div className="elegentratingreview">
                                <h1>Product Review</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                            <div className="elegentratingreview one">
                                <div className="review two">
                                    <ReactStars {...secondExample} />
                                </div>
                                <p>{ratingValue}/5</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-6">
                            <div className="elegentratingreview two">

                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductReview;