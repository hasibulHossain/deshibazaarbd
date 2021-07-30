import React from 'react';
import ActiveLink from '../master/activeLink/ActiveLink';

const ProfileSideBar = () => {
    return (
        <div className="sidebar card">
            <ul>
                <li>
                    <ActiveLink href="/profile"> My Profile</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/account-setting">  Account Setting</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/wishlist">My Wish list</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/order">My Orders</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/product-review">My Reviews</ActiveLink>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;