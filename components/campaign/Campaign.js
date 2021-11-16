import React from 'react'
import Link from 'next/link';

function Campaign() {
    return (
        <div className="row bg-white py-4">
            <div className="col-lg-4 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=flash-sale">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/flash-sale.jpg" alt="flash sale" />
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-3 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=hatt-bazaar">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/hatbazaar.jpg" alt="Hatt bazaar"/>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mb-lg-0">
                <div className="pointer text-center">
                    <Link href="/products?type=super-sale">
                        <a>
                            <img width={400} height={200} className="img-responsive" src="/images/mega-deals.jpg" alt="Mega deals" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Campaign;
