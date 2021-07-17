import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeBillingAddressInput, handleUpdateBillingAddress, getArea, getCity, addAddress } from './_redux/Action/ProfileAccountSettingAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { Spinner } from 'react-bootstrap'

const BillingAddressUpdate = (props) => {
    const dispatch = useDispatch();
    const countryList = useSelector((state) => state.ProfileAccountSettingReducer.countryList);
    const cityList = useSelector((state) => state.ProfileAccountSettingReducer.cityList);
    const areaList = useSelector((state) => state.ProfileAccountSettingReducer.areaList);
    const isSubmitting = useSelector((state) => state.ProfileAccountSettingReducer.isSubmitting);
    const selectedAddress = useSelector((state) => state.ProfileAccountSettingReducer.selectedAddress);
    const { register, handleSubmit, errors, setValue } = useForm();

    //handle change input 
    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeBillingAddressInput(name, value))
    }

    useEffect(() => {
        // dispatch(handleSetDataIntoInputField())
    }, [])

    const StoreBillingAddress = () => {
        // dispatch(handleUpdateBillingAddress(selectedAddress))
    }
    
    const submitUpdatedAddressHandler = () => {
        dispatch(addAddress(selectedAddress, props.type))
        props.closeModal();
        console.log('form errors => ', errors)
    }

    return (
        <div className="profile_account shadow-sm bg-white">
            <h6>
                {
                    props.type === "billing_address" && "Billing address"                }
                {
                    props.type === "shipping_address" && "Shipping address"
                }
                {
                    props.type === "new_address" && "Add new address"
                }
                
            </h6>

            <form
                onSubmit={handleSubmit(StoreBillingAddress)}
                method="post"
                autoComplete="off"
                encType="multipart/form-data"
                autoSave="off"
            >
                <div className="row">
                    {
                        props.type === 'new_address' &&
                        <div className="col-md-4">
                            <div class="custome_form_group row">
                                <label className="col-sm-3" for="firstName">Address Type</label>
                                <div className="col-sm-9">
                                    <RHFInput
                                        as={<Select options={[{label: 'Shipping address', value: 'shipping_address'}, {label: 'Billing address', value: 'billing_address'}]} />}
                                        placeholder="address type"
                                        rules={{ required: true }}
                                        name="address_type"
                                        register={register}
                                        value={selectedAddress.type}
                                        onChange={(option) => {
                                            handleChangeTextInput("type", option.value);
                                            dispatch(getCity(option.label));
                                        }}
                                        setValue={setValue}
                                    />
                                    {
                                        errors.country_id && errors.country_id.type === 'required' && (
                                            <ErrorMessage errorText="Type can't be blank!" />
                                        )
                                    }
                                </div>

                            </div>
                        </div>
                    }
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">Country</label>
                            <div className="col-sm-9">
                                <RHFInput
                                    as={<Select options={countryList} />}
                                    placeholder="Select country"
                                    rules={{ required: true }}
                                    name="country_id"
                                    register={register}
                                    value={selectedAddress.country}
                                    onChange={(option) => {
                                        handleChangeTextInput("country", option.label);
                                        handleChangeTextInput("country_id", option.value);
                                        dispatch(getCity(option.label));
                                    }}
                                    setValue={setValue}
                                />
                                {
                                    errors.country_id && errors.country_id.type === 'required' && (
                                        <ErrorMessage errorText="Country can't be blank!" />
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">City</label>
                            <div className="col-sm-9">
                                <RHFInput
                                    as={<Select options={cityList} />}
                                    placeholder="Select city"
                                    rules={{ required: true }}
                                    name="city_id"
                                    register={register}
                                    value={selectedAddress.city}
                                    onChange={(option) => {
                                        handleChangeTextInput("city", option.label);
                                        handleChangeTextInput("city_id", option.value);
                                        dispatch(getArea(option.value));
                                    }}
                                    setValue={setValue}
                                />
                                {
                                    errors.city_id && errors.city_id.type === 'required' && (
                                        <ErrorMessage errorText="City can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">Area</label>
                            <div className="col-sm-9">
                                <RHFInput
                                    as={<Select options={areaList} />}
                                    placeholder="Select area"
                                    rules={{ required: true }}
                                    name="area_id"
                                    register={register}
                                    value={selectedAddress.aria}
                                    onChange={(option) => {
                                        handleChangeTextInput("area", option.label);
                                        handleChangeTextInput("area_id", option.value);
                                    }}
                                    setValue={setValue}
                                />
                                {
                                    errors.area_id && errors.area_id.type === 'required' && (
                                        <ErrorMessage errorText="Area can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">Street-1</label>
                            <div className="col-sm-9">
                                <textarea
                                    cols="30"
                                    rows="2"
                                    class="custom_form_input"
                                    placeholder="Street-1"
                                    name="street1"
                                    value={selectedAddress.street1}
                                    onChange={(e) => handleChangeTextInput('street1', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                >
                                </textarea>
                                {
                                    errors.street1 && errors.street1.type === 'required' && (
                                        <ErrorMessage errorText="Street-1 can't be blank!" />
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">Street-2</label>
                            <div className="col-sm-9">
                                <textarea
                                    cols="30"
                                    rows="2"
                                    class="custom_form_input"
                                    placeholder="Street-2"
                                    name="street2"
                                    value={selectedAddress.street2}
                                    onChange={(e) => handleChangeTextInput('street2', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                >
                                </textarea>
                                {
                                    errors.street2 && errors.street2.type === 'required' && (
                                        <ErrorMessage errorText="Street-2 can't be blank!" />
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="custome_form_group row">
                            <label className="col-sm-3" for="firstName">Default</label>
                            <div className="col-sm-9">
                                <RHFInput
                                    as={<Select options={[{label: "Yes", value: "1"}, {label: "No", value: "0"}]} />}
                                    placeholder="Default address"
                                    register={register}
                                    name="is_default"
                                    value={selectedAddress.is_default}
                                    onChange={(option) => {
                                        handleChangeTextInput("is_default", option.value);
                                    }}
                                    setValue={setValue}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">

                            <button onClick={submitUpdatedAddressHandler} type="submit" className="btn btn-primary mr-3">Submit</button>
                    {/* {
                        isSubmitting && (
                            <button type="submit" disabled={true} className="btn btn-primary mr-3 d-flex align-items-center">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                <span className="ml-2">submitting...</span>
                            </button>
                        )
                    } */}
                </div>
            </form>
        </div>
    );
};

export default BillingAddressUpdate;