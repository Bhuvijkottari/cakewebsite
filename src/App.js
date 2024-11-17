import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import CakeCategory from './components/CakeCategory';
import CakeDetail from './components/CakeDetail';

import Cart from './components/Cart';
import About from './components/About';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cakes" element={<CakeCategory />} />
          <Route path="/cakes/:id" element={<CakeDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;


