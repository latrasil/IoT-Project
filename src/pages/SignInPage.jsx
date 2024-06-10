import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ButtonAction from '../components/ButtonAction';
import '../style/SignInPage.css';
import pageTitles from '../pageTitles.js';
import logo from '../assets/ivi.png';

function SignInPage() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Esto navega una página hacia atrás
  };

  const handleSignIn = () => {
    console.log('Iniciar Sesión', { email, password, token });
    navigate('/button-grid'); // Navegar a ButtonGridPage
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  return (
    <div className="signin-container">
      <NavBar 
        title={pageTitles.login} 
        onButtonClick={handleBackClick} 
      />
      <img src={logo} alt="Logo" className="login-logo" />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo Electrónico"
        className="input"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
        className="input"
      />
      <input
        type="text"
        value={token}
        onChange={(e) => setToken(e.target.value)}
        placeholder="Token"
        className="input"
      />
      <ButtonAction text="Iniciar Sesión" onClick={handleSignIn} />
    </div>
  );
}

export default SignInPage;
