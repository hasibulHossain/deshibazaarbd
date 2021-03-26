import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSliders } from '../store/actions/sliders/SliderAction';

const TopHomeCarousel = () => {
    const dispatch = useDispatch()
    const sliders = useSelector((state) => state.slider.sliders)

    useEffect(() => {
        dispatch(fetchSliders())
    }, [])
    return (
        <>
            {
                sliders && (
                    <Carousel>
                        {
                            sliders.length > 0 && sliders.map((item, index) => (
                                <Carousel.Item interval={1000} key={index}>
                                    <img
                                        className="d-block w-100"
                                        style={{maxHeight: '450px', borderRadius: '10px'}}
                                        src={item.image_url !== null || item.image_url !== "" ? item.image_url : "/images/slider/slide1.png"}
                                        alt=""
                                    />
                                    <Carousel.Caption>
                                        <h3 style={{color: `${item.text_color}`}}>{item.title !== null || item.title !== "" ? item.title : "Maccaf Ecommerce"}</h3>
                                        {
                                            item.is_text_enable && <p>{item.text}</p>
                                        }
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                )
            }
        </>
    );
};

export default TopHomeCarousel;