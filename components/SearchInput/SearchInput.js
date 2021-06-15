import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import SearchLoadingSkelleton from "./SearchLoadingSkelleton";
import { searchProductAction } from "./_redux/Action/SearchInputAction";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const suggestions = useSelector((state) => state.SearchReducer.products);
  const loading = useSelector((state) => state.SearchReducer.loading);

  const searchProduct = (e) => {
    setSearch(e.target.value);
    dispatch(searchProductAction(e.target.value));
  };

  const searchClick = (searchData) => {
    if (searchData.is_item) {
      router.push(`/products/${searchData.slug}`);
    }
  };

  return (
    <>
      <input
        placeholder="Search for Products, Brands or more"
        onChange={(e) => searchProduct(e)}
      />
      <div className="header-custom-prepend pointer">
        <FontAwesomeIcon className="custom-fontAwesome" icon={faSearch} />
      </div>

      <SearchLoadingSkelleton loading={loading} />

      {search.length > 0 && suggestions.length === 0 && !loading && (
        <div className="search-suggestion-area">
          <div
            className="text-danger text-center"
            style={{ margin: 0, display: "flex", flexDirection: "column" }}
          >
            <p>Sorry, No Product found by - {search}</p>

            <p>Please try with another keyword !</p>
          </div>
        </div>
      )}

      {search.length > 0 && suggestions.length > 0 && (
        <div className="search-suggestion-area">
          {suggestions.map((searchItem, searchIndex) => (
            <div
              className="search-suggestion-item"
              key={searchIndex}
              onClick={() => searchClick(searchItem, searchIndex)}
            >
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
                  {searchItem.is_category ? "Category - " : ""}
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