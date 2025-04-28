import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Login from './Login';   // ✅ import from Login.js (not App.js)
import Signup from './Signup'; // ✅ import from SignUp.js
import Landing from './Landing'; // If you have Landing.js
import Cart from './Cart';
import Checkout from './Checkout';
import Products from "./Products"; 
import AdminCheckout from './AdminCheckout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminCheckout />} />         
      <Route path="/sign-up" element={<Signup />} /> 
      <Route path="/landing" element={<Landing />} /> 
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

export default App;
