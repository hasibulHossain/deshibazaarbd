import React from 'react';

const ProductReview = () => {

    const [hoverValue, setHoverValue] = React.useState(3);

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
                        <div className="col-xl-3 col-lg-3 col-md-3 col-6">
                            <div className="elegentratingreview one">
                                <p>4.5/5</p>
                                <div className="review two">
                                    {/* <Rate defaultValue={3} onChangeActive={setHoverValue} allowHalf /> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-6">
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