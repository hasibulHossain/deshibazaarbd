import React, { memo, useEffect } from 'react';
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { getWishListData } from '../Wishlist/_redux/Action/WishlistAction';
import Translate from '../translation/Translate';


const HeaderWishlist = () => {
	const dispatch = useDispatch();

    const formatQtyDisplay = (totalQuantity) => {
        if (totalQuantity <= 9) {
            return <span style={{ paddingLeft: 2 }}> {totalQuantity} </span>;
        } else if (totalQuantity > 9 && totalQuantity <= 99) {
            return totalQuantity;
        } else {
            return <span style={{ fontSize: 8 }}> {totalQuantity} </span>;
        }
    }
    
    useEffect(() => {
        dispatch(getWishListData());
    }, []);


	const { wishList } = useSelector((state) => state.WishlistReducer);

    return (
        <Link href="/wishlist" className="header-nav-link">
            <a className="pointer wishlist-nav-link">
                <FontAwesomeIcon
                    className="custom-fontAwesome"
                    icon={faHeart}
                />{" "}
                <span className="wishlist-qty">
                    {formatQtyDisplay(wishList.length)}
                </span>
                &nbsp;&nbsp; <Translate>Wishlist</Translate>
            </a>
        </Link>
    );
}

export default memo(HeaderWishlist);