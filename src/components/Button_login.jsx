// src/components/Button.jsx
import React from 'react';
import '../style/Button_login.css';

function Button_login({ onClick, children }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button_login;
