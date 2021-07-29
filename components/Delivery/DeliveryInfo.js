import React, { useEffect, useState } from 'react';
import { getCountry } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import { useDispatch } from 'react-redux';
import { getCurrentUserDataAction } from './_redux/Action/DeliveryInfoAction';
import AddressUpdate from './../ProfileAccountSetting/AddressUpdate';

const DeliveryInfo = () => {
    
    const dispatch        = useDispatch();
    const [show, setShow] = useState(false);

    const toggleShowHandler = () => {
        setShow(preState => !preState);
      }
    
    useEffect(() => {
        dispatch(getCurrentUserDataAction())
        dispatch(getCountry())
    }, []);

    return (
        <>
            <div className="card p-3 shadow-sm">
                <h4 className="delivery_info_title">Delivery Information</h4>
                <AddressUpdate addAddress={true} type="shipping_address" closeModal={toggleShowHandler} />

                {/* <p className="delivery_info_sub_title">Shipping address</p>
                <form
                    // onSubmit={handleSubmit(handleSubmitDeliveryInfo)}
                    method="post"
                    autoComplete="off"
                    encType="multipart/form-data"
                    autoSave="off"
                >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="custome_form_group">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    id="first_name"
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    value={customerInfo.first_name ? customerInfo.first_name : ''}
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
                            <div className="custome_form_group">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    id="last_name"
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    value={customerInfo.last_name ? customerInfo.last_name : ''}
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
                            <div className="custome_form_group">
                                <label htmlFor="phone_no">Phone</label>
                                <input
                                    id="phone_no"
                                    type="text"
                                    className="form-control"
                                    name="phone_no"
                                    value={customerInfo.phone_no ? customerInfo.phone_no : ''}
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
                            <div className="custome_form_group">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    value={customerInfo.email ? customerInfo.email : ''}
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
                            <div className="custome_form_group">
                                <label htmlFor="country_id">Region</label>
                                <RHFInput
                                    as={<Select options={countryList} id="country_id" instanceId="country_id" />}
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
                            <div className="custome_form_group">
                                <label htmlFor="city_id">City</label>
                                <RHFInput
                                    as={<Select options={cityList} id="city_id" instanceId="city_id" />}
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
                            <div className="custome_form_group">
                                <label htmlFor="area_id">Area</label>
                                <RHFInput
                                    as={<Select options={areaList} id="area_id" instanceId="area_id" />}
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
                            <div className="custome_form_group">
                                <label htmlFor="postal_code">Postal Code</label>
                                <input
                                    id="postal_code"
                                    type="text"
                                    className="form-control"
                                    name="postal_code"
                                    value={customerInfo.postal_code ? customerInfo.postal_code : ''}
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
                            <div className="custome_form_group">
                                <label htmlFor="address">Address</label>
                                <textarea
                                    name="address"
                                    id="address"
                                    cols="30" rows="2"
                                    className="form-control"
                                    value={customerInfo.address ? customerInfo.address : ''}
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
                                <label className="form-check-label pointer" htmlFor="remember">
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
                                <button className="btn home_btn mr-3" type="button">
                                    <FontAwesomeIcon icon={faHome} className="mr-2" /> Home
                                </button>
                                <button className="btn office_btn" type="button">
                                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Office
                                </button>
                            </div>
                            <button type="submit" className="btn btn-success" type="button">Save</button>
                        </div>
                    </div>
                </form> */}
            </div>
        </>
    );
};

export default DeliveryInfo;