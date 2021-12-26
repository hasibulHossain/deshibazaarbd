import React, { useState } from 'react'
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';
import SimpleModal from '../master/Modal/SimpleModal';
import SimpleBtn from '../master/SimpleBtn/SimpleBtn';
import WarningMessage from '../master/warningMessage/WarningMessage';
import Translate from '../translation/Translate';
import AddressUpdate from './AddressUpdate';
import SingleAddress from './SingleAddress';

function AddressBook({billingAddress, shippingAddress, userInputData, isLoading}) {
    const [show, setShow] = useState(false);

    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    if(!isLoading) {
        return (
            <>
                <div className="profile_account shadow-sm bg-white mb-4" id="address-book">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                        <h6><Translate>Address Book</Translate></h6>
                        <SimpleBtn variant="success" style={{ width: 'fit-content' }} onClick={toggleShowHandler}>
                            <Translate>Add New Address</Translate>
                        </SimpleBtn>
                    </div>
                    <ul className="address-list">
                        <div className="address-list__header">
                            <div>Full name</div>
                            <div>Address</div>
                            <div>Region</div>
                            <div>Mobile</div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            {
                                !isLoading && billingAddress && billingAddress.length === 0 && shippingAddress && shippingAddress.length === 0 && (
                                    <div className="mt-2">
                                        <WarningMessage text="Address not found..." />
                                    </div>
                                )
                            }
                            {
                                billingAddress && billingAddress.map((item, i) => {
                                    return (
                                        <SingleAddress
                                            key        = {i}
                                            id         = {item.id}
                                            type       = {item.type}
                                            name       = {item.name}
                                            phone_no   = {item.phone_no}
                                            location   = {item.location}
                                            is_default = {item.is_default}
                                            city       = {item.city}
                                            area       = {item.area}
                                            street1    = {item.street1}
                                            street2    = {item.street2}
                                            userName   = {userInputData.first_name}
                                        />
                                    );
                                })
                            }
                            {
                                shippingAddress && shippingAddress.map((item, i) => {
                                    return (
                                        <SingleAddress
                                            key        = {i}
                                            id         = {item.id}
                                            type       = {item.type}
                                            name       = {item.name}
                                            phone_no   = {item.phone_no}
                                            location   = {item.location}
                                            is_default = {item.is_default}
                                            city       = {item.city}
                                            area       = {item.area}
                                            street1    = {item.street1}
                                            street2    = {item.street2}
                                            userName   = {userInputData.first_name}
                                        />
                                    );
                                })
                            }
                        </div>
                    </ul>
                </div>
                <SimpleModal
                    size        = "xl"
                    show        = {show}
                    handleClose = {toggleShowHandler}
                >
                    <AddressUpdate addAddress={true} type="new_address" closeModal={toggleShowHandler} />
                </SimpleModal>
            </>
        )
    } else {
        return (
            <div className="d-flex justify-content-center">
                <LoadingSpinner text="Loading Address...." />
            </div>
        )
    }
}

export default AddressBook
