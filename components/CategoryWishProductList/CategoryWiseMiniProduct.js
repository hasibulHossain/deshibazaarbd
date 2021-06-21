import {
  faHeart,
  faListAlt,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";

const CategoryWiseMiniProduct = ({ columns }) => {
  const { products } = useSelector((state) => state.CategoryWiseProductReducer);

  const ratingChanged = (value) => {
    console.log("vlaue => start => ", value);
  };

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
                  <ReactStars
                    value={+item.average_rating}
                    onChange={ratingChanged}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <div className="product_pirce">
                    <p className="offerPrice">${item.offer_selling_price}</p>
                    <p className="price">${item.default_selling_price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default CategoryWiseMiniProduct;
