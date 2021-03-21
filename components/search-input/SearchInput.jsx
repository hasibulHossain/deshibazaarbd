import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux';
import SearchLoadingSkelleton from './SearchLoadingSkelleton';
import { searchProductAction } from "./redux/SearchAction";
import { useRouter } from 'next/router'

const SearchInput = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const suggestions = useSelector((state) => state.search.products);
  const loading = useSelector((state) => state.search.loading);

  const searchProduct = (e) => {
    setSearch(e.target.value);
    dispatch(searchProductAction(e.target.value))
  };

  const searchClick = (searchData) => {
    if (searchData.is_item) {
      router.push(`/products/${searchData.slug}`);
    }
  }

  return (
    <>
      <Paper className="searchInput">
        <div className="float-left search-text">
          <InputBase
            placeholder="Search Products"
            onChange={(e) => searchProduct(e)}
          />
        </div>
        <div className="float-right search-icon">
          <IconButton aria-label="Search" className="searchPlaceholder">
            <i className="fas fa-search"></i>
          </IconButton>
        </div>
        <div className="clearfix"></div>
      </Paper>

      <SearchLoadingSkelleton loading={loading} />

      {
        search.length > 0 && suggestions.length === 0 && !loading && (
          <div className="search-suggestion-area">
            <p className="text-danger text-center">
              Sorry, No Product found by - {search} <br />
              Please try with another keyword !
            </p>
          </div>
        )
      }

      {search.length > 0 && suggestions.length > 0 && (
        <div className="search-suggestion-area">
          {suggestions.map((searchItem, searchIndex) => (
            <div className="search-suggestion-item" key={searchIndex} onClick={() => searchClick(searchItem, searchIndex)}>
              {searchItem.search_image_url !== null ? (
                <div className="float-left">
                  <img src={searchItem.search_image_url} alt="" width={50} />
                </div>
              ) : (
                <div className="float-left">
                  <img
                    src="/images/default/fallback-image.png"
                    alt=""
                    width={50}
                  />
                </div>
              )}

              <div className="float-left">
                <h5 className="search-title">
                  {
                    searchItem.is_category ? 'Category - ' : ''
                  }
                  {searchItem.search_name}
                </h5>
                {searchItem.search_price > 0 && (
                  <p className="search-price">৳ {searchItem.search_price}</p>
                )}
              </div>

              <div className="clearfix"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
