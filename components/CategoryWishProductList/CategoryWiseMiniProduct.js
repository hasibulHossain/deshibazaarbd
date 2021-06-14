import { faHeart, faListAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryWiseProductList } from './_redux/Action/CategoryWiseProductAction';
import ReactStars from "react-rating-stars-component";

const CategoryWiseMiniProduct = ({ columns }) => {
    const dispatch = useDispatch();
    const categoriesProductList = useSelector((state) => state.CategoryWiseProductReducer.categoriesProductList);
    useEffect(() => {
        dispatch(getCategoryWiseProductList())
    }, []);

    console.log('columns :>> ', columns);
    return (
        <>
            {
                categoriesProductList.length > 0 && categoriesProductList.map((item, index) => (
                    <div key={index} className={columns}>
                        <div className={columns == "col-md-3" ? "categories_wise_product_card filter_column_3 shadow-sm p-3 mb-3 bg-white rounded" : "categories_wise_product_card filter_column_10 shadow-sm p-3 mb-3 bg-white rounded"}>
                            <div className="product-purchase-section">
                                <button>
                                    <FontAwesomeIcon className="add_to_cart" icon={faShoppingBag} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="withlist" icon={faHeart} />
                                </button>
                                <button>
                                    <FontAwesomeIcon className="" icon={faListAlt} />
                                </button>
                            </div>
                            <div className="product-card-body">
                                <img src={item.productImg} alt={item.title} className="" />
                                <div>
                                    <p className="product-title mt-3">{item.title}</p>
                                    <ReactStars
                                        value={item.rating}
                                        // onChange={ratingChanged}
                                        size={24}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="product_pirce">
                                        <p className="offerPrice">${item.offerPrice}</p>
                                        <p className="price">${item.price}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    );
};

export default CategoryWiseMiniProduct;