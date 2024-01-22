// import { useState } from "react";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';  // Asegúrate de agregar { useNavigate }


import Login from './Login';
import Logout from './Logout';

import PrivateText from './PrivateText';  // Asumiendo que PrivateText es un componente importado
import Signup from "./signup";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true);

  // if (currUser) {
  //   return (
  //     <div>
  //       Hello {currUser.email}
  //       <PrivateText currUser={currUser} />
  //       <Logout setCurrUser={setCurrUser} />
  //     </div>
  //   );
  // }

  return (
    <div>
      {show ? (
        <Login setCurrUser={setCurrUser} setShow={setShow} />
      ) : (
        <Signup setCurrUser={setCurrUser} setShow={setShow} />
      )}
    </div>
  );
};

export default User;
