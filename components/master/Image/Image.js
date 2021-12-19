import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Image(props) {
    const [src, setSrc] = useState(props.src);
    const [errored, setErrored] = useState(false);
    
    const onError = () => {
        if(!errored) {
            setErrored(true);
            setSrc('/images/default/fallback-image.png');
        }
    }

    return (
        <img {...props} src={src} onError={onError} />
    )
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackSrc: PropTypes.string,
};

export default Image;