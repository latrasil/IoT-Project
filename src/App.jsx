// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignInPage from './pages/SignInPage';
import ButtonGridPage from './pages/ButtonGridPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/button-grid" element={<ButtonGridPage />} />
    </Routes>
  );
}

export default App;
