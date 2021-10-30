import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addOrRemoveWishItem} from './_redux/Action/WishlistAction'

const AddWishList = ({ productId }) => {
    const { wishListItemsId }         = useSelector(state => state.WishlistReducer);
    const dispatch                    = useDispatch();

    const isWishItemFound = wishListItemsId[productId.toString()] == productId.toString();

    const handleAddedWishList = (productId) => {
        dispatch(addOrRemoveWishItem(productId, isWishItemFound))
    }

    return (
        <FontAwesomeIcon onClick={() => handleAddedWishList(productId)} icon={faHeart} className={`pointer ${isWishItemFound ? 'text-danger' : "text-secondary"}`} />
    );
};

export default AddWishList;