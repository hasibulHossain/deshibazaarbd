import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, GetCategoryList } from '../../../../store/redux/products/actions/ProductAction';
import LoadingSkelleton from '../../../master/skelleton/LoadingSkelleton';
import ProductMiniCard from './ProductMiniCard';
import ProductLoadingSkelleton from './ProductLoadingSkelleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RatingDisplay from '../../../rating/RatingDisplay';
import EcomPaginator from './../../../../components/pagination/EcomPaginator';
import { windowScrollPosition } from '../../../utils/WindowHelper';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ProductList = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const productsPaginated = useSelector((state) => state.product.productsPaginated);
  const filterProduct = useSelector((state) => state.product.filterProduct);
  const [page, setPage] = useState(1);

  const { category, brand, min_price, max_price, rating } = filterProduct;
  const { cat = null, br = null, sh = null } = props;
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProducts(page, cat, br, sh));
    dispatch(GetCategoryList())
  }, []);

  const handlePageChange = (page) => {
    windowScrollPosition(0, 50);
    const updatePageNo = parseInt(page.selected) + 1;
    setPage(updatePageNo);
    dispatch(fetchProducts(updatePageNo));
  }

  const isLoad = true;

  return (
    <>
      {loading && (
        <>
          <ProductLoadingSkelleton />
        </>
      )}

      <div className="row">
        { !loading && products.length > 0 &&
          products.map((product, index) => (
            <div className="col-xl-2 col-lg-3 col-6" key={index}>
              <ProductMiniCard product={product} />
            </div>
          ))}
      </div>

      <div className="ecom-pagination mt-3">
        {
          products.length > 0 &&
          <EcomPaginator
            pageCount={productsPaginated ? productsPaginated.last_page : 0}
            handlePageClick={handlePageChange}
          />
        }
      </div>

    </>
  );
}

export default ProductList;