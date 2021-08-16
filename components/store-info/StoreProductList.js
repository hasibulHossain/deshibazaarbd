import React, { useEffect } from 'react'
import { getProductsBySellerId } from '../CategoryWishProductList/_redux/Action/CategoryWiseProductAction'
import { useDispatch, useSelector } from 'react-redux';
import CategoryWishProductList from '../CategoryWishProductList/CategoryWishProductList';
import {useRouter} from 'next/router';

function StoreProductList() {
    const dispatch = useDispatch();
    const router = useRouter(); 

    useEffect(() => {
        const storeId = router.query.storeById.split('=')[1];
        dispatch(getProductsBySellerId(storeId));
    }, [])

    return (
        <div className="row">
            <CategoryWishProductList />
        </div>
    )
}

export default StoreProductList
