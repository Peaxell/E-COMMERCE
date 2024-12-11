import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import { CartProvider } from './components/cartProvider';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
    <App />
  </CartProvider>,
  </BrowserRouter>,
  document.getElementById('root')
);