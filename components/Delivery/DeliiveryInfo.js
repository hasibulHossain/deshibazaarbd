import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'
import { RHFInput } from 'react-hook-form-input';
import Select from 'react-select';
import { getArea, getCity, getCountry } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import { handleChangeDeliveryInputData } from './_redux/Action/DeliveryInfoAction';

const DeliiveryInfo = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, errors, setValue, watch } = useForm();
    const countryList = useSelector((state) => state.ProfileAccountSettingReducer.countryList);
    const cityList = useSelector((state) => state.ProfileAccountSettingReducer.cityList);
    const areaList = useSelector((state) => state.ProfileAccountSettingReducer.areaList);
    const customerInfo = useSelector((state) => state.DeliveryInfoReducer.customerInfo);

    useEffect(() => {
        // dispatch(handleSetDataIntoInputField())
        dispatch(getCountry())
    }, [])

    //handle change input 
    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeDeliveryInputData(name, value))
    }
    const handleSubmitDeliveryInfo = () => {
        // dispatch(handleStoreShippingAddress(shippingAddressInput))
    }
    return (
        <>
            <div className="card p-4 shadow-sm">
                <h4 className="delivery_info_title">Delivery Information</h4>
                <p className="delivery_info_sub_title">Shipping address</p>
                <form
                    onSubmit={handleSubmit(handleSubmitDeliveryInfo)}
                    method="post"
                    autoComplete="off"
                    encType="multipart/form-data"
                    autoSave="off"
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    value={customerInfo.first_name && customerInfo.first_name}
                                    onChange={(e) => handleChangeTextInput("first_name", e.target.value)}
                                    ref={register({ required: true })}
                                />
                                {
                                    errors.first_name && errors.first_name.type === 'required' && (
                                        <ErrorMessage errorText="First name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    value={customerInfo.last_name && customerInfo.last_name}
                                    onChange={(e) => handleChangeTextInput("last_name", e.target.value)}
                                    ref={register({ required: true })}
                                />
                                {
                                    errors.last_name && errors.last_name.type === 'required' && (
                                        <ErrorMessage errorText="Last name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phone_no"
                                    value={customerInfo.phone_no && customerInfo.phone_no}
                                    onChange={(e) => handleChangeTextInput("phone_no", e.target.value)}
                                    ref={register({ required: true })}
                                />
                                {
                                    errors.phone_no && errors.phone_no.type === 'required' && (
                                        <ErrorMessage errorText="Phone number can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={customerInfo.email && customerInfo.email}
                                    onChange={(e) => handleChangeTextInput("email", e.target.value)}
                                    ref={register({ required: true })}
                                />
                                {
                                    errors.email && errors.email.type === 'required' && (
                                        <ErrorMessage errorText="Email can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">Region</label>
                                <RHFInput
                                    as={<Select options={countryList} />}
                                    placeholder="Select region"
                                    rules={{ required: true }}
                                    name="country_id"
                                    register={register}
                                    value={customerInfo.country_id}
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
                        <div className="col-md-6">
                            <div class="custome_form_group">
                                <label for="firstName">City</label>
                                <RHFInput
                                    as={<Select options={cityList} />}
                                    placeholder="Select city"
                                    rules={{ required: true }}
                                    name="city_id"
                                    register={register}
                                    value={customerInfo.city_id}
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
                            <div class="custome_form_group">
                                <label for="firstName">Area</label>
                                <RHFInput
                                    as={<Select options={areaList} />}
                                    placeholder="Select area"
                                    rules={{ required: true }}
                                    name="area_id"
                                    register={register}
                                    value={customerInfo.area_id}
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
                            <div class="custome_form_group">
                                <label for="firstName">Postal Code</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="postal_code"
                                    value={customerInfo.postal_code && customerInfo.postal_code}
                                    onChange={(e) => handleChangeTextInput("postal_code", e.target.value)}
                                    ref={register({ required: true })}
                                />
                                {
                                    errors.postal_code && errors.postal_code.type === 'required' && (
                                        <ErrorMessage errorText="Postal code can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div class="custome_form_group">
                                <label for="firstName">Address</label>
                                <textarea
                                    name="address"
                                    id=""
                                    cols="30" rows="2"
                                    className="form-control"
                                    value={customerInfo.address && customerInfo.address}
                                    onChange={(e) => handleChangeTextInput("address", e.target.value)}
                                    ref={register({ required: true })}
                                >

                                </textarea>
                                {
                                    errors.address && errors.address.type === 'required' && (
                                        <ErrorMessage errorText="Address can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="remember" />
                                <label className="form-check-label pointer" for="remember">
                                    Save this information for next time
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="deliver_info_footer mt-3">
                        <h6 className="select_title">
                            Select a label for effective delivery:
                        </h6>
                        <div className="d-flex justify-content-between mt-3">
                            <div>
                                <button className="btn home_btn mr-3">
                                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                                </button>
                                <button className="btn office_btn">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Office
                                </button>
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default DeliiveryInfo;