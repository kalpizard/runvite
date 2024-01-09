// Nuevo.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
// Example:
// If "Nuevo.jsx" and "index.css" are in the same directory.
const Nuevo = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/navbar/home');
  };

  return (
    <div className='boton_nuevo'>
      <button className='custom-button' onClick={handleButtonClick}>
        Ya tengo una cuenta
      </button>
    </div>
  );
};

export default Nuevo;
