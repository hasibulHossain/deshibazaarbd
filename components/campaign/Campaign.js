import React from 'react'
import Link from 'next/link';

function Campaign() {
    return (
        <div className="row bg-white py-4">
            <div className="col-lg-4 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=deals-of-day">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/flash-sale.jpg" alt="" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=daily-essentials">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/hatbazaar.jpg" alt=""/>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=fastest">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/mega-deals.jpg" alt="" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Campaign;
