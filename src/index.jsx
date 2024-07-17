import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Login } from './Login';
import { Register } from './Register';
import { AddDish } from './AddDish';
import { DishDetail } from './DishDetail';
import { UserDetail } from './UserDetail';
import { DishList } from './DishList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/register" element={<Register />} />
        <Route path="/api/addDish" element={<AddDish />} />
        <Route path="/api/dishDetail/:id" element={<DishDetail />} />
        <Route path="/api/userDetail/:id" element={<UserDetail />} />
        <Route path="/api/dishList" element={<DishList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);