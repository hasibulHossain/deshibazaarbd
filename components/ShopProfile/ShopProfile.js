import React from 'react';

const ShopProfile = () => {
    return (
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-3 bg-light p-3">
                    <div className="mainCategory">
                        <p>Main Category <i class="fas fa-exclamation-circle"></i></p>

                        <p>
                            <i class="fab fa-watchman-monitoring"></i> Watches Sunglasses Jewellery
                        </p>
                    </div>
                </div>
                <div className="col-md-3 bg-light p-3">
                    <div className="mainCategory">
                        <p>Shipped on Time <i class="fas fa-exclamation-circle"></i></p>
                        <p>
                            <i class="fas fa-stopwatch-20"></i> Watches Sunglasses Jewellery
                        </p>
                    </div>
                </div>
                <div className="col-md-3 bg-light p-3">
                    <div className="mainCategory">
                        <p>Cancellations by Seller <i class="fas fa-exclamation-circle"></i></p>
                        <p>
                            <i class="fas fa-stopwatch-20"></i> Watches Sunglasses Jewellery
                        </p>
                    </div>
                </div>
                <div className="col-md-3 bg-light p-3">
                    <div className="mainCategory">
                        <p>Chat <i class="fas fa-exclamation-circle"></i></p>
                        <p>
                            <i class="fas fa-stopwatch-20"></i> Watches Sunglasses Jewellery
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ShopProfile;