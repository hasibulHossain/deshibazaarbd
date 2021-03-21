import React from 'react';

import Rater from "react-rater";
import 'react-rater/lib/react-rater.css'

const RatingDisplay = ({ total = 5, rating, showRatingText = true }) => {
    return (
        <>
            <Rater total={total} rating={rating} interactive={false} />{" "}
            {
                showRatingText &&
                <span> ({showRatingText ? rating : ''}) </span>
            }
        </>
    );
}

export default RatingDisplay;