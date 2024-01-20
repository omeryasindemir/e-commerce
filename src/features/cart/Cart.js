// src/features/cart/Cart.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Badge, Modal, Button } from 'react-bootstrap';
import { addToCart, removeFromCart, clearCart } from './cartSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to the cart.`, { position: "bottom-right" });
  };

  const handleRemoveFromCart = (productId, productName) => {
    dispatch(removeFromCart(productId));
    toast.error(`${productName} removed from the cart.`, { position: "bottom-right" });
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success('Shop Success.', { position: "top-right" });
  };

  // Modal state
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Open Cart
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.title} - Quantity: {item.quantity}
                <Button
                  variant="danger"
                  size="sm"
                  className="ml-2"
                  onClick={() => handleRemoveFromCart(item.id, item.title)}
                >
                  Remove
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
          {cartItems.length > 0 && (
            <div className="mt-2">
              <Badge variant="info">Total: ${getTotalPrice()}</Badge>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" style={{backgroundColor:"green"}} onClick={handleClearCart}>
          Confirm Cart
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* ToastContainer, bildirimleri göstermek için */}
      <ToastContainer />
    </div>
  );
};

export default Cart;
