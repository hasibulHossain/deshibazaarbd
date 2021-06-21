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
                    <Link href="productr-review">My Reviews</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSideBar;