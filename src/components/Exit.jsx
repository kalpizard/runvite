
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exit = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className='exit_button'>
      {token ? (
        null
      ) : (
        <button className='exit_button_2' onClick={handleButtonClick}>Go back</button>
      )}
    </div>
  );
};

export default Exit;
