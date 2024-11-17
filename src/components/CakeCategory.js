
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; 


const CakeCategory = () => {
  const cakes = [
    { id: 1, name: 'Chocolate Cake', category: 'Chocolate', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXSf9G-QQKo0mEZJicVL8FhJl7Dy8qztsiQ&s' },
    { id: 2, name: 'Fruit Cake', category: 'Fruit', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK40hD1VWzxtD_nx_Y-7LDl0fMo_Ng_F8Qyw&s' },
      { id: 3, name: 'Vanilla Cake', category: 'Vanilla', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6DeTU_2M0z4MZrioqVVt1JFe_kb2DxgSPtw&s' },
  
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredCakes = cakes.filter((cake) => 
    selectedCategory === 'All' || cake.category === selectedCategory
  );

  return (
    <div className="cake-category">
      <h2>Our Cakes</h2>
      <div className="filter-buttons">
        <button onClick={() => setSelectedCategory('All')}>All</button>
        <button onClick={() => setSelectedCategory('Chocolate')}>Chocolate</button>
        <button onClick={() => setSelectedCategory('Fruit')}>Fruit</button>
        <button onClick={() => setSelectedCategory('Vanilla')}>Vanilla</button>
        {}
      </div>
      <div className="cakes-list">
        {filteredCakes.map((cake) => (
          <div key={cake.id} className="cake-item">
            <img src={cake.image} alt={cake.name} />
            <p>{cake.name}</p>
            <NavLink to={`/cakes/${cake.id}`}className="cake-detail-link">View Details</NavLink> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default CakeCategory;


