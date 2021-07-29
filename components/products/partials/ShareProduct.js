import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const ShareProduct = ({ product }) => {

    const hostAddress = "https://deshibazaarbd.com"; // @todo dynamically get host address by js
console.log('product :>> ', product);
    return (
        <ul className="social-media">
            <li className="social-facebook">
                <a href={`https://www.facebook.com/sharer/sharer.php?u=${hostAddress}/products/${product.sku}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faFacebookF} />
                </a>
            </li>
            <li className="social-twitter">
                
                <a href={`https://twitter.com/intent/tweet?url=${hostAddress}/products/${product.sku}`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faTwitter} />
                </a>
            </li>
           
            <li className="social-linkedIn">
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${hostAddress}/products?category=7`} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faLinkedin} />
                </a>
            </li>
            {/* <li className="social-linkedIn">
                <a href="http://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faLinkedin} />
                </a>
            </li> */}
            <li className="social-whatsApp">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faWhatsapp} />
                </a>
            </li>
            <li className="social-instagram">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custom-fontAwesome" icon={faInstagram} />
                </a>
            </li>
        </ul>
    );
};

export default ShareProduct;