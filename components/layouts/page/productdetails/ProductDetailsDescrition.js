import React, { Component } from "react";
import SuggestionProduct from "./SuggestionProduct";

const ProductDetailsDescrition = ({ product }) => {
  console.log(`product`, product)
  return (
    <>
      <div className="homebanner pb">
        <div className="container ">
          <div className="row">
            <div className="col-lg-9">
              <div className="productdescriptiondetails">
                <div className="row">
                  <div className="col-12">
                    <div className="productdescriptiontext">
                      <h1>Description </h1>
                      <p>
                        {product.description && product.description}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      {
                        product.images && product.images.length > 0 && (
                          product.images.map((item, index) => (
                            <div className="col-md-4 p-2">
                              {/* <div className="productdescription"> */}
                              <img className="img-fluid" key={index} src={item.image_url} />
                              {/* </div> */}
                            </div>
                          ))
                        )
                      }
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-lg-3">
              <SuggestionProduct />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDescrition;
