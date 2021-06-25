import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { getProductCategiesListByShop } from "./_redux/Action/ShopByCategoriesAction";

const CategoryListHome = () => {

  const dispatch = useDispatch();
  const router   = useRouter();

  useEffect(() => {
    dispatch(getProductCategiesListByShop());
  }, []);

  const { ProductList } = useSelector((state) => state.ShopByCategoriesReducer);

  /**
   * Navigate to Category List page
   * 
   * @since 1.0.0
   * 
   * @param string categorySlug 
   * 
   * @return void
   */
  const navigateCategoryList = ( categorySlug ) => {
    router.push(`/products?category=${categorySlug}`);
  }

  const categorySlick = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  }

  return (
    <div className="category-list">
      <Slider {...categorySlick}>
        {ProductList &&
          ProductList.length > 0 &&
          ProductList.map((item, index) => (
            <div key={index} className="category-card">
              <div
                className="category-card-body"
                onClick={() => navigateCategoryList(item.short_code)}
              >
                <div className="category-img-area">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="img-fluid"
                  />
                </div>
                <p className="category-title">{item.name}</p>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default CategoryListHome;
