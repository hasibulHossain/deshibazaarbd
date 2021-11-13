import React from 'react';

const ShareProduct = ({ product }) => {

    const hostAddress = "https://deshibazaarbd.com"; // @todo dynamically get host address by js
    // const hostAddress = "https://deshibazaarbd.com"; // @todo dynamically get host address by js

    return (
        <ul className="social-media">
            <li className="social-facebook">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${hostAddress}/products/${product.sku}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
                </a>
            </li>
            <li className="social-twitter">
                <a href={`http://twitter.com/share?text=${product.name}&url=${hostAddress}/products/${product.sku}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </li>

            <li className="social-linkedIn">
                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${hostAddress}/products/${product.sku}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </li>

            <li className="social-whatsApp">
                <a href={`https://api.whatsapp.com/send?text=${hostAddress}/products/${product.sku}`} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i>
                </a>
            </li>
        </ul>
    );
};

export default ShareProduct;