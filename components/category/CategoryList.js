import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCategories } from "./_redux/Action/CategoryAction";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton";
import Translate from "../translation/Translate";
import { translate } from "../../services/translation/translation";

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

  return (
    <div className="category-list">
      <div className="row">
        {loading && (
          <LoadingSkelleton
            alignment="vertical"
            count={6}
            width={150}
            height={150}
          />
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
          ))}
      </div>
    </div>
  );
};

export default memo(CategoryList);
