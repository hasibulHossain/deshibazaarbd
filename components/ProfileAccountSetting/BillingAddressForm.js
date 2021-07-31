import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getArea, getCity, getCountry, handleChangeBillingAddressInput, getUserData, handleStoreBillingAddress } from './_redux/Action/ProfileAccountSettingAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import LoadingSpinner from './../master/LoadingSpinner/LoadingSpinner'
import { Spinner } from 'react-bootstrap'
const BillingAddressForm = () => {
    const dispatch = useDispatch();
    const userInputData = useSelector((state) => state.ProfileAccountSettingReducer.userInputData);
    const countryList = useSelector((state) => state.ProfileAccountSettingReducer.countryList);
    const cityList = useSelector((state) => state.ProfileAccountSettingReducer.cityList);
    const areaList = useSelector((state) => state.ProfileAccountSettingReducer.areaList);
    const isSubmitting = useSelector((state) => state.ProfileAccountSettingReducer.isSubmitting);
    const billingAddressInput = useSelector((state) => state.ProfileAccountSettingReducer.billingAddressInput);
    const { register, handleSubmit, errors, setValue, watch } = useForm();

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeBillingAddressInput(name, value))
    }

    useEffect(() => {
        dispatch(getUserData())
        dispatch(getCountry())
    }, [])
    
    const StoreBillingAddress = () => {
        dispatch(handleStoreBillingAddress(billingAddressInput))
    }

    return (
        <div className="profile_account shadow-sm bg-white">
            <h6>Billing Address</h6>

            <form
                onSubmit={handleSubmit(StoreBillingAddress)}
                method="post"
                autoComplete="off"
                encType="multipart/form-data"
                autoSave="off"
            >
                <div className="row">

                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Country</label>
                            <div className="col-sm-8">
                                <RHFInput
                                    as={<Select options={countryList} />}
                                    placeholder="Select country"
                                    rules={{ required: true }}
                                    name="country_id"
                                    register={register}
                                    value={billingAddressInput.country_id}
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
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">City</label>
                            <div className="col-sm-8">
                                <RHFInput
                                    as={<Select options={cityList} />}
                                    placeholder="Select city"
                                    rules={{ required: true }}
                                    name="city_id"
                                    register={register}
                                    value={billingAddressInput.city_id}
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
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Area</label>
                            <div className="col-sm-8">
                                <RHFInput
                                    as={<Select options={areaList} />}
                                    placeholder="Select area"
                                    rules={{ required: true }}
                                    name="area_id"
                                    register={register}
                                    value={billingAddressInput.area_id}
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
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Street-1</label>
                            <div className="col-sm-8">
                                <textarea
                                    cols="30"
                                    rows="2"
                                    class="custom_form_input"
                                    placeholder="Street-1"
                                    name="street1"
                                    value={billingAddressInput.street1}
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
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Street-2</label>
                            <div className="col-sm-8">
                                <textarea
                                    cols="30"
                                    rows="2"
                                    class="custom_form_input"
                                    placeholder="Street-2"
                                    name="street2"
                                    value={billingAddressInput.street2}
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
                </div>
                <div className="row justify-content-end">
                    {
                        !isSubmitting && (
                            <button type="submit" className="btn btn-primary mr-3">submit</button>
                        )
                    }
                    {
                        isSubmitting && (
                            <button type="submit" disabled={true} className="btn btn-primary mr-3 d-flex align-items-center">
                                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </Spinner>
                                <span className="ml-2">submitting...</span>
                            </button>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default BillingAddressForm;