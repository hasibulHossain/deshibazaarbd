import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { WishListAdded } from './_redux/Action/wishListAction'

const AddWishList = ({ product }) => {
   
    const dispatch                    = useDispatch()
    const [isWishList, setIsWishList] = useState(false)
    const isLoading                   = ((state) => state.wishListReducer.isLoading)

    const handleAddedWishList = (product) => {
        setIsWishList(true);
        dispatch(WishListAdded(product.id))
    }

    return (
        <FontAwesomeIcon onClick={() => handleAddedWishList(product)} icon={faHeart} className={`pointer ${isWishList === true ? 'text-danger' : "text-secondary"}`} />
    );
};

export default AddWishList;