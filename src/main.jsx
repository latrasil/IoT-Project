// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Usa createRoot en lugar de ReactDOM.render
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
