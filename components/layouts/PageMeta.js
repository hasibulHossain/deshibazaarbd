import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';

const PageMeta = (props) => {
    const { title = '', description = '', keywords = '', pageSocialMetaDescription, pageSocialMetaUrl, pageSocialMetaImage, pageSocialMetaAltImage,
        websiteName, facebookAppID, twitterSiteUsername, ogpEnabled } = props;

    // OGP -> Open Graph Protocol
    // Social meta tags
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />

            {
                ogpEnabled && (
                    <>
                        {/* Social Meta tags */}
            
                        {/* Facebook, whatsapp, instagram, twitter and other popular social media */}
                        <meta property="og:title" content={title} />
                        <meta property="og:description" content={pageSocialMetaDescription} />
                        <meta property="og:image" content={pageSocialMetaImage} />
                        <meta property="og:url" content={pageSocialMetaUrl} />
                        <meta name="twitter:card" content={pageSocialMetaImage} />
            
                        {/* Some Non-essential but recommended */}
                        <meta property="og:site_name" content={websiteName} />
                        <meta name="twitter:image:alt" content={pageSocialMetaAltImage} />
            
                        {/* If has need analytics for facebook and twitter */}
                        { typeof facebookAppID !== 'undefined' && <meta property="fb:app_id" content={facebookAppID} /> } 
                        { typeof twitterSiteUsername !== 'undefined' && <meta property="twitter:site" content={`@${twitterSiteUsername}`} /> } 
                    </>
                )
            }
        </Head>
    );
}

PageMeta.defaultProps = {
    title: PropTypes.string,
    description: PropTypes.string,
    keywords: PropTypes.string
};

// PageMeta.propTypes = {

// };

export default PageMeta;