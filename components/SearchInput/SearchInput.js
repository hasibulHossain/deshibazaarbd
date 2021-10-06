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
  const suggestions = useSelector((state) => state.SearchReducer.products);
  const loading = useSelector((state) => state.SearchReducer.loading);
  const firstRenderRef = useRef(true);

  const searchProduct = (e) => {
    setSearch(e.target.value);
  };

  const onKeyDownHandler = (e) => {
    if(e.key === "Enter") {
      // router.push('/products')
    }
  }

  const searchClick = (searchData) => {
    setSearch("");
    dispatch(toggleBackdrop())

    if (searchData.is_item) {
      const uri = encodeURI(`/products/${searchData.slug}`);
      router
        .push(uri)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop())
        });
    }
    if (searchData.is_category) {
      router
        .push(`/products?category=${searchData.id}`)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop());
        });
    }
  };

  useEffect(() => {
    if(firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    const source = axios.CancelToken.source();

    dispatch(searchProductAction(search, source));

    return () => {
      source.cancel()
    }
  }, [search])

  return (
    <>
      <input
        placeholder={translate("Search for Products, Brands or more")}
        onChange={(e) => searchProduct(e)}
        onKeyDown={onKeyDownHandler}
      />
      <div className="header-custom-prepend pointer">
        <FontAwesomeIcon className="custom-fontAwesome" icon={faSearch} />
      </div>

      {
        search && loading && <SearchLoadingSkeleton/>
      }
      {search.length > 0 && suggestions && suggestions.length === 0 && !loading && (
        <div className="search-suggestion-area">
          <div
            className="text-danger text-center"
            style={{ margin: 0, paddingTop: '10px', display: "flex", flexDirection: "column" }}
          >
            <p>
              <Translate>Sorry, No Product found by</Translate> - {search}{" "}
            </p>

            <p>
              <Translate>Please try with another keyword</Translate> !
            </p>
          </div>
        </div>
      )}

      {search.length > 0 && suggestions && suggestions.length > 0 && (
        <div className="search-suggestion-area modal-scrollbar">
          {suggestions.map((searchItem, searchIndex) => (
            <div
              className="search-suggestion-item"
              key={searchIndex}
              onClick={() => searchClick(searchItem, searchIndex)}
            >
              {searchItem.search_image_url !== null ? (
                <div className="search-suggestion-item__img-box">
                  <img src={searchItem.search_image_url} alt={searchItem.name} />
                </div>
              ) : (
                <div className="search-suggestion-item__img-box">
                  <img
                    src="/images/default/fallback-image.png"
                    alt="fallback image"
                  />
                </div>
              )}

              <div className="search-suggestion-item__info">
                <h5 className="search-suggestion-item__title">
                  {searchItem.is_category ? "Category - " : ""}
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
