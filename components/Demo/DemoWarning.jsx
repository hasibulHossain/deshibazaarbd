import React from 'react'

import { faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styleDemoText = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '0.9rem',
    fontWeight: 'bold!important'
}

const DemoWarning = () => {
    return (
        <div className="alert alert-info p-2 text-center mb-0" >
            <h2 className="font-weight-light" style={ styleDemoText }>
                <FontAwesomeIcon className="custom-fontAwesome" icon={faBell} size={'lg'} /> {" "}
                Hello Sir, Site is under development. 
                Please be patient & we'll do business together 
                {" "}
            </h2>
        </div>
    );
}

export default DemoWarning;