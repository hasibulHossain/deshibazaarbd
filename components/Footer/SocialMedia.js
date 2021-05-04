import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const SocialMedia = () => {
    return (
        <ul className="social-media">
            <li className="social-facebook">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custome-fontAwesome" icon={faFacebookF} />
                </a>
            </li>
            <li className="social-twitter">
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custome-fontAwesome" icon={faTwitter} />
                </a>
            </li>
            <li className="social-linkedIn">
                <a href="http://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custome-fontAwesome" icon={faLinkedin} />
                </a>
            </li>
            <li className="social-whatsApp">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custome-fontAwesome" icon={faWhatsapp} />
                </a>
            </li>
            <li className="social-instagram">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon className="custome-fontAwesome" icon={faInstagram} />
                </a>
            </li>
        </ul>
    );
};

export default SocialMedia;