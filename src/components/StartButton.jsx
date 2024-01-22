



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
      {/* <div className='portada'>
        <h2>Whereas disregard and contempt for human rights have resulted</h2>
      </div> */}

      <button className='start-button' onClick={handleButtonClick}>
        Comenzar Ahora
      </button>
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
//     navigate('/navbar/home');
//   };

//   return (
//     <div className='div-button'>
// <div className='portada'>
// <h2>Whereas disregard and contempt for human rights have resulted</h2>

// </div>


//       <button className='start-button'  onClick={handleButtonClick}>Comenzar Ahora</button>
//     </div>
//   );
// };

// export default StartButton;














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
