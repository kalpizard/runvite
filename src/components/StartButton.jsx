

// StartButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartButton = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/navbar/home');
  };

  return (
  



      <div className='div-button'>
        <button className='start-button'  onClick={handleButtonClick}>Comenzar Ahora</button>
      </div>


    );
};

export default StartButton;














// // StartButton.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const StartButton = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = () => {
//     navigate('/navbar');
//   };

//   return (
//     <div className='button'>
//       <button onClick={handleButtonClick}>Ir a Espacio en Blanco</button>
//     </div>
//   );
// };

// export default StartButton;
