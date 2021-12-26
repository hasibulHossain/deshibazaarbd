import React, { useEffect, useState } from 'react';
import { addAddress, getLocationData } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import { useDispatch, useSelector } from 'react-redux';

import * as yup from "yup";
import { useFormik } from "formik";
import CustomSelect from '../master/custom-select/CustomSelect';
import { handleShippingCost } from '../orders/_redux/action/OrderAction';


const DeliveryInfo = () => {
    const dispatch                                       = useDispatch();
    const [isLoadingAddress, setIsLoadingAddress]        = useState(false);
    const { userData }                                   = useSelector(state => state.UserDataReducer);
    const { divisionList, cityList,areaList }            = useSelector((state) => state.ProfileAccountSettingReducer);

    useEffect(() => {
        if (!divisionList.length) {
            dispatch(getLocationData('divisions'));
        }
    }, [])

    const formik = useFormik({
        initialValues: {
            name          : "",
            phone_no      : "",
            type          : "shipping_address",
            country       : "Bangladesh",
            country_id    : 19,
            division      : "",
            division_id   : "",
            city          : "",
            city_id       : "",
            area          : "",
            area_id       : "",
            is_default    : 1, // integer
            street1       : "",
            street2       : "",
            location      : "home", // home | office
            same_address  : true,
            user_id       : userData.id,
            transaction_id: null
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Required'),
            phone_no: yup.string().required('Required'),
            type: yup.string().required('Required'),
            division: yup.string().required('Required'),
            city: yup.string().required('Required'),
            area: yup.string().required('Required'),
            street1: yup.string().required('Required'),
            street2: yup.string(),
            location: yup.string().required('Required'),
        }),
        onSubmit: values => {
            const cloneVals = {...values};
            setIsLoadingAddress(true);

            if(cloneVals.same_address) {
                delete cloneVals.same_address;
                dispatch(addAddress(cloneVals, 'new_address', () => {}, userData.id));

                cloneVals.type = cloneVals.type === "shipping_address" ? "billing_address" : "shipping_address";

                dispatch(addAddress(cloneVals, 'new_address', () => {}, userData.id, true));
            } else {
                delete cloneVals.same_address;
                dispatch(addAddress(cloneVals, 'new_address', () => {}, userData.id));
            }

            // Dispatch to calculate shipping cost again.
            dispatch(handleShippingCost([]));
        }
    })

    const options = [{ label: 'Shipping address', value: 'shipping_address' }, { label: 'Billing address', value: 'billing_address' }];

    return (
        <div className="card py-3 shadow-sm">
            <h4 className="delivery_info_title px-3">Delivery Information</h4>
            <>
                {/* <h6 className="address_book_updated_title px-3">
                    Shipping address
                </h6> */}
                <form onSubmit={formik.handleSubmit} className="mt-3">
                    <div className="row">

                        <div className="col-lg-6 ">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="name">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="custom_form_input"
                                    placeholder="Name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="phone_no">Phone No</label>
                                <input
                                    id="phone_no"
                                    name="phone_no"
                                    type="text"
                                    className="custom_form_input"
                                    placeholder="Phone No"
                                    onChange={formik.handleChange}
                                    value={formik.values.phone_no}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="custome_form_group">
                                <label className="form-label" htmlFor="address_type">Address Type</label>
                                <CustomSelect
                                    id="type"
                                    name="type"
                                    onChange={value=> formik.setFieldValue('type', value.value)}
                                    value={formik.values.type}
                                    options={options}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="division">Division</label>
                                <CustomSelect
                                    id="division"
                                    name="division"
                                    onChange={option => {
                                        formik.setFieldValue('division', option.label);
                                        formik.setFieldValue('division_id', option.value);
                                        dispatch(getLocationData('cities', 'division', option.value));  
                                    }}
                                    value={formik.values.division}
                                    options={divisionList}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="city">Zilla</label>
                                    <CustomSelect
                                        id="city"
                                        name="city"
                                        onChange={option => {
                                            formik.setFieldValue('city', option.label);
                                            formik.setFieldValue('city_id', option.value);
                                            dispatch(getLocationData('areas', 'city', option.value));  
                                        }}
                                        value={formik.values.city}
                                        options={cityList}
                                    />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="area">Upazilla</label>
                                    <CustomSelect
                                        id="area"
                                        name="area"
                                        onChange={option => {
                                            formik.setFieldValue('area', option.label);
                                            formik.setFieldValue('area_id', option.value);
                                        }}
                                        value={formik.values.area}
                                        options={areaList}
                                    />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="location">Select a label for effective delivery</label>
                                    <CustomSelect
                                        id="location"
                                        name="location"
                                        onChange={option => {
                                            formik.setFieldValue('location', option.value);
                                        }}
                                        value={formik.values.location}
                                        options={[{label: 'Home', value: 'home'}, {label: 'Office', value: 'Office'}]}
                                    />
                            </div>
                        </div>

                        <div className="col-lg-6 align-self-center">
                            <div className="custome_form_group">
                                <div className="d-flex align-items-center">
                                    <input
                                        style={{width: '10%'}}
                                        id="same_address"
                                        name="same_address"
                                        type="checkbox"
                                        className="custom_form_input"
                                        onChange={formik.handleChange}
                                        checked={formik.values.same_address}
                                    />
                                    <div>
                                        <label className="form-label m-0" htmlFor="same_address">
                                            {
                                                `${formik.values.type === 'shipping_address' ? 'Bill' : 'Ship'} to the same address`
                                            }
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="custome_form_group">
                                <label className="form-label required" htmlFor="street1">Street-1</label>
                                <textarea style={{resize: 'none'}} name="street1" id="street1" cols="30" rows="2" placeholder="Street-1" className="custom_form_input" onChange={formik.handleChange} value={formik.values.street1}>
                                </textarea>
                            </div>
                        </div>

                        <div className="col-lg-6 ">
                            <div className="custome_form_group">
                                <label className="form-label" htmlFor="street2">Street-2</label>
                                <textarea style={{resize: 'none'}} name="street2" id="street2" cols="30" rows="2" placeholder="Street-2" className="custom_form_input" onChange={formik.handleChange} value={formik.values.street2}>
                                </textarea>
                            </div>
                        </div>
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6 text-right">
                            <button type="submit" disabled={isLoadingAddress ? true : false} className="btn btn-success checkout_address_save_btn">
                                Save
                                {
                                    isLoadingAddress && (
                                        <>
                                            {' '}
                                            <div className="spinner-border" style={{color: '#fff', fontSize: '10px', width: '20px', height: '20px'}} role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </form>
            </>
        </div>
    )
}

function ValidationError(props) {
    return <small className="err-mss color-main" >{props.children}</small>;
}

export default DeliveryInfo;