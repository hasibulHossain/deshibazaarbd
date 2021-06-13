import React from 'react';

const LoadingSpinner = ({ text }) => {
    return (
        <div className="loading_component">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <p>
                {text}
            </p>
        </div>
    );
};

export default LoadingSpinner;