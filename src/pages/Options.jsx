// Options.js
import React from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Cambiado a useNavigate
import Profile from "../components/Profile";
import Modes from "../components/Modes";
import Reset from "../components/Reset";

const Options = ({ 
   meta,
   setMeta,
   isValidMeta,
   setIsValidMeta,
   nombreUsuario,
   setNombreUsuario,
   setTareas
}) => {
   
   const navigate = useNavigate(); // Cambiado a useNavigate
  return (
    <div>
      <Profile 
        nombreUsuario={nombreUsuario}
        setNombreUsuario={setNombreUsuario}
      />
      <Modes />
      <Reset 
        nombreUsuario={nombreUsuario}
        setNombreUsuario={setNombreUsuario}
        tareas={setTareas}
        setTareas={setTareas}
        meta={meta} 
        setMeta={setMeta}
        setIsValidMeta={setIsValidMeta}
        navigate={navigate} // Pasando navigate como prop
      />
    </div>
  );
}

export default Options;
