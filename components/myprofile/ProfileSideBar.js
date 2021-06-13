import React from 'react';
import Link from "next/link";

const ProfileSideBar = () => {
    return (
        <div className="sidebar card">
            <ul>
                <li>
                    <Link href="/profile">My Profile</Link>
                </li>
                <li>
                    <Link href="/account-setting">Account Setting</Link>
                </li>
                <li>
                    <Link href="wishlist">My Wish list</Link>
                </li>
                <li>
                    <Link href="/order">My Orders</Link>
                </li>
                <li>
                    <Link href="/payment">Payment</Link>
                </li>
                <li>
                    <Link href="/wallet">My Wallet</Link>
                </li>
                <li>
                    <Link href="/gift-card">My Gift card</Link>
                </li>
                <li>
                    <Link href="/voucher">My Vouchar</Link>
                </li>
                <li>
                    <Link href="/notification">Notifications</Link>
                </li>
                <li>
                    <Link href="/audience-pool">Audience Pool</Link>
                </li>
                <li>
                    <Link href="productr-review">My Reviews</Link>
                </li>
                <li>
                    <Link href="/refferal-program">Refferal Programme</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;