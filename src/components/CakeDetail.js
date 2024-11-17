
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';


const CakeDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(0);
  const { addToCart,cart } = useContext(CartContext);

  
  const cakes = [
    {
      id: '1',
      name: "Chocolate Cake",
      description: "A rich and creamy chocolate cake.",
      price: 25,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwvHaIOV0b1awoY71O0a9KzCgrduE2VxfNEQ&s',
    },
    {
      id: '2',
      name: "Fruit Cake",
      description: "A delightful fruit cake packed with mixed fruits.",
      price: 30,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRemKtNEDwRZFBG4tFnVWxMflFubgOsvXJn1Q&s',
    },
    {
      id: '3',
      name: "Vanilla Cake",
      description: "A classic vanilla cake with a fluffy texture.",
      price: 20,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnfD62I8AaOPnEZhSU509lf_AohnSrM7IZQ&s',
    },
  ];

  // Find the selected cake by ID
  const cake = cakes.find((cake) => cake.id === id);

  const addIntoCart = () => {
    console.log(`Adding ${quantity} of ${cake.name} to cart.`);
    // Here, add logic to update cart
    if (quantity >= 0) {
      addToCart(cake, quantity+1);
      setQuantity(p => p+1);
    }
  };

  if (!cake) {
    return <p>Cake not found.</p>;
  }

  return (
    <div className="cake-detail">
      <h2>{cakes.find((cake) => cake.id === id).name}</h2>
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
      <div className="quantity-selector">
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          />
      </div>
      <button className="add-to-cart" onClick={addIntoCart}>Add to Cart</button>
    </div>
  );
};

export default CakeDetail;
