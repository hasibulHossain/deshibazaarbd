import React from 'react'

import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DemoWarning = () => {
    return (
        <div style={{background: 'var(--color-primary)', color: '#fff', fontWeight: '600'}} className="p-1 text-center mb-0" >
            <p className="m-0" >
                <FontAwesomeIcon className="custom-fontAwesome" icon={faBell} size={'lg'} /> {" "}
                This Site is under development
                {" "}
            </p>
        </div>
    );
}

export default DemoWarning;