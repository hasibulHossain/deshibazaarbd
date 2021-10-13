import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, } from 'react-redux';
import { addOrRemoveWishItem } from './_redux/Action/WishlistAction'

const RemoveWishlist = ({ productId }) => {
    const dispatch = useDispatch();
    
    const addOrRemoveWishlist = (productId) => {
        dispatch(addOrRemoveWishItem(productId, true));
    }

    return (
        <FontAwesomeIcon onClick={() => addOrRemoveWishlist(productId)} icon={faTrash} className="text-danger pointer" />
    );
};

export default RemoveWishlist;