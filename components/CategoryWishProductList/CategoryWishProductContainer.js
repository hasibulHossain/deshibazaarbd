import React, {useState, useEffect} from "react";
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
import {useRouter} from 'next/router'
import Image from 'next/image';
import Modal from "../master/Modal/Modal";
import { getShopList } from "../Shop/_redux/Action/ShopAction";
import Axios from 'axios'
import Paginate from "../master/paginate/Paginate";
import ImageWithFallback from '../master/Image/Image';
import Link from 'next/link';

const CategoryWishProductContainer = ({ isMainCategory, subCategories, mainCategoryBanner }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showFilter, setShowFilter] = useState(false);

  const { paginate, filterParams, categoryBrandDetails, isLoading } = useSelector(
    (state) => state.CategoryWiseProductReducer
  );

  // const firstRenderRef = useRef(true);


  const {brand: brandQuery = "", category: categoryQuery = "", type: typeQuery = "", storeById = "", search: searchQuery = ""} = router.query;


  const paginateHandler = (page) => {
    if (!page) return;

    window.scrollTo({ top: 0, behavior: "smooth" });

    const filterParamClone = { ...filterParams };
    filterParamClone.page  = page.selected + 1;

    dispatch(setFilterParams(filterParamClone));
  };

  const getImgSrc = () => {
    let src = categoryBrandDetails?.banner_url ?? "";

    if(isMainCategory) {
      src = mainCategoryBanner;
    }

    if(typeQuery === 'haat-bazaar') {
      src = '/images/campaign/haatbazaar-banner.jpg';
    }

    return src;
  }




  useEffect(() => {
    dispatch(getSubCategories(null))
  }, [])



  return (
    <>
      <Modal 
        visible={showFilter}
        closeModalHandler={() => setShowFilter(preState => !preState)}
        sideModal={true}
      >
        <ProductFilter show={true} />
      </Modal>

      <section className="pt-2 pt-md-4">
        {
          (categoryBrandDetails.banner_url || typeQuery === 'haat-bazaar' || isMainCategory) && (
              <div className="banner mb-3">
                <div className="banner-photo-box">
                  <Image src={getImgSrc()} width={1260} height={280} />
                </div>
              </div>
          )
        }

        <div className="row">
          {
            !isMainCategory &&
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
                  </>
                )
              }
            </div>
          }
          {
            isMainCategory &&
            subCategories.map?.((item, index) => {
              return (
                <div className="col-lg-3 col-md-4 py-3" key={index}>
                  <div className="pointer">
                    <Link href={`/products?category=${encodeURIComponent(item.short_code)}&name=${encodeURIComponent(item.name)}`}>
                      <a>
                        <div className="text-center">
                          <ImageWithFallback width={400} height={280} src={item?.image_url} alt={item?.name} />
                          <span className="d-inline-block pt-2 color-secondary color-main-hover">
                            {
                              item?.name
                            }
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default CategoryWishProductContainer;








// const {
//   search,
//   category,
//   brand,
//   min_price,
//   max_price,
//   attributes,
//   rating,
//   paginate_no,
//   order_by,
//   seller_id,
//   order,
//   type,
//   page
// } = filterParams;

// useEffect(() => {
//   const queries = {}
  
//   if(router.query["storeById"]) {
//     queries["storeById"] = router.query.storeById
//   }
  
//   if(router.query["brand"]) {
//     queries["brand"] = router.query.brand
//   }
  
//   if(router.query["category"]) {
//     queries["category"] = router.query.category
//   }
  
//   if(router.query["type"]) {
//     queries["type"] = router.query.type
//   }
  
//   if(router.query["storeById"]) {
//     queries["seller_id"] = router.query.storeById
//   }
  
//   if(router.query["search"]) {
//     queries["search"] = router.query.search
//   }
  
//   const cloneFilterParams = {...filterParams};

//   for(const query in queries) {
//     if(Array.isArray(cloneFilterParams[query])) {
//       // cloneFilterParams[query] = [];

//       if(query === 'brand') {
//         cloneFilterParams.seller_id = "";
//         cloneFilterParams.search = "";
//         cloneFilterParams.category = [];
//         cloneFilterParams.page = 1;
//         cloneFilterParams[query].push(queries[query]);

//         dispatch(getCategoryOrBrandDetails('brands/' + queries[query]));
//       }
//       if(query === 'category') {
//         cloneFilterParams.search = "";
//         cloneFilterParams.seller_id = "";
//         cloneFilterParams.brand = [];
//         // check if category same or not after remount
//         if(cloneFilterParams[query].length > 0 && !(cloneFilterParams[query][0] === queries[query])) {
//           cloneFilterParams.page = 1;
//           cloneFilterParams[query] = [];
//           cloneFilterParams[query].push(queries[query]);
//         } else {

//           cloneFilterParams[query] = [];
//           cloneFilterParams[query].push(queries[query]);
//         }

//         dispatch(getSubCategories(queries[query]))

//         dispatch(getCategoryOrBrandDetails('categories/' + queries[query]));
//       }

//     } else {
//       cloneFilterParams.category = [];
//       cloneFilterParams.brand = [];
//       cloneFilterParams.page = 1;
//       cloneFilterParams.seller_id = "";

//       if(query === 'seller_id') {
//         cloneFilterParams[query] = queries[query]
//         dispatch(getSubCategories(null))
//       }
//       if(query === 'type') {
//         cloneFilterParams[query] = queries[query]
//         dispatch(getSubCategories(null))
//       }
//       if(query === 'search') {
//         cloneFilterParams[query] = queries[query]
//         dispatch(getSubCategories(null))
//       }
//     }
//   }
//   dispatch(setFilterParams(cloneFilterParams));

//   dispatch(getShopList());

// }, [brandQuery, categoryQuery, typeQuery, storeById, searchQuery, mainCategory]);


// useEffect(() => {
//   return () => {
//     dispatch(resetFilterParams(filterParams))
//   }
// }, [])


// useEffect(() => {
//   // if(firstRenderRef.current) {
//   //   firstRenderRef.current = false
//   //   return
//   // }
//   const source = Axios.CancelToken.source();
//   dispatch(getFilteredProducts(filterParams, source));
//   window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top after mount

//   return () => {
//     source.cancel()
//   }
// }, [
//   attributes,
//   JSON.stringify(brand),
//   JSON.stringify(category),
//   max_price,
//   min_price,
//   rating,
//   search,
//   paginate_no,
//   order_by,
//   order,
//   type,
//   page,
//   seller_id
// ]);
