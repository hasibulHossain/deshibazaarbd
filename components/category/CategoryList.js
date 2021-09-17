import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCategories } from "./_redux/Action/CategoryAction";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton";
import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";

const CategoryList = ({ parentID = null }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { categories, loading } = useSelector((state) => state.CategoryReducer);

  useEffect(() => {
    if (!categories.length) {
      if (parentID === "all") {
        dispatch(getCategories(parentID, null, "")); // Get the all categories
      } else {
        dispatch(getCategories(parentID, 12, "homepage")); // Get the 12 categories
      }
    }
  }, []);

  /**
   * Navigate to Category List page
   *
   * @since 1.0.0
   *
   * @param string categorySlug
   *
   * @return void
   */
  const navigateCategoryList = (categoryId) => {
    router
      .push(`/products?category=${categoryId}`)
      .then((_) => window.scrollTo(0, 0));
  };

  let a = [
    {url: '/images/categories/cloth-&-Accessories.jpg', title: 'Fashion'},
    {url: '/images/categories/elektronics.jpg', title: 'Electronics'},
    {url: "/images/categories/food.jpg", title: 'Food'},
    {url: "/images/categories/groceries.jpg", title: 'Groceries'},
    {url: "/images/categories/helth-&-beauty.jpg", title: 'Health & Beauty'}, 
    {url: "/images/categories/kids-fashion.jpg", title: 'Kids Fashion'}, 
    {url: "/images/categories/laptop.jpg", title: 'Laptop'}, 
    {url: "/images/categories/medicine.jpg", title: 'Pharmacy'}, 
    {url: "/images/categories/mother-&-baby-care.jpg", title: 'Baby Care'}, 
    {url: "/images/categories/motorbycycle.jpg", title: 'Motorbike'}, 
    {url: "/images/categories/toys-&-games.jpg", title: 'Toys & Games'}, 
    {url: "/images/categories/sprot-&-fitness.jpg", title: 'Sports & Fitness'}
  ]

  return (
    <div className="category-list">
      <div className="row">
        {/* {loading && (
          <>
          <LoadingSkelleton
            alignment="vertical"
            count={6}
            width={150}
            height={150}
          />
          </>
        )}

        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => (
            <div key={index} className="category-card col-3 col-md-1">
              <div
                className="category-card-body"
                onClick={() => navigateCategoryList(item.id)}
              >
                {item.image !== null && item.image !== "" && (
                  <div className="category-img-area">
                    <img
                      src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`}
                      alt={translate(item.name)}
                      className="img-fluid"
                    />
                  </div>
                )}

                <p className="category-title">
                  <Translate>{item.name}</Translate>
                </p>
              </div>
            </div>
          ))} */}

          {
            loading && (
              <LoadingPlaceHolder className="col-lg-2 col-md-3 col-sm-4 col-6" count={12} height={150}  />
            )
          }

          {categories && categories.length > 0 &&
            categories.map((item, index) => (
              <div key={index} className={`col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 ${index % 2 === 0 ? 'pr-1 pl-0' : 'pl-1 pr-0'}`}>
                <div className="shadow-sm" style={{background: '#fff', padding: '10px', margin: '10px 0px'}}>
                  <img style={{width: '100%'}} src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`} alt={translate(item.name)} />
                  <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', paddingTop: '10px', margin: '0px'}}>
                    <Translate>{item.name}</Translate>
                  </p>
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default memo(CategoryList);
