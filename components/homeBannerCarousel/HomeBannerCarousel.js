import React, { memo } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";
const HomeBannerCarousel = (props) => {
  const { homeBanner: carouselList } = props;
  const { isMobile } = useSelector((state) => state.GlobalReducer);

  return (
    <>
      {!carouselList && (
        <div className="card shadow-sm mt-3 p-1">
            <LoadingPlaceHolder className="" count={1} height={isMobile ? 180 : 445} />
        </div>
      )}

      <Carousel>
        {carouselList && carouselList.length > 0 &&
          carouselList.map((item, index) => (
            <Carousel.Item className="home-banner-carousel pointer" key={index + 1}>
              <img
                className="d-block"
                src={!isMobile ? item.image_url : item.mobile_image_url}
                alt={item.title}
              />
              {/* <Image src={item.image_url} alt={item.title} width={1920} height={450} /> */}
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default memo(HomeBannerCarousel);
