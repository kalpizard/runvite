// frontend/src/MyApp.jsx
// import { useState } from 'react';
// import './App.css';









// import React from 'react';

// import React, { useState } from 'react';
// import User from './components/User';
// import { useNavigate } from 'react-router-dom';


// // import PrivateText from './components/PrivateText';

// const Registration = () => {
//   const [currUser, setCurrUser] = useState(null);

//   return (
//     <div className="App">
//       <User currUser={currUser} setCurrUser={setCurrUser} />
//     </div>
//   );
// };

// export default Registration;
import { useState } from 'react';
// import User from './components/User';
// ... restante del código ...

const Registration = () => {
  const [currUser, setCurrUser] = useState(null);

  return (
    <div className="App">
      <User currUser={currUser} setCurrUser={setCurrUser} />
    </div>
  );
};

export default Registration;
