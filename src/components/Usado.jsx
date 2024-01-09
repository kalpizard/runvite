import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usado = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div>
      <button className='custom-button2' onClick={handleButtonClick}>
        Crear una cuenta
      </button>
    </div>
  );
};

export default Usado;
