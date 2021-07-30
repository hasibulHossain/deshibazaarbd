import React from 'react';
import ActiveLink from '../master/activeLink/ActiveLink';

const ProfileSideBar = () => {
    return (
        <div className="sidebar card">
            <ul>
                <li>
                    <ActiveLink href="/profile" activeLink="activeLink"> My Profile</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/account-setting" activeLink="activeLink">  Account Setting</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/wishlist" activeLink="activeLink">My Wish list</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/order" activeLink="activeLink">My Orders</ActiveLink>
                </li>
                <li>
                    <ActiveLink href="/product-review" activeLink="activeLink">My Reviews</ActiveLink>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;