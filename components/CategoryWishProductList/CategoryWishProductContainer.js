import React from "react";
import CategoryFilter from "./CategoryFilter";
import CategoryWishProductList from "./CategoryWishProductList";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

const CategoryWishProductContainer = () => {
  const dispatch = useDispatch();
  const { paginate } = useSelector((state) => state.CategoryWiseProductReducer);
  const classes = classNames({
    "page-item": true,
    disabled: !paginate.prev_page_url,
  });
  return (
    <section className="product-container">
      <div className="row">
        <div className="col-md-3">
          <CategoryFilter />
        </div>
        <div className="col-md-9 mb-5">
          <CategoryWishProductList />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-9">
          <nav aria-label="...">
            <ul class="pagination">
              <li class={classes}>
                <span class="page-link">Previous</span>
              </li>
              {paginate.pages.map((_, i) => (
                <li class="page-item">
                  <a class="page-link" href="#">
                    {i + 1}
                  </a>
                </li>
              ))}
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CategoryWishProductContainer;
