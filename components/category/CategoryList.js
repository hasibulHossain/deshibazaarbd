import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "./_redux/Action/CategoryAction";
import { useRouter } from "next/router";
import Translate from "../translation/Translate";
import LoadingPlaceHolder from "../master/skelleton/LoadingPlaceholder";
import Image from 'next/image';

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
  const navigateCategoryList = (categorySlug) => {
    router
      .push(`/products?category=${encodeURIComponent(categorySlug)}`)
      .then((_) => window.scrollTo(0, 0));
  };

  return (
    <div className="category-list">
      <div className="row">
          {
            loading && (
              <LoadingPlaceHolder className="col-lg-2 col-md-3 col-sm-4 col-6" count={12} height={150} />
            )
          }

          {categories && categories.length > 0 &&
            categories.map((item, index) => (
              <div key={index} className={`category pointer col-lg-2 col-md-3 col-sm-4 col-6 pr-sm-2 pl-sm-2 ${index % 2 === 0 ? 'pr-1 pl-0' : 'pl-1 pr-0'}`}>
                <div onClick={() => navigateCategoryList(item.short_code)} className="shadow-sm text-center" style={{background: '#fff', padding: '10px', margin: '10px 0px'}}>
                  {/* <img style={{width: '100%'}} src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`} alt={translate(item.name)} /> */}
                  <Image src={`${process.env.NEXT_PUBLIC_URL}images/categories/${item.image}`} alt={item.name} width={175} height={175} />
                  <p className="category__category-title" style={{ textAlign: 'center', fontSize: '14px', fontWeight: '500', paddingTop: '10px', margin: '0px'}}>
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
