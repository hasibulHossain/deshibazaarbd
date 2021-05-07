import React from 'react'

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DemoWarning = () => {
    return (
        <div className="alert alert-info p-3 text-center mb-0">
            <h2 className="font-weight-lighter">
                <FontAwesomeIcon className="custome-fontAwesome" icon={faBell} size={20} /> {" "}
                Hello Sir, Site is under development. 
                Please wait & we'll do business together !
            </h2>
        </div>
    );
}

export default DemoWarning;