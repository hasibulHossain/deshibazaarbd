import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import LoginComponent from './components/LoginComponent';
import RegistrationComponent from './components/RegistrationComponent'
const Registration = () => {
    const [key, setKey] = useState('sign-up');
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center align-items-center my-3">
                    <div className="col-md-8 p-sm-3 px-0">
                        <div className="account_info bg-white  rounded shadow-sm p-lg-5 p-2">
                            <Tabs
                                id="controlled-tab-example"
                                activeKey={key}
                                onSelect={(k) => setKey(k)}
                            >
                                <Tab eventKey="sign-up" title="Sign up">
                                    <RegistrationComponent />
                                </Tab>
                                <Tab eventKey="sign-in" title="Sign in">
                                    <LoginComponent />
                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;