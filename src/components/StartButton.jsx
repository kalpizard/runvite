import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/navbar/home');
  };

  return (
    <div className='div-button'>
   
      <button className='start-button' onClick={handleButtonClick}>
        Start
      </button>
    </div>
  );
};

export default StartButton;




