import React, { useEffect } from "react";
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../../page-title/PageTitle";
import FirstPurchaseProductList from "./FirstPurchaseProductList";

const FirstPurchaseProduct = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { cat } = props;

  return (
    <>
      <div className="HomeProduct">
        <div className="container-fluid">
          <div className="ml-4">
            <PageTitle title="First Purchase Offer" description="First time registered user's offers..." />
          </div>
          <div className="row m-2">
            <div className="col-lg-12">
              <FirstPurchaseProductList cat={cat} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstPurchaseProduct;
