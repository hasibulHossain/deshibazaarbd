import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getCategories } from "./_redux/Action/CategoryAction";
import LoadingSkelleton from "../master/skelleton/LoadingSkelleton";

const CategoryList = ({ parentID }) => {

  const dispatch = useDispatch();
  const router   = useRouter();

  useEffect(() => {
    dispatch(getCategories(parentID));
  }, []);

  const { categories, loading } = useSelector((state) => state.CategoryReducer);

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
    router.push(`/products?category=${categoryId}`);
  }

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

        {categories && categories.length > 0 &&
          categories.map((item, index) => (
            <div key={index} className="category-card col-md-2">
              <div className="category-card-body" onClick={() => navigateCategoryList(item.id)}>
                <div className="category-img-area">
                  <img src={item.image_url} alt={item.name} className="img-fluid" />
                </div>
                <p className="category-title">{item.name}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default memo( CategoryList );
