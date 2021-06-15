import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartItemAction, updateCartQtyAction } from '../../_redux/CartProduct/Action/CartAction';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Modal from '../../master/Modal/Modal';
import RemoveCartItem from '../../RemoveCartItem/RemoveCartItem'
const CartProduct = ({ item }) => {
  const dispatch = useDispatch();
  const { isModalActive } = useSelector((state) => state.GlobalReducer);
  const [quantity, setQuantity] = useState(item.quantity);
  const handleDeleteCartProduct = (productID) => {
    dispatch(deleteCartItemAction(productID))
  }

  // increase quantity 
  const increaseQuantity = (id, quantity) => {
    // carts.find((item) => item.productID === id && setQuantity((quantity += 1)));
    setQuantity((quantity + 1))
    dispatch(updateCartQtyAction(id, (quantity + 1)));
  };
  //decrease quantity
  const decrementQunatity = (id, quantity) => {
    // carts.find((item) => item.productID === id && quantity > 1 && setQuantity((quantity -= 1)))
    setQuantity((quantity - 1))
    if (quantity > 1) {
      dispatch(updateCartQtyAction(id, (quantity - 1)));
    }
  };

  const deleteItemsHandler = () => {
    dispatch(toggleModal());
  };
  return (
    <>
      <Modal
        visible={isModalActive}
        closeModalHandler={() => console.log("modal close handler")}
      >
        <div style={{ width: "27rem" }}>
          <RemoveCartItem>
            Remove from cart item will be removed from order
          </RemoveCartItem>
        </div>
      </Modal>

      <div className="row justify-content-between">
        <div className="col-md-7">
          <div className="product_cart_inner row">
            <div className="col-4 product_cart_left">
              <input type="checkbox" className="cart-checkbox" />
              <img src="https://img.icons8.com/plasticine/2x/image.png" alt={item.productName} className="img-thumbnail product_cart_img" />
            </div>
            <div className="product_cart_inner_details col-8">
              <h4 className="innser_cart_product_name">{item.productName}</h4>
              <div className="cart_product_info">
                <span>No Brand, </span>
                <span>Ring Size:Adjustable, </span>
                <span>Color Family:Silver</span>
              </div>
              <div className="cart_product_price">
                <span className="price">
                  ৳-25
                </span>
                <span className="offer_price">
                  ৳-10
                </span>
              </div>
              <p className="discount_percantage">-5%</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product_cart_purchase">
            <div className="quantity">
              <button
                disabled={quantity <= 1 ? true : false}
                // onClick={() => setQuantity(quantity - 1)}
                onClick={() => decrementQunatity(item.productID, quantity)}
                className={quantity <= 1 ? `not-allowed` : `pointer`}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input type="text" value={quantity} />
              <button
                className="pointer"
                // onClick={() => setQuantity(quantity + 1)}
                onClick={() => increaseQuantity(item.productID, quantity)}
              >
                <FontAwesomeIcon className="text-danger" icon={faPlus} />
              </button>
            </div>
            <FontAwesomeIcon className="cart_wish_list" icon={faHeart} />
            <FontAwesomeIcon className="remove_product_from_cart" icon={faTrash} onClick={deleteItemsHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;