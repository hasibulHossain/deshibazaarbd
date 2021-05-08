import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../master/Button/Button';
import { getHomeCarouselData } from './_redux/homeBannerCarouselAction/HomeBannerCarouselAction';

const HomeBannerCarousel = () => {
    const dispatch = useDispatch();
    const carouselList = useSelector((state) => state.HomeBannerCarouselReducer.carouselList)
    useEffect(() => {
        dispatch(getHomeCarouselData())
    }, [])
    return (
        <Carousel>
            {
                carouselList.length > 0 && carouselList.map((item, index) => (
                    <Carousel.Item className="home-banner-carousel" key={index + 1}>
                        <img
                            className="d-block w-100"
                            src={item.BannerURL}
                            alt="First slide"
                        />
                        {/* <Carousel.Caption className="home-carousel-caption">
                            <p className="home-carousel-text">Amazing Collection For You</p>
                            <h1 className="home-carousel-title">
                                {item.title}
                                SOPPING <br /> AS YOU LOVE
                            </h1>
                            <h6 className="home-carousel-discount">
                                {item.discountType} | up to {item.dicountRate} off
                            </h6>
                            <a href={item.ProuctLink} target="_blank" rel="noopener noreferrer">
                                <Button buttonText="see what's on sale" isFontAwesome={true} />
                            </a>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
};

export default HomeBannerCarousel;