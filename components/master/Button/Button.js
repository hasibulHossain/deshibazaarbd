import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
/**
 *
 * button component
 *
 * @param {string} ButtonText button text,
 * @param {boolean} isFontAwesome true or false, if you want to use fontAwesome right arrow then say true otherwise false

 */
const Button = ({ buttonText, isFontAwesome }) => {
    console.log('buttonText :>> ', buttonText);
    return (
        <button className="custome-button-component">
            {buttonText}
            {
                isFontAwesome && <FontAwesomeIcon className="ml-2" icon={faArrowRight} />

            }
        </button>
    );
};

export default Button;