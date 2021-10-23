import React from 'react';
import { useSelector } from 'react-redux';

const SocialMedia = () => {

    const { websiteInfo } = useSelector((state) => state.WebsiteInformationReducer);

    return (
        <>
            {
                websiteInfo && (
                    <ul className="social-media">
                        <li className="social-facebook">
                            <a href={"https://www.facebook.com/Deshibazaarbd21"} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                        <li className="social-youtube">
                            <a href="https://www.youtube.com/channel/UCRQDLHqRMH4efiE7u89kVIg" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li className="social-twitter">
                            <a href="https://twitter.com/DeshibazaarbdC" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li className="social-linkedIn">
                            <a href="https://www.linkedin.com/in/deshi-bazaar-bd-com-64ab2620b/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="social-whatsApp">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-whatsapp"></i>
                            </a>
                        </li>
                        <li className="social-instagram">
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                    </ul>
                )
            }
        </>
    );
};

export default SocialMedia;