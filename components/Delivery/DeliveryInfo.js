import React, { useEffect, useState } from 'react';
import { addAddress, getAddress, getDefaultAddress, getLocationData, getSingleAddress, getSingleShippingAddress, handleChangeBillingAddressInput, handleChangeShippingAddressInput, handleUpdateBillingAddress } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserDataAction } from './_redux/Action/DeliveryInfoAction';
import AddressUpdate from './../ProfileAccountSetting/AddressUpdate';
import LoadingSpinner from '../master/LoadingSpinner/LoadingSpinner';
import { useForm } from 'react-hook-form';
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { Form, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage';

const DeliveryInfo = () => {

    const dispatch               = useDispatch();
    const defaultShippingAddress = useSelector((state) => state.ProfileAccountSettingReducer.defaultShippingAddress);
    const isLoading              = useSelector((state) => state.ProfileAccountSettingReducer.isLoading);
    const countryList            = useSelector((state) => state.ProfileAccountSettingReducer.countryList);
    const cityList               = useSelector((state) => state.ProfileAccountSettingReducer.cityList);
    const areaList               = useSelector((state) => state.ProfileAccountSettingReducer.areaList);
    const isSubmitting           = useSelector((state) => state.ProfileAccountSettingReducer.isSubmitting);
    const shippingAddressInput   = useSelector((state) => state.ProfileAccountSettingReducer.shippingAddressInput);
    const { register, handleSubmit, errors, setValue } = useForm();
    const [show, setShow] = useState(false);
    // const [addressType, setAddressType] = useState('new_address')
    const toggleShowHandler = () => {
        setShow(preState => !preState);
    }

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeShippingAddressInput(name, value))
    }

    const submitUpdatedAddressHandler = (e) => {
        let addressType = "shipping_address";
        if(typeof shippingAddressInput.id == "undefined" || shippingAddressInput.id == "" || shippingAddressInput.id == null){
            addressType = "new_address"
        }
        dispatch(addAddress(shippingAddressInput, addressType, toggleShowHandler))
    }

    useEffect(() => {
        dispatch(getCurrentUserDataAction());
        dispatch(getDefaultAddress('shipping_address'));
        dispatch(getSingleShippingAddress('shipping_address'));
        dispatch(getLocationData('countries'));
    }, []);

    return (
        <>
            <div className="card p-3 shadow-sm">
                <h4 className="delivery_info_title">Delivery Information</h4>
                {
                    isLoading && (
                        <LoadingSpinner text="Loading Address..." />
                    )
                }
                {
                    !isLoading && shippingAddressInput && (
                        // <AddressUpdate addAddress={true} type="shipping_address" />
                        <>
                            <h6 className="address_book_updated_title">
                                Shipping address
                            </h6>

                            <form
                                onSubmit={handleSubmit(submitUpdatedAddressHandler)}
                                method="post"
                                autoComplete="off"
                                encType="multipart/form-data"
                                autoSave="off"
                                className="mt-3"
                            >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="name">Name</label>
                                            <input
                                                type="text"
                                                className="custom_form_input"
                                                placeholder="Name"
                                                name="name"
                                                value={shippingAddressInput.name}
                                                onChange={(e) => handleChangeTextInput('name', e.target.value)}
                                                ref={register({
                                                    required: true,
                                                    maxLength: 100,
                                                })}
                                            />
                                            {
                                                errors.name && errors.name.type === 'required' && (
                                                    <ErrorMessage errorText="Name can't be blank!" />
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="phone_no">Phone No</label>
                                            <input
                                                type="number"
                                                className="custom_form_input"
                                                placeholder="Phone No"
                                                name="phone_no"
                                                value={shippingAddressInput.phone_no}
                                                onChange={(e) => handleChangeTextInput('phone_no', e.target.value)}
                                                ref={register({
                                                    required: true,
                                                    maxLength: 100,
                                                })}
                                            />
                                            {
                                                errors.phone_no && errors.phone_no.type === 'required' && (
                                                    <ErrorMessage errorText="Phone number can't be blank!" />
                                                )
                                            }

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="address_type">Address Type</label>
                                            <RHFInput
                                                as={<Select options={[{ label: 'Shipping address', value: 'shipping_address' }, { label: 'Billing address', value: 'billing_address' }]} />}
                                                placeholder="address type"
                                                rules={{ required: true }}
                                                name="address_type"
                                                register={register}
                                                value={shippingAddressInput.is_default_selected}
                                                onChange={(option) => {
                                                    handleChangeTextInput("type", option.value);
                                                    dispatch(getLocationData('cities', 'division', option.value));
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="country">Country</label>
                                            <RHFInput
                                                as={<Select options={countryList} />}
                                                placeholder="Select country"
                                                rules={{ required: true }}
                                                name="country_id"
                                                register={register}
                                                value={shippingAddressInput.selectedCountry}
                                                onChange={(option) => {
                                                    handleChangeTextInput("country", option.label);
                                                    handleChangeTextInput("country_id", option.value);
                                                    dispatch(handleChangeBillingAddressInput("selectedCity", ""))
                                                    dispatch(handleChangeBillingAddressInput("selectedArea", ""))
                                                    dispatch(handleChangeBillingAddressInput("street1", ""))
                                                    dispatch(handleChangeBillingAddressInput("street2", ""))
                                                    dispatch(getLocationData('cities', 'division', option.value));
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="city">City</label>
                                            <RHFInput
                                                as={<Select options={cityList} />}
                                                placeholder="Select city"
                                                rules={{ required: true }}
                                                name="city_id"
                                                register={register}
                                                value={shippingAddressInput.selectedCity}
                                                onChange={(option) => {
                                                    handleChangeTextInput("city", option.label);
                                                    handleChangeTextInput("city_id", option.value);
                                                    dispatch(getLocationData('areas', 'city', option.value));
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="area">Area</label>
                                            <RHFInput
                                                as={<Select options={areaList} />}
                                                placeholder="Select area"
                                                rules={{ required: true }}
                                                name="area_id"
                                                register={register}
                                                value={shippingAddressInput.selectedArea}
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="street-1">Street-1</label>
                                            <textarea
                                                cols="30"
                                                rows="2"
                                                className="custom_form_input"
                                                placeholder="Street-1"
                                                name="street1"
                                                value={shippingAddressInput.street1}
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="street-2">Street-2</label>
                                            <textarea
                                                cols="30"
                                                rows="2"
                                                className="custom_form_input"
                                                placeholder="Street-2"
                                                name="street2"
                                                value={shippingAddressInput.street2}
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
                                    <div className="col-md-6">
                                        <div className="custome_form_group">
                                            <label className="form-label" htmlFor="default">Default</label>
                                            <RHFInput
                                                as={<Select options={[{ label: "Yes", value: "1" }, { label: "No", value: "0" }]} />}
                                                placeholder="Default address"
                                                register={register}
                                                name="is_default"
                                                value={shippingAddressInput.is_default_selected}
                                                onChange={(option) => {
                                                    handleChangeTextInput("is_default", option.value);
                                                }}
                                                setValue={setValue}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="deliver_info_footer col-md-6 mt-3">
                                        <h6 className="select_title">
                                            Select a label for effective delivery:
                                        </h6>
                                        <div className="d-flex mt-3">
                                            <p className={`btn home_btn mr-3 pointer ${shippingAddressInput.location === "home" ? "active_delivery_label" : ""}`} onClick={() => handleChangeTextInput("location", "home")}>
                                                <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
                                            </p>

                                            <p className={`btn office_btn pointer ${shippingAddressInput.location === "office" ? "active_delivery_label" : ""}`} onClick={() => handleChangeTextInput("location", "office")}>
                                                <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Office
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-md-6 mt-3 text-right mt-5 float-right">
                                        {
                                            !isSubmitting && (
                                                <button
                                                    onClick={submitUpdatedAddressHandler}
                                                    type="submit" className="btn btn-success mr-3">
                                                    Save
                                                </button>
                                            )
                                        }
                                        {
                                            isSubmitting && (
                                                <button type="submit" disabled={true} className="btn btn-success mr-3 d-flex align-items-center float-right">
                                                    <Spinner animation="border" role="status" size="sm">
                                                        <span className="sr-only">Loading...</span>
                                                    </Spinner>
                                                    <span className="ml-2">Saving...</span>
                                                </button>
                                            )
                                        }
                                    </div>
                                </div>
                            </form>
                        </>

                    )
                }
            </div>
        </>
    );
};

export default DeliveryInfo;