import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeBillingAddressInput, handleUpdateBillingAddress, getArea, getCity, addAddress, handleEmptyDispatch, getCountry } from './_redux/Action/ProfileAccountSettingAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { Form, Spinner } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';

const AddressUpdate = (props) => {
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
        dispatch(handleUpdateBillingAddress(selectedAddress))
    }

    const submitUpdatedAddressHandler = () => {
        dispatch(addAddress(selectedAddress, props.type, props.closeModal))
    }

    useEffect(() => {
        dispatch(getCountry())
        if (selectedAddress.country && selectedAddress.city) {
            dispatch(getCity(selectedAddress.country));
            dispatch(getArea(selectedAddress.city_id));
        }
        if (props.type === "new_address") {
            dispatch(handleEmptyDispatch("new_address"))
        }

    }, [])

    return (
        <>
            <h6 className="address_book_updated_title">
                {
                    props.type === "billing_address" && "Billing address"}
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
                                value={selectedAddress.name}
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
                                value={selectedAddress.phone_no}
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
                    {
                        props.type === 'new_address' &&
                        <div className="col-md-6">
                            <div className="custome_form_group">
                                <label className="form-label" htmlFor="address_type">Address Type</label>
                                <RHFInput
                                    as={<Select options={[{ label: 'Shipping address', value: 'shipping_address' }, { label: 'Billing address', value: 'billing_address' }]} />}
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
                    }
                    <div className="col-md-6">
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="country">Country</label>
                            <RHFInput
                                as={<Select options={countryList} />}
                                placeholder="Select country"
                                rules={{ required: true }}
                                name="country_id"
                                register={register}
                                value={selectedAddress.selectedCountry}
                                onChange={(option) => {
                                    handleChangeTextInput("country", option.label);
                                    handleChangeTextInput("country_id", option.value);
                                    dispatch(handleChangeBillingAddressInput("selectedCity", ""))
                                    dispatch(handleChangeBillingAddressInput("selectedArea", ""))
                                    dispatch(handleChangeBillingAddressInput("street1", ""))
                                    dispatch(handleChangeBillingAddressInput("street2", ""))
                                    dispatch(getCity(option.label));
                                }}
                                // setValue={dispatch(getCity(selectedAddress.label))}
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
                                value={selectedAddress.selectedCity}
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
                    <div className="col-md-6">
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="area">Area</label>
                            <RHFInput
                                as={<Select options={areaList} />}
                                placeholder="Select area"
                                rules={{ required: true }}
                                name="area_id"
                                register={register}
                                value={selectedAddress.selectedArea}
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
                    <div className="col-md-6">
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="street-2">Street-2</label>
                            <textarea
                                cols="30"
                                rows="2"
                                className="custom_form_input"
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
                    <div className="col-md-6">
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="default">Default</label>
                            <RHFInput
                                as={<Select options={[{ label: "Yes", value: "1" }, { label: "No", value: "0" }]} />}
                                placeholder="Default address"
                                register={register}
                                name="is_default"
                                value={selectedAddress.is_default_selected}
                                onChange={(option) => {
                                    handleChangeTextInput("is_default", option.value);
                                }}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                </div>


                <div className="deliver_info_footer col-md-6 mt-3">
                    <h6 className="select_title">
                        Select a label for effective delivery:
                    </h6>
                    <div className="d-flex mt-3">
                        <p className={`btn home_btn mr-3 pointer ${selectedAddress.location === "home" ? "active_delivery_label" : ""}`} onClick={() => handleChangeTextInput("location", "home")}>
                            <FontAwesomeIcon icon={faHome} className="mr-1" /> Home
                        </p>

                        <p className={`btn office_btn pointer ${selectedAddress.location === "office" ? "active_delivery_label" : ""}`} onClick={() => handleChangeTextInput("location", "office")}>
                            <FontAwesomeIcon icon={faBriefcase} className="mr-1" /> Office
                        </p>
                    </div>
                </div>

                <div className="row justify-content-end">
                    {
                        !isSubmitting && (
                            <button onClick={submitUpdatedAddressHandler} type="submit" className="btn btn-primary mr-3">Submit</button>
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
        </>
    );
};

export default AddressUpdate;