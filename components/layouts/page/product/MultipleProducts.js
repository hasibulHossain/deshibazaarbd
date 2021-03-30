import React, { useEffect } from "react";
import { useRouter } from 'next/router'

import { Form } from "react-bootstrap";
import ProductList from "./ProductList";
import { GetCategoryList, getBrandList, handleChangeCategoryFilter } from "../../../../store/redux/products/actions/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Rater from "react-rater";
import { windowScrollPosition } from "../../../utils/WindowHelper";

const MultipleProducts = (props) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const category = useSelector((state) => state.product.category);
  const brands = useSelector((state) => state.product.brands);
  const filterProduct = useSelector((state) => state.product.filterProduct);
  const pushDataString = useSelector((state) => state.product.pushDataString);
  const ratingsArray = [5, 4, 3, 2, 1];

  useEffect(() => {
    dispatch(GetCategoryList())
    dispatch(getBrandList())
  }, []);

  const handleChangeProductFilter = (name, value, e) => {
    windowScrollPosition(0, 50);
    dispatch(handleChangeCategoryFilter(name, value));
  };

  useEffect(() => {
    router.push({
      pathname: '/products',
      search: pushDataString
    })
  }, [filterProduct]);

  return (
    <>
      <div className="HomeProduct bp">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">
              
              {/* Sidebar */}
              <div className="filterSideBar ml-3">
                <div className="sidebar-section">
                  <h6>Category</h6>
                  {
                    category && category.length > 0 && category.map((item, index) => (
                      <Form.Group controlId="formBasicCheckbox" key={index}>
                        <Form.Check
                          checked={(filterProduct.category !== null) ? (filterProduct.category.id === item.id) ? true : false : false}
                          type="checkbox" label={item.name}
                          name={item.name}
                          onChange={(e) => {
                            if (filterProduct.category !== null) {
                              if (filterProduct.category.id === item.id) {
                                handleChangeProductFilter("category", null, e)
                              } else {
                                handleChangeProductFilter("category", item, e)
                              }
                            } else {
                              handleChangeProductFilter("category", item, e)
                            }
                          }}
                        />
                      </Form.Group>

                    ))
                  }
                </div>

                <div className="sidebar-section">
                  <h6>Brand</h6>
                  {
                    brands && brands.length > 0 && brands.map((item, index) => (
                      <Form.Group controlId="formBasicCheckbox" key={index}>
                        <Form.Check type="checkbox" label={item.name}
                          name={item.name}
                          checked={(filterProduct.brand !== null) ? (filterProduct.brand.id === item.id) ? true : false : false}
                          onChange={(e) => {
                            if (filterProduct.brand !== null) {
                              if (filterProduct.brand.id === item.id) {
                                handleChangeProductFilter("brand", null, e)
                              } else {
                                handleChangeProductFilter("brand", item, e)
                              }
                            } else {
                              handleChangeProductFilter("brand", item, e)
                            }
                          }}
                        />
                      </Form.Group>

                    ))
                  }
                </div>

                <div className="sidebar-section">
                  <h6>Price</h6>
                  <div className="row">
                    <div className="col-6 m-0">
                      <input type="number" min={0} className="form-control sidebar-section-input" placeholder="Min"
                        onChange={(e) => handleChangeProductFilter('min_price', e.target.value)}
                      />
                    </div>
                    <div className="col-6 m-0">
                      <input type="number" min={filterProduct.min_price} className="form-control sidebar-section-input" placeholder="Max"
                        onChange={(e) => handleChangeProductFilter('max_price', e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <Link href="/">View More</Link> */}

                </div>

                {/* <div className="sidebar-section">
                  <h6>Type</h6>
                  <Form>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Richman" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Lubnan" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Cats eye" />
                    </Form.Group>
                  </Form>
                  <Link href="/">View More</Link>

                </div> */}

                <div className="sidebar-section">
                  <h6>Rating</h6>
                  <div>
                    <span key={-1} onClick={() => handleChangeProductFilter('rating', null)} className="pointer">
                      All
                    </span>
                  </div>
                  {
                    ratingsArray.map((rating, index) => (
                      <span key={index}>
                        <span key={rating} onClick={() => handleChangeProductFilter('rating', rating)} >
                          <Rater total={5} rating={rating} interactive={false} />
                        </span>
                        <br />
                      </span>
                    ))
                  }
                </div>
              </div>

            </div>
            <div className="col-lg-10">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultipleProducts;
