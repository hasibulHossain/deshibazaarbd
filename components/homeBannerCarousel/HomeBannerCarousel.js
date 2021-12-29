import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const HomeBannerCarousel = ({slider}) => {

  const { isMobile } = useSelector((state) => state.GlobalReducer);

  return (
    <>
      <Carousel>
        {slider && slider.length > 0 &&
          slider.map((item, index) => {
            const backgroundColor = item?.title.split('---')[1] ?? '#ffff'; // get background color from slider title. ex: electronics---#ddd

            return (
              <Carousel.Item style={{backgroundColor: backgroundColor}} className="home-banner-carousel pointer" key={index + 1}>
                <img
                  className="d-block"
                  style={{margin: '0 auto'}}
                  width={!isMobile ? 1920 : 1440}
                  height={!isMobile ? 450 : 944}
                  src={!isMobile ? item.image_url : item.mobile_image_url}
                  alt={item.title}
                />
              </Carousel.Item>
          )
          })}
      </Carousel>
    </>
  );
};

export default HomeBannerCarousel;
