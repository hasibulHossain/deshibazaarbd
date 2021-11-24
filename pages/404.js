import React from 'react';
import Image from 'next/image';

function Notfound() {
    return (
        <div className="container">
            <div className="page-not-found__container">
                <div className="page-not-found__inner">
                    <h1>Sorry the page not found!</h1>
                    <div className="page-not-found__img-box">
                        <Image src="/images/not-found.png" alt="404 page not found" width={680} height={300} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Notfound;
