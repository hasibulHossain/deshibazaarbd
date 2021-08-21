import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { getLocationData, handleChangeBillingAddressInput } from '../ProfileAccountSetting/_redux/Action/ProfileAccountSettingAction';
import Select from 'react-select';
import { RHFInput } from 'react-hook-form-input';
import { getFilteredStoreList } from './_redux/action/store-action';

function StoreFilter() {
    const dispatch = useDispatch();
    const { divisionList, cityList, areaList, selectedAddress } = useSelector((state) => state.ProfileAccountSettingReducer);
    const { register, setValue } = useForm();
    const [selectedLocation, setSelectedLocation] = useState({});

    const handleChangeTextInput = (name, value) => {
        dispatch(handleChangeBillingAddressInput(name, value));
        const cloneVal = {...selectedLocation, [name]: value};

        setSelectedLocation(cloneVal);
    }

    useEffect(() => {
        if(divisionList.length <= 0) {
            dispatch(getLocationData('divisions', 'country', 19))
        }

        if(Object.keys(selectedLocation).length !== 0) {
            dispatch(getFilteredStoreList(selectedLocation))
        }
    }, [JSON.stringify(selectedLocation)])

    return (
        <div className='store-category-list shadow-sm p-3 mb-5 bg-white rounded'>
            <p>Filter Store by</p>
            <div>
                <form
                    autoComplete="off"
                    autoSave="off"
                    className="mt-3" >
                    <div>
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="division">Division</label>
                            <RHFInput
                                as={<Select options={divisionList} />}
                                placeholder="Select division"
                                rules={{ required: true }}
                                name="division_id"
                                register={register}
                                value={selectedAddress.selectedCountry}
                                onChange={(option) => {
                                    handleChangeTextInput("division", option.value);
                                    dispatch(getLocationData('cities', 'division', option.value));
                                }}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="city">Zilla</label>
                            <RHFInput
                                as={<Select options={cityList} />}
                                placeholder="Select district"
                                rules={{ required: true }}
                                name="city_id"
                                register={register}
                                value={selectedAddress.selectedCity}
                                onChange={(option) => {
                                    handleChangeTextInput("district", option.value);
                                    dispatch(getLocationData('areas', 'city', option.value));
                                }}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                    <div>
                        <div className="custome_form_group">
                            <label className="form-label" htmlFor="area">Upazilla</label>
                            <RHFInput
                                as={<Select options={areaList} />}
                                placeholder="Select upazilla"
                                rules={{ required: true }}
                                name="area_id"
                                register={register}
                                value={selectedAddress.selectedArea}
                                onChange={(option) => {
                                    handleChangeTextInput("upazilla", option.value);
                                }}
                                setValue={setValue}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StoreFilter
