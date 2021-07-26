import * as Types from "./../Type/Types";

const initialState = {
    isLoading: false,
    isSubmitting: false,
    bestSellerList: [],
    shippingAddress: [],
    billingAddress: [],
    userInputData: {
        first_name: null,
        surname: null,
        last_name: null,
        email: null,
        username: null,
        phone_no: null,
        password: '123456',
        language: "en",
        avatar: null,
        banner: null,
        address: null,
        id: null
    },
    billingAddressInput : {
        type            : "billing_address",
        user_id         : null,
        transaction_id  : null,
        country_id      : null, //integer
        country         : null,
        city_id         : null,  //integer
        city            : null,
        area_id         : null,   //integer
        area            : null,
        street1         : null,
        street2         : null,
        is_default      : 1
    },
    selectedAddress: {
        type: null,
        user_id: null,
        transaction_id: null,
        country_id: null, //integer
        country: null,
        city_id: null,  //integer
        city: null,
        area_id: null,   //integer
        area: null,
        street1: null,
        street2: null,
        is_default: null
    },
    shippingAddressInput: {
        type            : "shipping_address",
        user_id         : null,
        transaction_id  : null,
        country_id      : null, //integer
        country         : null,
        city_id         : null,  //integer
        city            : null,
        area_id         : null,   //integer
        area            : null,
        street1         : null,
        street2         : null,
        is_default      : 1
    },
    countryList         : [],
    cityList            : [],
    areaList            : [],
    userDetails         : null,
}
function ProfileAccountSettingReducer(state = initialState, action) {
    switch (action.type) {
        case Types.GET_SHIPPING_ADDRESS:
            return {
                ...state,
                isLoading      : action.payload.isLoading,
                shippingAddress: action.payload.data,
            }
        case Types.GET_BILLING_ADDRESS:
            return {
                ...state,
                isLoading     : action.payload.isLoading,
                billingAddress: action.payload.data,
            }
        case Types.GET_USER_UPDATED_DATA:
            let getUserInput = { ...state.userInputData };
            getUserInput = action.payload;
            return {
                ...state,
                userInputData: action.payload,
                userDetails  : action.payload,
            }
        case Types.CHANGE_ADDRESS_INPUT:
            const selectedAddressClone = { ...state.selectedAddress };
            selectedAddressClone[action.payload.name] = action.payload.value;

            return {
                ...state,
                selectedAddress: selectedAddressClone
            };
        case Types.CHANGE_SHIPPING_ADDRESS_INPUT:
            const shippingAddressInput = { ...state.shippingAddressInput };
            shippingAddressInput[action.payload.name] = action.payload.value
            return {
                ...state,
                shippingAddressInput
            };
        case Types.GET_COUNTRIES_LIST:
            return {
                ...state,
                countryList: getCountries(action.payload),
            };
        case Types.GET_CITIES_LIST:
            return {
                ...state,
                cityList: action.payload,
            };
        case Types.GET_AREA_LIST:
            return {
                ...state,
                areaList: action.payload,
            };
        case Types.STORE_SHIPPING_ADDRESS:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                    billingAddressInput: initialState.billingAddressInput

                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }
        case Types.STORE_BILLING_ADDRESS:
            if (action.payload.status == true) {
                return {
                    ...state,
                    isSubmitting       : action.payload.isLoading,
                    billingAddressInput: initialState.billingAddressInput

                };
            } else {
                return {
                    ...state,
                    isSubmitting: action.payload.isLoading,
                };
            }

            case Types.GET_SINGLE_ADDRESS:
                let cloneAddress;
                if(action.payload.type === "billing_address") {
                    cloneAddress = state.billingAddress.filter(item => item.id === action.payload.id);
                } else {
                    cloneAddress = state.shippingAddress.filter(item => item.id === action.payload.id);
                }
                console.log('cloneAddress :>> ', cloneAddress)

                const cloneSelectedAddress = {
                    ...state.selectedAddress,
                    id: +cloneAddress[0].id,
                    is_default: +cloneAddress[0].is_default,
                    type: action.payload.type,
                    user_id: state.userInputData.id && state.userInputData.id,
                    selectedCountry: { label: cloneAddress[0].country,  value: +cloneAddress[0].country_id },
                    selectedCity: { label: cloneAddress[0].city,  value: +cloneAddress[0].city_id },
                    selectedArea: { label: cloneAddress[0].area,  value: +cloneAddress[0].area_id },
                    country_id: +cloneAddress[0].country_id,
                    country: cloneAddress[0].country,
                    city_id: +cloneAddress[0].city_id,
                    city: cloneAddress[0].city,
                    area_id: +cloneAddress[0].area_id,
                    area: cloneAddress[0].area,
                    street1: cloneAddress[0].street1,
                    street2: cloneAddress[0].street2,
                }
                return {
                    ...state,
                    selectedAddress: cloneSelectedAddress
                }
        default:
            break;
    }
    return state;
}

// cargo list
const getCountries = (data) => {
    let options = [];
    if (data) {
        data.forEach((item) => {
            let itemData = {
                value: item.id,
                label: item.name,
            };
            options.push(itemData);
        });
    }
    return options;
};
export default ProfileAccountSettingReducer;