import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, } from 'react-redux';
import { removeFromWishList } from './_redux/Action/wishListAction'

const RemoveWishlist = ({ product }) => {
    const dispatch = useDispatch();
    
    const addOrRemoveWishlist = (product) => {
        dispatch(removeFromWishList(product.id));
    }

    return (
        <FontAwesomeIcon onClick={() => addOrRemoveWishlist(product)} icon={faTrash} className="text-danger pointer" />
    );
};

export default RemoveWishlist;