import React from "react";
import Parser from 'html-react-parser';

const ProductDetailsDescrition = ({ product }) => {
  console.log(`product`, product)
  return (
    <>
      <div className="homebanner pb-3">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="productdescriptiondetails">
                <div className="row">
                  <div className="col-12">
                    <div className="productdescriptiontext">
                      {
                        typeof product.description != 'undefined' && product.description !== null ?
                          Parser(product.description) : '...'
                      }
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsDescrition;
