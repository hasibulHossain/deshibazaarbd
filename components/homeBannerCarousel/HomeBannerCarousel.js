import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton";
import { getHomeCarouselData } from "./_redux/homeBannerCarouselAction/HomeBannerCarouselAction";

const HomeBannerCarousel = () => {

  const { carouselList, isLoading } = useSelector((state) => state.HomeBannerCarouselReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomeCarouselData());
  }, []);

  return (
    <>
      {isLoading && (
        <div className="card shadow-sm mt-3 p-1">
          <LoadingSkelleton
            alignment="vertical"
            count={1}
            width="100%"
            height={200}
          />
        </div>
      )}

      <Carousel>
        {carouselList.length > 0 &&
          carouselList.map((item, index) => (
            <Carousel.Item className="home-banner-carousel pointer" key={index + 1}>
              {/* {
              parseInt(item.is_button_enable) === 1 && item.button_link ?
                <a
                  href      = {item.button_link}
                  className = "pointer"
                  target    = "_blank"
                  rel       = "noopener noreferrer"
                >
                  <img
                    className = "d-block w-100"
                    src       = {item.image_url}
                    alt       = {item.title}
                  />
                </a> :
                <img
                  className = "d-block w-100"
                  src       = {item.image_url}
                  alt       = {item.title}
                />
            } */}
              <img
                className="d-block w-100"
                src={item.image_url}
                alt={item.title}
              />
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default HomeBannerCarousel;
