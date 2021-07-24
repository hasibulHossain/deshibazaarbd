import React from 'react';
import Head from "next/head";
import PropTypes from 'prop-types';

const PageMeta = (props) => {
    const { pageTitle, pageMetaDescription, pageMetaKeywords, pageMetaAuthor } = props.props;

    const title = typeof pageTitle === 'undefined' ? 'Deshi Bazaar BD' : pageTitle + ' | Deshi Bazaar BD';
    const metaDescription = typeof pageMetaDescription === 'undefined' ? 'Deshi Bazaar BD is a multivendor e-commerce business solution in Bangladesh' : pageMetaDescription + ' .Deshi Bazaar BD is a multivendor e-commerce business solution in Bangladesh';
    const metaKeywords = typeof pageMetaKeywords === 'undefined' ? 'Multivendor Ecommerce Website, DeshibazaarBD' : pageMetaKeywords;
    const metaAuthor = typeof pageMetaAuthor === 'undefined' ? '' : pageMetaAuthor;

    // Social meta tags
    const {
        pageSocialMetaDescription, pageSocialMetaUrl, pageSocialMetaImage, pageSocialMetaAltImage,
        websiteName, facebookAppID, twitterSiteUsername
    } = props.props;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={metaAuthor} />

            {/* Social Meta tags */}

            {/* Facebook, whatsapp, instagram, twitter and other popular social media */}
            <meta property="og:title" content={pageTitle} />
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

        </Head>
    );
}

PageMeta.defaultProps = {
    props: {}
};

PageMeta.propTypes = {
    props: PropTypes.object
};

export default PageMeta;