import React from 'react';
import { useDispatch, } from 'react-redux';
import { addOrRemoveWishItem } from './_redux/Action/WishlistAction'

const RemoveWishlist = ({ productId }) => {
    const dispatch = useDispatch();
    
    const addOrRemoveWishlist = (productId) => {
        dispatch(addOrRemoveWishItem(productId, true));
    }

    return (
        <span onClick={() => addOrRemoveWishlist(productId)} className="text-danger pointer" >
            <i className="fas fa-trash"></i>
        </span>
    );
};

export default RemoveWishlist;