import React from 'react';

const NewCollection = () => {

    return (
        <section className="container product-container">
            <div className="new-collection-section">
                <div className="row text-center">
                    <div className="col-lg-3 col-md-4">
                    <a href="">
                        <div className="home-card border-radius-5 pointer">
                            <div className="collection-banner">
                                <img src={"/images/Cash-on-delivery.jpg"} className="img img-fluid" alt="" style={{ width: '100%' }} />
                            </div>
                        </div>
                        </a>
                    </div>

                    <div className="col-lg-6 col-md-8">
                        <a href="">
                            <div style={{height: '100%', width: '100%'}}>
                                <div className="home-card border-radius-5 pointer">
                                    <img src={"/images/electronics_banner.jpg"} className="img img-fluid middle" alt="banner" style={{ width: '100%' }}/>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-lg-3 col-md-12">
                    <a href="">
                        <div className="home-card border-radius-5 pointer">
                            <img src={"/images/polli-dokan_banner.jpg"} className="img img-fluid" alt="" style={{ width: '100%' }}/>
                        </div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewCollection;