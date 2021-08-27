import React, {useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import BrandSingleMini from './BrandSingleMini';
import { getShopList } from './_redux/Action/ShopAction';

function BrandListFull() {
    const dispatch = useDispatch();
    const { ShopList, isLoading } = useSelector((state) => state.ShopReducer);

    useEffect(() => {
        dispatch(getShopList());
    }, [])

    return (
        <div className="row mb-3">
            {
                isLoading && [...new Array(10)].map(_ => (
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-1 px-sm-2">
                        <div className="brand-card-skeleton"></div>
                    </div>
                ))
                
            }
            {
                !isLoading && ShopList.length > 0 && ShopList.map(item => (
                    <div className="col-lg-2 col-md-3 col-sm-4 col-6 px-1 px-sm-2">
                        <BrandSingleMini item={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default BrandListFull
