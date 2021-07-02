import React, { useState } from 'react';
import { Timeline } from "react-beautiful-horizontal-timeline";

const OrderTracking = () => {
    const myList = [
        {
          date   : "28 July, 2021",
          name   : "Your order has been received!",
        //   s   : "lorem imp ",
        //   t   : "maor k"
        },
        {
            date : "30 July, 2021",
            name : "Your order has been on processing..!",
        },
        {
            date : "01 July, 2021",
            name : "Your order has been packing..!",
        },
        {
            date : "03 July, 2021",
            name : "We handover your order on Sundar Ban courier service!",
        },
        {
            date : "04 July, 2021",
            name : "We pick up your parcel!",
        },
        {
            date : "06 July, 2021",
            name : "Your parcel is move to chittagong!",
        },
        {
            date : "08 July, 2021",
            name : "Chittagong branch receive your parcel!",
        },
        {
            date : "10 July, 2021",
            name : "Order delivered successfully!",
        },
      ];
    const [labelWidth, setlabelWidth]                     = useState(160);
    const [amountMove, setamountMove]                     = useState(350);
    const [lineColor, setlineColor]                       = useState("#61dafb");
    const [darkMode, setdarkMode]                         = useState(false);
    const [eventTextAlignCenter, seteventTextAlignCenter] = useState(true);
    const [showSlider, setshowSlider]                     = useState(true);
    const [arrowsSize, setarrowsSize]                     = useState(false);
    return (
        <Timeline
            myList               = {myList}
            labelWidth           = {labelWidth}
            amountMove           = {amountMove}
            lineColor            = {lineColor}
            darkMode             = {darkMode}
            eventTextAlignCenter = {eventTextAlignCenter}
            showSlider           = {showSlider}
            arrowsSize           = {arrowsSize}
        />
    );
};

export default OrderTracking;