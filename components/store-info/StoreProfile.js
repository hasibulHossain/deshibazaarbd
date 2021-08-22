import React, {useEffect} from 'react'
import { getStoreInfo } from './_redux/action/action';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
// import Style from './StoreProfile.module.scss';

function StoreProfile() {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        const store = router.query.storeById;
        dispatch(getStoreInfo(store));
    }, [])

    return (
        <div className="store-profile">
            <div className="store-profile__info-box">
                <div className="row align-items-stretch">
                    <div className="col-md-3">
                        <div className="store-profile__info">
                            <p>Joined</p>
                            <div>
                                <span style={{fontSize: '1.3rem', marginRight: '0.5rem'}}>11</span>
                                <span>months</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="store-profile__info">
                            <p>Shipped on time</p>
                            <div>
                                <span>93%</span>
                                <span>
                                    this is average for sellers in same category
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="store-profile__info"></div>
                    </div>
                    <div className="col-md-3">
                        <div className="store-profile__info"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreProfile;
