import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faWhatsapp, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWebsiteInformation } from '../_redux/WebsiteInformation/Action/WebsiteInformationAction';

const SocialMedia = () => {

    const dispatch = useDispatch();
    const { websiteInfo, isLoading } = useSelector((state) => state.WebsiteInformationReducer);
    useEffect(() => {
        dispatch(getWebsiteInformation())
    }, [])

    return (
        <>
            {
                websiteInfo && (
                    <ul className="social-media">
                        <li className="social-facebook">
                            <a href={websiteInfo.facebook_link !== null ? websiteInfo.facebook_link : "https://www.facebook.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="social-youtube">
                            <a href={websiteInfo.youtube_link !== null ? websiteInfo.youtube_link : "https://www.youtube.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faYoutube} />
                            </a>
                        </li>
                        <li className="social-twitter">
                            <a href={websiteInfo.twitter_link !== null ? websiteInfo.twitter_link : "https://twitter.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faTwitter} />
                            </a>
                        </li>
                        <li className="social-linkedIn">
                            <a href={websiteInfo.linkedin_link !== null ? websiteInfo.linkedin_link : "http://linkedin.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faLinkedin} />
                            </a>
                        </li>
                        <li className="social-whatsApp">
                            <a href={websiteInfo.whatsapp_link !==null ? websiteInfo.whatsapp_link : "https://web.whatsapp.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faWhatsapp} />
                            </a>
                        </li>
                        <li className="social-instagram">
                            <a href={websiteInfo.instagram_link !== null ? websiteInfo.instagram_link : "https://www.instagram.com/"} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="custom-fontAwesome" icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                )
            }
        </>
    );
};

export default SocialMedia;