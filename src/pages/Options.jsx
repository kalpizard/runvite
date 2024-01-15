

// Options.js
import React from "react";

import Profile from "../components/Profile";
import Modes from "../components/Modes";

const Options = ({ nombreUsuario, setNombreUsuario }) => {
  return (
   <div>

<Profile 

nombreUsuario={nombreUsuario}
setNombreUsuario={setNombreUsuario}

/>
<Modes />



   </div>



  );
}

export default Options;
