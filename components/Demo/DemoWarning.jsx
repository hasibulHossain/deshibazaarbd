import React from 'react'

import { faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styleDemoText = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '1.4rem',
    fontWeight: 'bold!important'
}

const DemoWarning = () => {
    return (
        <div className="alert alert-info p-3 text-center mb-0" >
            <h2 className="font-weight-lighter" style={ styleDemoText }>
                <FontAwesomeIcon className="custome-fontAwesome" icon={faBell} size={20} /> {" "}
                Hello Sir, Site is under development. 
                Please be patient & we'll do business together 
                {" "}<FontAwesomeIcon className="custome-fontAwesome" color="green" icon={faCheckCircle} size={20} /> {" "}
                <FontAwesomeIcon className="custome-fontAwesome" color="green" icon={faCheckCircle} size={20} /> {" "}
            </h2>
        </div>
    );
}

export default DemoWarning;