import React from 'react';
import MainLayout from '../components/layouts/MainLayout';

function Notfound() {
    return (
        <MainLayout pageTitle="Page not found" >
            <div className="container">
                <div className="page-not-found__container">
                    <div className="page-not-found__inner">
                        <h1>Sorry the page not found!</h1>
                        <div className="page-not-found__img-box">
                            <img src="/images/not-found.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
};

export default Notfound;
