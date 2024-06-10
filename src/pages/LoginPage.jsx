// src/pages/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button_login';
import '../style/LoginPage.css';
import logo from '../assets/ivi.png';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/signin');
  };

  const handleRegister = () => {
    console.log('Registrar');
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="login-logo" />
      <Button onClick={handleLogin}> 
        Iniciar Sesión
      </Button>
      <Button onClick={handleRegister}>
        Registrar
      </Button>
    </div>
  );
}

export default LoginPage;
