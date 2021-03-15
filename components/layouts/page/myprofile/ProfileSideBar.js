import React from 'react';

const ProfileSideBar = () => {
    return (
        <div className="sidebar card">
            <ul>
                <li>
                    <a href="/profile">My Profile</a>
                </li>
                <li>
                    <a href="/account-setting">Account Setting</a>
                </li>
                <li>
                    <a href="wishlist">My Wish list</a>
                </li>
                <li>
                    <a href="/order">My Orders</a>
                </li>
                <li>
                    <a href="/payment">Payment</a>
                </li>
                <li>
                    <a href="/wallet">My Wallet</a>
                </li>
                <li>
                    <a href="/gift-card">My Gift card</a>
                </li>
                <li>
                    <a href="/voucher">My Vouchar</a>
                </li>
                <li>
                    <a href="/notification">Notifications</a>
                </li>
                <li>
                    <a href="/audience-pool">Audience Pool</a>
                </li>
                <li>
                    <a href="">My Reviews</a>
                </li>
                <li>
                    <a href="/refferal-program">Refferal Programme</a>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;