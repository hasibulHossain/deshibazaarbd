import React, {useState} from "react";
import Link from 'next/link'
import ProductFilter from "./ProductFilter";
import CategoryWishProductList from "./CategoryWishProductList";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import ReactPaginate from "react-paginate";

const CategoryWishProductContainer = () => {
  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState(false)
  
  const { paginate, filterParams, categoryBrandDetails, isLoading } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  const paginateHandler = (page) => {
    if (!page) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const filterParamClone = { ...filterParams };
    filterParamClone.page  = page.selected + 1;

    dispatch(setFilterParams(filterParamClone));
  };

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
            !isLoading && paginate.total > paginate.per_page  && (
              <div className="w-100 px-0 px-sm-3 mt-3">
                <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={paginate.pages.length}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={paginateHandler}
                    initialPage={filterParams.page - 1}
                    containerClassName={'react-pagination'}
                    activeClassName={'active'}
                  />
                </div>
              </div>
            )
          }

        </div>
      </div>
    </section>
  );
};

export default CategoryWishProductContainer;
