import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ProfileSideBar from '../myprofile/ProfileSideBar'
import { handleSetDataIntoInputField } from './_redux/Action/ProfileAccountSettingAction';
import ErrorMessage from '../master/ErrorMessage/ErrorMessage'

const BillingAddressForm = () => {
    const dispatch = useDispatch();
    const userInputData = useSelector((state) => state.ProfileAccountSettingReducer.userInputData);
    const { register, handleSubmit, errors, setValue, watch } = useForm();

    console.log('userInputData :>> ', userInputData);
    useEffect(() => {
        dispatch(handleSetDataIntoInputField())
    }, [])
    const handleUpdatedProfile = () => {
        // dispatch(RegisterFirstStep(registerInput))
    }
    return (
        <div className="profile_account">
            <h6>Billing Information</h6>

            <form
                onSubmit={handleSubmit(handleUpdatedProfile)}
                method="post"
                autoComplete="off"
                encType="multipart/form-data"
                autoSave="off"
            >
                <div className="row">

                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Area</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    class="custom_form_input"
                                    placeholder=""
                                    name="first_name"
                                    value={userInputData.first_name}
                                    onChange={(e) => handleChangeTextInput('first_name', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                            </div>
                            {
                                errors.first_name && errors.first_name.type === 'required' && (
                                    <ErrorMessage errorText="First name can't be blank!" />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Street-1</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    class="custom_form_input"
                                    placeholder=""
                                    name="last_name"
                                    value={userInputData.last_name}
                                    onChange={(e) => handleChangeTextInput('last_name', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.last_name && errors.last_name.type === 'required' && (
                                        <ErrorMessage errorText="First name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Street-2</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    class="custom_form_input"
                                    placeholder=""
                                    name="email"
                                    value={userInputData.email}
                                    onChange={(e) => handleChangeTextInput('email', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                                {
                                    errors.email && errors.email.type === 'required' && (
                                        <ErrorMessage errorText="First name can't be blank!" />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div class="custome_form_group row">
                            <label className="col-sm-4" for="firstName">Phone</label>
                            <div className="col-sm-8">
                                <input type="text"
                                    class="custom_form_input"
                                    placeholder=""
                                    name="phone_no"
                                    value={userInputData.phone_no}
                                    onChange={(e) => handleChangeTextInput('phone_no', e.target.value)}
                                    ref={register({
                                        required: true,
                                        maxLength: 100,
                                    })}
                                />
                            </div>
                            {
                                errors.phone_no && errors.phone_no.type === 'required' && (
                                    <ErrorMessage errorText="First name can't be blank!" />
                                )
                            }
                        </div>
                    </div>

                </div>
                <button type="submit" className="btn btn-primary">update</button>
            </form>
        </div>
    );
};

export default BillingAddressForm;