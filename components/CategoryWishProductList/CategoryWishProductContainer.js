import React, {useState, useEffect, useRef} from "react";
import ProductFilter from "./ProductFilter";
import CategoryWishProductList from "./CategoryWishProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoryOrBrandDetails,
  getFilteredProducts,
  getSubCategories,
  resetFilterParams,
  setFilterParams,
} from "./_redux/Action/CategoryWiseProductAction";
import ReactPaginate from "react-paginate";
import {useRouter} from 'next/router'
import Image from 'next/image';
import Modal from "../master/Modal/Modal";
import { getShopList } from "../Shop/_redux/Action/ShopAction";
import Axios from 'axios'
import Paginate from "../master/paginate/Paginate";

const CategoryWishProductContainer = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { paginate, filterParams, categoryBrandDetails, isLoading } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );
  const firstRenderRef = useRef(true);

  const dispatch = useDispatch();

  const router = useRouter();
  const {brand: brandQuery = "", category: categoryQuery = "", type: typeQuery = "", storeById = "", search: searchQuery = ""} = router.query;
  
  const {
    search,
    category,
    brand,
    min_price,
    max_price,
    attributes,
    rating,
    paginate_no,
    order_by,
    seller_id,
    order,
    type,
    page
  } = filterParams;




  useEffect(() => {
    const queries = router.query;
    const cloneFilterParams = {...filterParams};
    for(const query in queries) {
      if(Array.isArray(cloneFilterParams[query])) {
        // cloneFilterParams[query] = [];

        if(query === 'brand') {
          cloneFilterParams[query].push(queries[query]);

          dispatch(getCategoryOrBrandDetails('brands/' + queries[query]));
        }
        if(query === 'category') {
          // check if category same or not after remount
          if(cloneFilterParams[query].length > 0 && !(cloneFilterParams[query][0] === queries[query])) {
            cloneFilterParams.page = 1;
            cloneFilterParams[query] = [];
            cloneFilterParams[query].push(queries[query]);
          } else {

            cloneFilterParams[query] = [];
            cloneFilterParams[query].push(queries[query]);
          }

          dispatch(getSubCategories(queries[query]))

          dispatch(getCategoryOrBrandDetails('categories/' + queries[query]));
        }

      } else {
        cloneFilterParams.category = [];
        cloneFilterParams.brand = [];
        cloneFilterParams.page = 1;

        if(query === 'storeById') {
          cloneFilterParams['seller_id'] = queries[query]
        }
        if(query === 'type') {
          cloneFilterParams[query] = queries[query]
          dispatch(getSubCategories(null))
        }
        if(query === 'search') {
          cloneFilterParams[query] = queries[query]
          dispatch(getSubCategories(null))
        }
      }
    }
    dispatch(setFilterParams(cloneFilterParams));

    dispatch(getShopList());

  }, [brandQuery, categoryQuery, typeQuery, storeById, searchQuery]);


  useEffect(() => {
    return () => {
      dispatch(resetFilterParams(filterParams))
    }
  }, [])


  useEffect(() => {
    if(firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    const source = Axios.CancelToken.source();
    dispatch(getFilteredProducts(filterParams, source));
    return () => {
      source.cancel()
    }
  }, [
    attributes,
    JSON.stringify(brand),
    JSON.stringify(category),
    max_price,
    min_price,
    rating,
    search,
    paginate_no,
    order_by,
    order,
    type,
    page,
    seller_id
  ]);

  const paginateHandler = (page) => {
    if (!page) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const filterParamClone = { ...filterParams };
    filterParamClone.page  = page.selected + 1;

    dispatch(setFilterParams(filterParamClone));
  };

  return (
    <>
      <Modal 
        visible={showFilter}
        closeModalHandler={() => setShowFilter(preState => !preState)}
        sideModal={true}
      >
        <ProductFilter show={true} />
      </Modal>

      <section className="product-container">
        {
          categoryBrandDetails.banner_url && (
              <div className="banner">
                <div className="banner-photo-box">
                  <Image src={categoryBrandDetails.banner_url} width={1260} height={280} />
                </div>
              </div>
          )
        }

        {/* category childs */}

        {/* {
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
        } */}

        <div className="row">
          <div className="col-md-12 mb-5 px-0" style={{fontSize: '14px'}}>
            <CategoryWishProductList showFilter={showFilter} showFilterHandler={() => setShowFilter(preState => !preState)} />
            {
              !isLoading && paginate.total > paginate.per_page  && (
                <>
                  <Paginate
                    pageCount={paginate.pages.length}
                    onPageChange={paginateHandler}
                    currentPage={filterParams.page}
                    perPage={paginate.per_page}
                    totalItemCount={paginate.total}
                  />
                  {/* <div className="w-100 px-0 px-sm-3 mt-3">
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
                  </div> */}
                </>
              )
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryWishProductContainer;
