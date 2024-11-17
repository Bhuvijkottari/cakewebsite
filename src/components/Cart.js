import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const { cart, removeFromCart } = useContext(CartContext);
  
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }
  const totalAmount = cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

 

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>Price: ${item.price.toFixed(2)}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) =>
                updateQuantity(item.id, parseInt(e.target.value, 10))
              }
              min="1"
            />
            <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
       <div className="cart-total">
            <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
          </div>
      {cart.length > 0 && (
        <button className="checkout-button">Checkout</button>
      )}
    </div>
  );
};

Cart.defaultProps = {
  cartItems: [], 
};

export default Cart;
