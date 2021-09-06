import React, {useState} from "react";
import Link from 'next/link'
import ProductFilter from "./ProductFilter";
import CategoryWishProductList from "./CategoryWishProductList";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";

const Base_Url = process.env.NEXT_PUBLIC_API_URL;

const CategoryWishProductContainer = () => {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false)
  
  const { paginate, filterParams, categoryBrandDetails, isLoading } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const classes = classNames({
    "page-item product-page-item": true,
    disabled: !paginate.prev_page_url,
  });

  const nextClasses = classNames({
    "page-item product-page-item": true,
    disabled: !paginate.next_page_url,
  });

  const paginateHandler = (direction, pageUrl) => {
    if (!pageUrl) return;

    window.scrollTo({ top: 0, behavior: "smooth" });
    const page = +pageUrl.split("page=")[1];

    const filterParamClone = { ...filterParams };
    filterParamClone.page  = page;

    if (direction === "previous") {
      dispatch(setFilterParams(filterParamClone));
    } else if (direction === "linier") { 
      dispatch(setFilterParams(filterParamClone));
    } else if (direction === "next") {
      dispatch(setFilterParams(filterParamClone));
    }
  };

  // useEffect(() => {
  //   if (!paginate.first_page_url) {
  //     dispatch(getFilteredProducts(filterParams));
  //   }
  // }, [paginate.next_page_url]);

  return (
    <section className="product-container">
      {
        categoryBrandDetails.banner_url && (
            <div className="banner">
              <div className="banner-photo-box">
                <img src={categoryBrandDetails.banner_url} alt="" />
              </div>
            </div>
        )
      }
      {
        categoryBrandDetails.childs.length > 0 && (
          <div className="childs row justify-content-start">
            {
              categoryBrandDetails.childs.map((item, index) => (
                <div className="col-6 col-md-2 col-sm-3 mb-sm-2 mb-3" key={index}>
                  <Link href={`products?${item.parent_id ? 'category' : 'brand'}=${item.id}`}>
                    <a className="child-logo-box">
                    <span>{item.name}</span>
                    </a>
                  </Link>
                </div>
              ))
            }
          </div>
        )
      }
      <div className="row">
        <div className="col-md-3">
            <ProductFilter show={showFilter} />
        </div>
        <div className="col-md-9 mb-5 px-0" style={{fontSize: '14px'}}>
          <CategoryWishProductList showFilter={showFilter} showFilterHandler={() => setShowFilter(preState => !preState)} />
          {
            !isLoading && paginate.total > 20  && (
              <div className="w-100 px-0 px-sm-3 mt-3">
                <nav className="d-flex justify-content-end" aria-label="navigation">
                  <ul className="pagination">
                    {
                      paginate.current_page != 1 && (
                        <li
                          className={classes}
                          onClick={() =>
                            paginateHandler("previous", paginate.prev_page_url)
                          } >
                          <a className="page-link">{'<'}</a>
                        </li>
                      )
                    }
                    {
                      paginate.current_page > 3 && (
                        <>
                        <li
                          onClick={() =>
                            paginateHandler(
                              "linier",
                              `${Base_Url}get-items?page=1`
                            )
                          }
                          className={`page-item product-page-item`} >
                          <a className="page-link">1</a>
                        </li>
                        <li
                          onClick={() => paginateHandler("linier", `${Base_Url}get-items?page=${paginate.current_page - 3}`)}
                          className={nextClasses} >
                          <a className="page-link">...</a>
                        </li>
                        </>
                      )
                    }

                    {
                      [1, 2, 3].map((_, i) => {
                        if(paginate.last_page == paginate.current_page + i ) return;

                        if(!((paginate.current_page + 1) >= paginate.last_page) && paginate.last_page) {
                          return (
                            <li
                              key={i}
                              onClick={() =>
                                paginateHandler(
                                  "linier",
                                  `${Base_Url}get-items?page=${i + paginate.current_page}`
                                )
                              }
                              className={`page-item product-page-item ${paginate.current_page == i + paginate.current_page ? 'active' : ''}`} >
                              <a className="page-link">{i + paginate.current_page}</a>
                            </li>
                          )
                        } else {
                          return null
                        }
                      })
                    }

                    {
                      !((paginate.last_page -3) < paginate.current_page) && (
                        <li
                          onClick={() => paginateHandler("next", `${Base_Url}get-items?page=${paginate.current_page + 3}`)}
                          className="page-item product-page-item" >
                          <a className="page-link">...</a>
                        </li>
                      )
                    }
                 
                    <li
                      onClick={() => paginateHandler("next", `${Base_Url}get-items?page=${paginate.last_page}`)}
                      className={`page-item product-page-item ${paginate.current_page === paginate.last_page ? 'active' : ''}`} >
                      <a className="page-link">{paginate.last_page}</a>
                    </li>

                    {
                      paginate.last_page !== paginate.current_page && (
                        <li
                          onClick={() => paginateHandler("next", paginate.next_page_url)}
                          className={nextClasses} >
                          <a className="page-link">{'>'}</a>
                        </li>
                      )
                    }
                  </ul>
                </nav>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
};

export default CategoryWishProductContainer;
