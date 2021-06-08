import React from 'react';

const ErrorMessage = ({ errorText }) => {
    return (
        <p className="error_message">
            {errorText}
        </p>
    );
};

export default ErrorMessage;