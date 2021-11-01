import React from 'react';
import RegistrationComponent from './components/RegistrationComponent'
import { useSession } from 'next-auth/client'
const Registration = () => {
    const [session, loading] = useSession();
    if(session && !loading || loading) {
        return null;
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center my-3">
                <div className="col-md-8 p-sm-3 px-0">
                    <div className="account_info bg-white  rounded shadow-sm p-lg-5 p-2">
                        <h1 className="text-center color-main">SIGN UP</h1>
                        <RegistrationComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;