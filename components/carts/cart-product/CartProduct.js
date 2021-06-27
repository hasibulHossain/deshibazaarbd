import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus, faTimes, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { deleteCartItemAction, updateCartQtyAction } from '../_redux/action/CartAction';

const CartProduct = ({ cart }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cart.quantity);

  // increase quantity 
  const increaseQuantity = (id, quantity) => {
    // carts.find((cart) => cart.productID === id && setQuantity((quantity += 1)));
    setQuantity((quantity + 1))
    dispatch(updateCartQtyAction(id, (quantity + 1)));
  };

  //decrease quantity
  const decrementQunatity = (id, quantity) => {
    // carts.find((cart) => cart.productID === id && quantity > 1 && setQuantity((quantity -= 1)))
    setQuantity((quantity - 1))
    if (quantity > 1) {
      dispatch(updateCartQtyAction(id, (quantity - 1)));
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (cart) => {
    setShow(true);
  };

  const handleDeleteCartProduct = (productID) => {
    dispatch(deleteCartItemAction(productID));
    setShow(false);
  }
  return (
    <>
      <Modal
        // {...props}
        show={show}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <button className="close_btn" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <p className="remove_title">
            Remove from cart <br /> item will be removed from order
          </p>
          <div className="d-flex justify-content-end">
            <div>
              <button className="custom_secondary_btn" onClick={handleClose}>CANCEL</button>
              <button className="custom-button-component ml-3" onClick={() => handleDeleteCartProduct(item.productID)}>REMOVE</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className="row justify-content-between">
        <div className="col-md-7">
          <div className="product_cart_inner row">
            <div className="col-4 product_cart_left">
              <input type="checkbox" className="cart-checkbox" />
              <img
                src={cart.productImage === null ? 'https://img.icons8.com/plasticine/2x/image.png' : cart.productImage }
                alt={cart.productName}
                className="img-thumbnail product_cart_img"
              />
            </div>
            <div className="product_cart_inner_details col-8">
              <h4 className="innser_cart_product_name">{cart.productName}</h4>

              {/* <div className="cart_product_info">
                <span>No Brand, </span>
                <span>Ring Size:Adjustable, </span>
                <span>Color Family:Silver</span>
              </div> */}

              <div className="cart_product_price">
                <span className="price">
                  ৳{cart.offerPrice !== null && cart.offerPrice !== "0" ? cart.offerPrice : cart.price}
                </span>

                <span className="offer_price">
                  ৳{cart.offerPrice !== null && cart.offerPrice !== "0" ? cart.price : 0}
                </span>
              </div>

              <p className="discount_percantage">
                {(((cart.price - cart.offerPrice) * 100) / cart.price).toFixed(0)} %
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product_cart_purchase">
            <div className="quantity">
              <button
                disabled={quantity <= 1 ? true : false}
                // onClick={() => setQuantity(quantity - 1)}
                onClick={() => decrementQunatity(cart.productID, quantity)}
                className={quantity <= 1 ? `not-allowed` : `pointer`}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input type="text" value={quantity} />
              <button
                className="pointer"
                // onClick={() => setQuantity(quantity + 1)}
                onClick={() => increaseQuantity(cart.productID, quantity)}
              >
                <FontAwesomeIcon className="text-danger" icon={faPlus} />
              </button>
            </div>
            <FontAwesomeIcon className="cart_wish_list" icon={faHeart} />
            <FontAwesomeIcon className="remove_product_from_cart" icon={faTrash} onClick={() => handleShow(cart)} />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default CartProduct;