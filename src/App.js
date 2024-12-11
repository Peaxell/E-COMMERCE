// src/App.js
import React from 'react';
import { Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';


// src/App.js
import './index.css';


// Import the pages for each route (create these as placeholders for now)
import Shop from './Pages/Shop'
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import LoginPage from './Pages/Login';
import SignUpPage from './Pages/SingUp';


import ProductDetailM from './Pages/productDetailsM';

import ProductDetailW from './Pages/productDetailsW';



import ProductDetailK from './Pages/productDetailsK';
import CartPage from './Pages/cart';






const App = () => {
  return (
    <div className="overflow-hidden">
      {/* Navbar */}
      <Navbar />
      

      {/* Routes */}
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/Login" element={<LoginPage  />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<SignUpPage />} />

      

        
        
        <Route path="/productWM/:id" element={<ProductDetailW />} />

        <Route path="/productM/:id" element={<ProductDetailM />} />

        <Route path="/productK/:id" element={<ProductDetailK />} />

        <Route path="/cart" element={<CartPage />} />


      </Routes>
    </div>
  );
};

export default App;
