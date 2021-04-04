import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { RHFInput } from 'react-hook-form-input';
import { useDispatch, useSelector } from "react-redux";
import { getAreasByCity, getCitiesByCountry } from '../master/redux/MasterDataAction';
import { useForm } from 'react-hook-form';

/**
 * Shipping Address set form
 * 
 * @returns component
 */
const ShippingAddressForm = () => {

    const dispatch = useDispatch()

    const cities = useSelector((state) => state.masterData.cities);
    const areas = useSelector((state) => state.masterData.areas);

    const { register, handleSubmit, errors, setValue } = useForm();

    const [address, setAddress] = useState({
        'street_address1': '',
        'street_address2': '',
        'city'           : '',
        'state'          : 'Bangladesh',
        'country'        : 'Bangladesh',
        'email'          : '',
        'name'           : '',
        'phone'          : '',
    }) 

    const handleInputChage = (name, value) => {
        const addressUpdated = {...address};
        addressUpdated[name] = value;
        setAddress(addressUpdated);

        if(name === 'city' && value !== null) {
            console.log(`city selected: `, value);
            if( typeof value.value !== 'undefined') {
                dispatch(getAreasByCity(value.value));
            }
        }
    }

    const submitShippingAddress = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        dispatch(getCitiesByCountry('Bangladesh'));
    }, [])


    return (
        <form onSubmit={(e) => handleSubmit(submitShippingAddress(e))} autoComplete="off">
            <div className="row">
                <div className="col-6">
                    <label className="ecom-label">Street Address 1</label>
                    <input
                        type="text"
                        className="form-control ecom-input"
                        name="street_address1"
                        value={address.street_address1}
                        onChange={(e) => handleInputChage('street_address1', e.target.value)}
                        placeholder="Enter Street Address Line 1"
                        ref={register({
                            required: true,
                            maxLength: 100,
                        })}
                    />
                </div>
                <div className="col-6">
                    <label className='ecom-label'>Address Line 2 (optional)</label>
                    <input
                        type="text"
                        className="form-control ecom-input"
                        placeholder="Enter Street Address Line 1"
                        name="street_address2"
                        value={address.street_address2}
                        onChange={(e) => handleInputChage('street_address2', e.target.value)}
                        ref={register({
                            required: false,
                            maxLength: 100,
                        })}
                    />
                </div>

                <div className="col-6">
                    <label className='ecom-label'>City</label>
                    <RHFInput
                        as={<Select options={cities} className="ecom-select" />}
                        rules={{ required: true }}
                        name="city"
                        register={register}
                        value={address.city}
                        onChange={(e) => (
                            handleInputChage('city', e)
                        )}
                        setValue={setValue}
                    />
                </div>
                <div className="col-6">
                    <label className='ecom-label'>Area</label>
                    <RHFInput
                            as={<Select options={areas} className="ecom-select" classNamePrefix="ecom-select-item" />}
                            rules={{ required: true }}
                            name="area"
                            register={register}
                            value={address.area}
                            onChange={(e) => (
                                handleInputChage('area', e)
                            )}
                            setValue={setValue}
                        />
                </div>
            </div>

            <button className="btn btn-primary mt-3 btn-sm float-right">Save Address</button>
            <div className="clearfix"></div>
        </form>
    );
}

export default ShippingAddressForm;