












































// COMPONENTE PRINCIPAL DEL NAVBAR
import React from "react";
import NuevaMeta from "../components/NuevaMeta";
import ControlMetas from "../components/ControlMetas";

//EXTRACCION DE LOS 
const Home = ({
  meta, 
  setMeta,
  isValidMeta,
  setIsValidMeta 
}) => {


  
  return (
    <header>
      <h1>PLANIFICA TU META CON VROAD</h1>
      {isValidMeta ? (
        // COMPONENTE DE CONTROL DE META
        <ControlMetas
        meta={meta}
        
        
        
        />









      ) : (

        // COMPONENTE NUEVA META EN EL NAVBAR
        <NuevaMeta
          meta={meta} 
          setMeta={setMeta} 
          isValidMeta={isValidMeta}
          setIsValidMeta={
            
            
            
            
            setIsValidMeta}
        />
      )}
    </header>
  );
};

export default Home;




