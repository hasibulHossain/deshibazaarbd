import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../../page-title/PageTitle";
import FirstPurchaseProductList from "./FirstPurchaseProductList";
import { getOfferProducts } from './_redux/actions/FirstPurchaseProductAction';

const DealsAndOffer = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { cat } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getOfferProducts("normal_offer"));
  }, []);

  const handlePageChange = (page) => {
    windowScrollPosition(0, 50);
    const updatePageNo = parseInt(page.selected) + 1;
    setPage(updatePageNo);
    dispatch(getOfferProducts(updatePageNo));
  }
  return (
    <>
      <div className="HomeProduct">
        <div className="container-fluid">
          <div className="ml-4">
            <PageTitle title="Deals and offer" description="Latest offer for everyone..." />
          </div>
          <div className="row m-2">
            <div className="col-lg-12">
              <FirstPurchaseProductList handlePageChange={handlePageChange} cat={cat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DealsAndOffer;
