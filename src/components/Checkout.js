
import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Checkout = () => {
  const { cart } = useContext(CartContext);

 
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p>Your cart is empty. Please add some items to proceed to checkout.</p>;
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-items">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <img src={item.image} alt={item.name} width="80" />
            <div>
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="checkout-total">
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
        <button className="checkout-btn">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
