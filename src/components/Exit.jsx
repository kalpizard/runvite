// Exit.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className='exit_button'>
      <button onClick={handleButtonClick}>ir a atrás</button>
    </div>
  );
};

export default Exit;
