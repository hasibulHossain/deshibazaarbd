import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchLoadingSkeleton from "./SearchLoadingSkeleton";
import { searchProductAction } from "./_redux/Action/SearchInputAction";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { translate } from "../../services/translation/translation";
import Translate from "../translation/Translate";
import { formatCurrency } from "../../services/currency";
import axios from "axios";
import { toggleBackdrop } from "../../_redux/store/action/globalAction";

const SearchInput = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState("product"); // products || shops || brands
  const suggestions = useSelector((state) => state.SearchReducer.products);
  const loading = useSelector((state) => state.SearchReducer.loading);
  const firstRenderRef = useRef(true);

  const searchByList = [
    {label: 'products', id: 'product'},
    {label: 'shops', id: 'shop'},
    {label: 'brands', id: 'brand'},
    {label: 'Categories', id: 'category'},
  ];

  const searchProduct = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDownHandler = (key) => {
    if(key === "Enter") {
      setSearch("");
      router.push(`/products?search=${encodeURI(search)}`).then((_) => {
        window.scrollTo(0, 0);
      });
    }
  }

  const searchClick = (searchData) => {
    setSearch("");
    setSearchType('product');
    dispatch(toggleBackdrop())

    if (searchData.is_item) {
      const uri = encodeURI(`/products/${searchData.slug}`);
      router
        .push(uri)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop())
        });
    } else if (searchData.is_category) {
      router
        .push(`/products?category=${searchData.id}`)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop());
        });
    } else if (searchData.is_brand) {
      router
        .push(`/products?brand=${searchData.id}`)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop());
        });
    } else if (searchData.is_shop) {
      router
        .push(`/store/${searchData.slug}`)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop());
        });
    }
  };

  const searchByListHandler = (id) => {
    setSearchType(id);
  }

  useEffect(() => {
    if(firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    const source = axios.CancelToken.source();

    dispatch(searchProductAction({search: search, type: searchType}, source));

    if(!search) {
      setSearchType('product')
    }

    return () => {
      source.cancel()
    }
  }, [search, searchType])

  return (
    <>
      <input
        placeholder={translate("Search for Products, Brands or more")}
        onChange={(e) => searchProduct(e)}
        onKeyDown={e => onKeyDownHandler(e.key)}
      />
      <div className="header-custom-prepend pointer" onClick={() => onKeyDownHandler('Enter')} >
        <FontAwesomeIcon className="custom-fontAwesome" icon={faSearch} />
      </div>

      {search.length > 0 && (
        <div className="search-suggestion-area modal-scrollbar">
          <div className="p-2" style={{backgroundColor: '#f7f7f7'}}>
              <div className="d-flex">
                  {
                    searchByList.map(item => (
                      <span 
                        className={`search-suggestion-area-search_by-item d-inline-block px-1 py-2 mr-3 ${searchType === item.id ? 'active' : ''}`}
                        onClick={() => searchByListHandler(item.id)} >
                        {item.label}
                      </span>
                    )) 
                  }
              </div>
          </div>

          {
            search && loading && <SearchLoadingSkeleton/>
          }

          {
            search && suggestions.length === 0 && !loading && (
              <div
                className="text-danger text-center pt-1" >
                <p style={{lineHeight: '1.5rem', paddingTop: '10px'}}>
                  Sorry, No Product found by "{search}" <br></br>
                  Please try with another keyword
                </p>
              </div>
            )
          }

          {suggestions.map((searchItem, searchIndex) => (
            <div
              className="search-suggestion-item"
              key={searchIndex}
              onClick={() => searchClick(searchItem)} >
                <div className="search-suggestion-item__img-box">
                  <img src={searchItem.search_image_url ? searchItem.search_image_url : '/images/default/fallback-image.png'} alt={searchItem.name} />
                </div>

              <div className="search-suggestion-item__info">
                <h5 className="search-suggestion-item__title">
                  {searchItem.search_name}
                </h5>
                {searchItem.search_price > 0 && (
                  <p className="search-suggestion-item__search-price">{formatCurrency(+searchItem.search_price)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
