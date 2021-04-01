import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ProductLoadingSkelleton from './ProductLoadingSkelleton';
import { makeStyles } from '@material-ui/core/styles';
import EcomPaginator from '../../../pagination/EcomPaginator';
import { windowScrollPosition } from '../../../utils/WindowHelper';
import FirstPurchaseProductMiniCard from './FirstPurchaseProductMiniCard';
import { getOfferProducts } from './_redux/actions/FirstPurchaseProductAction';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const FirstPurchaseProductList = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.offerProduct.loading);
  const products = useSelector((state) => state.offerProduct.products);
  const productsPaginated = useSelector((state) => state.product.productsPaginated);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getOfferProducts("first_purchase_offer"));
  }, []);

  const handlePageChange = (page) => {
    windowScrollPosition(0, 50);
    const updatePageNo = parseInt(page.selected) + 1;
    setPage(updatePageNo);
    dispatch(getOfferProducts(updatePageNo));
  }

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
              <FirstPurchaseProductMiniCard product={product} />
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

export default FirstPurchaseProductList;