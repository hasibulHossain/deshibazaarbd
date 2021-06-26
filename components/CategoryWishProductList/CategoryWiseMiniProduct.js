import {
  faHeart,
  faListAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import PriceCalculation from "../ProductList/PriceCalculation";
import ProductRating from "../ProductList/ProductRating";

const CategoryWiseMiniProduct = ({ columns }) => {
  const { products } = useSelector((state) => state.CategoryWiseProductReducer);

  return (
    <>
      {products.length > 0 &&
        products.map((item, index) => (
          <div key={index} className={columns}>
            <div
              className={
                columns == "col-md-3"
                  ? "categories_wise_product_card filter_column_3 shadow-sm p-3 mb-3 bg-white rounded"
                  : "categories_wise_product_card filter_column_10 shadow-sm p-3 mb-3 bg-white rounded"
              }
            >
              <div className="product-purchase-section">
                <button>
                  <FontAwesomeIcon
                    className="add_to_cart"
                    icon={faShoppingBag}
                  />
                </button>
                <button>
                  <FontAwesomeIcon className="withlist" icon={faHeart} />
                </button>
                <button>
                  <FontAwesomeIcon className="" icon={faListAlt} />
                </button>
              </div>
              <div className="product-card-body">
                <img
                  src={`${process.env.NEXT_PUBLIC_URL}images/products/${item.featured_image}`}
                  alt={item.name}
                  className=""
                />

                <div>
                  <p className="product-title mt-3">{item.name}</p>
                  <PriceCalculation item={item} />
                  <ProductRating rating={item.average_rating} />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoryWiseMiniProduct;
