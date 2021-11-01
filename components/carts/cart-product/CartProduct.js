import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCartItemAction, toggleAllCartSelection } from '../_redux/action/CartAction';
import CartQuantity from '../partials/CartQuantity';
import { formatCurrency } from '../../../services/currency';
import { toggleProductModalAction } from '../../products/_redux/Action/ProductAction';
import Modal from '../../master/Modal/Modal';

const CartProduct = ({ cart }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDeleteCartProduct = (productID) => {
    dispatch(deleteCartItemAction(productID));
    setShow(false);
  }

  return (
    <>
    <Modal visible={show} closeModalHandler={handleClose} style={{}}>
          <p className="remove_title">
            Remove from cart
          </p>
          <div className="mb-3">
            Product will be removed from your Cart...
          </div>
          <div className="d-flex justify-content-end">
            <button className="custom_secondary_btn custom-button-component" onClick={handleClose}>Cancel</button>
            <button className="custom-button-component ml-3" style={{ padding: '5px 10px' }} onClick={() => handleDeleteCartProduct(cart.productID)}>Remove</button>
          </div>
    </Modal>
      <div className="row justify-content-between">
        <div className="col-lg-3 col-5 product_cart_left">
          <input type="checkbox" className="cart-checkbox pointer mr-2" checked={cart.isChecked} onChange={() => dispatch(toggleAllCartSelection(!cart.isChecked, cart.productID))} />
          <img
            src={cart.productImage === null ? 'https://img.icons8.com/plasticine/2x/image.png' : cart.productImage}
            alt={cart.productName}
            className="img-thumbnail product_cart_img"
          />
        </div>
        <div className="col-lg-5 col-7">
          <div className="product_cart_inner_details mt-2">
            <h4 className="innser_cart_product_name pointer" onClick={() => dispatch(toggleProductModalAction(cart.sku))}>{cart.productName}</h4>

            <div className="cart_product_price">
              <span className="price">
                {formatCurrency(cart.offerPrice !== null && cart.offerPrice !== 0 ? cart.offerPrice : cart.price)}
              </span>

              <span className="offer_price">
                {cart.offerPrice !== null && cart.offerPrice !== 0 ? formatCurrency( cart.price ) : ''}
              </span>
            </div>

            <p className="discount_percantage">
              {cart.offerPrice !== null && cart.offerPrice !== 0 ? (((cart.price - cart.offerPrice) * 100) / cart.price).toFixed(0) + '%' : ''}
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-12">
          <div className="product_cart_purchase">
            <CartQuantity cart={cart} />
            <i className="fas fa-trash remove_product_from_cart" onClick={() => handleShow(cart)}></i>
          </div>
        </div>
      </div>

    </>
  );
};

export default CartProduct;