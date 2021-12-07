import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchLoadingSkeleton from "./SearchLoadingSkeleton";
import { searchProductAction } from "./_redux/Action/SearchInputAction";
import { useRouter } from "next/router";
import { translate } from "../../services/translation/translation";
import { formatCurrency } from "../../services/currency";
import axios from "axios";
import { toggleBackdrop } from "../../_redux/store/action/globalAction";

const ISSERVER = typeof window === "undefined";

const data = [
  {
    id  : 12341324123,
    name: 'mobile'
  },
  {
    id  : 12341323123,
    name: 'samsung'
  },
  {
    id  : 12341324123,
    name: 't-shirt'
  },
]


const SearchInput = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isSuggestionVisible, setIsSuggestionVisible] = useState(false);
  const [searchType, setSearchType] = useState("product"); // products || shops || brands
  const [searchHistory, setSearchHistory] = useState([]);

  const suggestions = useSelector((state) => state.SearchReducer.products);
  const loading = useSelector((state) => state.SearchReducer.loading);
  const firstRenderRef = useRef(true);
  const searchRef = useRef();



  const searchByList = [
    {label: 'products', id: 'product'},
    {label: 'shops', id: 'shop'},
    {label: 'brands', id: 'brand'},
    {label: 'Categories', id: 'category'},
  ];

  const searchProduct = (e) => {
    setIsSearched(true)
    setIsSuggestionVisible(false);
    setSearch(e.target.value);
  };

  const onKeyDownHandler = (key) => {
    if(!search) return;
    if(key === "Enter") {
      setIsSearched(true)
      const searchHistories = JSON.parse(localStorage.getItem('search-history'))|| [];
      const currentSearch = {id: new Date().getTime(), name: search}

      searchHistories.push(currentSearch);

      setSearchHistory(searchHistories);
      
      localStorage.setItem('search-history', JSON.stringify(searchHistories))

      // searchRef.current.value = ""

      // setSearch(""); @todo 

      router.push(`/products?search=${encodeURIComponent(search)}`).then((_) => {
        window.scrollTo(0, 0);
      });
    }
  }

  const searchClick = (searchData) => {
    if(!search) return;
    setIsSearched(true)
    // searchRef.current.value = ""

    // setSearch(""); @todo 

    setSearchType('product');
    dispatch(toggleBackdrop());

    const uriEncodedSlug = encodeURIComponent(searchData.slug);

    if (searchData.is_item) {
      const uri = `/products/${uriEncodedSlug}`;
      router
        .push(uri)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop())
        });
    } else if (searchData.is_category) {
      router
      .push(`/products?category=${uriEncodedSlug}&name=${encodeURIComponent(searchData.search_name)}`)
      .then((_) => {
        window.scrollTo(0, 0);
        dispatch(toggleBackdrop());
      });
    } else if (searchData.is_brand) {
      router
      .push(`/products?brand=${uriEncodedSlug}&name=${encodeURIComponent(searchData.search_name)}`)
        .then((_) => {
          window.scrollTo(0, 0);
          dispatch(toggleBackdrop());
        });
    } else if (searchData.is_shop) {
      router
        .push(`/store/${uriEncodedSlug}`)
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
    const getSearchHistory = JSON.parse(localStorage.getItem('search-history')) || [];
  
    setSearchHistory(getSearchHistory)

  }, [JSON.stringify(searchHistory)])

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

  const inputFocusHandler = () => {
    if(search) return;
    setIsSearched(false)

    if(searchHistory.length === 0) return;
    
    setIsSuggestionVisible(true);
  }

  const searchHistoryClickHandler = searchQuery => {
    setSearch(searchQuery);
    searchRef.current.value = searchQuery || ""
  }

  const toggleInputAction = () => {
    if(isSuggestionVisible && !search) {
      setIsSuggestionVisible(false)
    }

    if(search) {
      setSearch("")
      searchRef.current.value = ""
    }
  }

  const removeSearchItem = (id) => {
    const cloneSearchHistory = [...searchHistory];

    const updatedSearchHistory = cloneSearchHistory.filter(searchItem => searchItem.id !== id)

    setSearchHistory(updatedSearchHistory);

    localStorage.setItem('search-history', JSON.stringify(updatedSearchHistory));
  }  

  return (
    <>
      <input
        ref={el => searchRef.current = el}
        className="search-input"
        placeholder={translate("Search for Products, Brands or more")}
        onFocus={inputFocusHandler}
        // onBlur={() => setIsSuggestionVisible(false)}
        onChange={(e) => searchProduct(e)}
        onKeyDown={e => onKeyDownHandler(e.key)}
      />

      <div style={{position: 'absolute', zIndex: '100', right: 'calc(63px + 15px)', top: '16px', fontSize: '12px'}}>
        <span className="color-main pointer" onClick={toggleInputAction}>
          {
            (isSuggestionVisible && !search) ? 'close' : (search) && 'remove'
          }
          </span>
      </div>

      <div className="header-custom-prepend pointer" onClick={() => onKeyDownHandler('Enter')} >
        <i className="fas fa-search"></i>
      </div>

        {
          isSuggestionVisible && !search && (
            <div className="search-suggestion-area modal-scrollbar">
              {
                searchHistory && searchHistory.map((searchItem, index) => (
                  <div className="py-3 px-2" key={index}>
                    <div className="d-flex justify-content-between">
                      <span className="pointer" onClick={() => {searchHistoryClickHandler(searchItem.name); setIsSuggestionVisible(false); setIsSearched(true); setTimeout(() => {searchRef.current.focus()}, 50);}}>{searchItem.name}</span>
                      <span style={{fontSize: '12px'}} className="pointer color-main" onClick={() => removeSearchItem(searchItem.id)}>delete</span>
                    </div>
                  </div>
                ))
              }

            </div>
          )
        }

      {search.length > 0 && (
        <div className="search-suggestion-area modal-scrollbar">
          <div className="p-2" style={{backgroundColor: '#f7f7f7'}}>
              <div className="d-flex">
                  {
                    searchByList.map((item, index) => (
                      <span
                        key={index}
                        className={`search-suggestion-area-search_by-item d-inline-block px-1 py-2 mr-3 ${searchType === item.id ? 'active' : ''}`}
                        onClick={() => searchByListHandler(item.id)} >
                        {item.label}
                      </span>
                    )) 
                  }
              </div>
          </div>

          {
            search && loading && isSearched && <SearchLoadingSkeleton/>
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