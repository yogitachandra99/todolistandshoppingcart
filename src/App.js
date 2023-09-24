import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';
import ToDoList from './pages/ToDoList';
import ShoppingCart from './pages/ShoppingCart';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/cartPage' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;