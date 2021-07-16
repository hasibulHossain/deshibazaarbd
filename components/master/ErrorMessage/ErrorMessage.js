import React from 'react';

const ErrorMessage = ({ errorText }) => {
    return (
        <div className="error_message">
            {errorText}
        </div>
    );
};
export default ErrorMessage;