import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
// import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";
// import { getHomeCarouselData } from "./_redux/homeBannerCarouselAction/HomeBannerCarouselAction";

const HomeBannerCarousel = ({slider}) => {
  // const { carouselList, isLoading } = useSelector((state) => state.HomeBannerCarouselReducer);

  const { isMobile } = useSelector((state) => state.GlobalReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if(!carouselList.length) {
  //     dispatch(getHomeCarouselData());
  //   }
  // }, []);

  return (
    <>
      {/* {isLoading && (
        <div className="card shadow-sm mt-3 p-1">
            <LoadingPlaceHolder className="" count={1} height={isMobile ? 180 : 445} />
        </div>
      )} */}

      <Carousel>
        {slider && slider.length > 0 &&
          slider.map((item, index) => (
            <Carousel.Item className="home-banner-carousel pointer" key={index + 1}>
              <img
                className="d-block"
                width={!isMobile ? 1920 : 1440}
                height={!isMobile ? 450 : 944}
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

export default HomeBannerCarousel;
