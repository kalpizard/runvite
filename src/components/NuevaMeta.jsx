
// COMPONENTE NUEVA META
import { useState } from "react";
// EXTRACCION DE VARIABLES
const NuevaMeta = ({ meta, setMeta, setIsValidMeta }) => {
  //MENSAJE EN CASO DE NO SER UNA META VALIDA
  const [mensaje, setMensaje] = useState("");
//VARIABLE DE VALIDACIN DE INPUT 
  const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;
  // FUNCION PARA ADMINISTRAR META
  const handleMeta = (e) => {
    //EVITA QUE SE ENVÍE DE INMEDIATO
    e.preventDefault();
    console.log('meta');
    //CONDICION CUANDO LA META NO ES VALIDA
    if (!regex.test(meta)) {
      setMensaje("No es una meta válida");
      return;
    }
    //EN CASO DE QUE SEA VALIDO SE RESETEA EL MENSAJE
    setMensaje("");
    //STATE DE LA META CAMBIA A TRUE CUANDO ES VALIDO
    setIsValidMeta(true);
  }; 

  return (
    <div className="contenedor-meta">
      {/* FORMULARIO DE META */}
      <form className="formulario" onSubmit={handleMeta}> 
        <div className="campo">
          {/* ETIQUETA DEFINIR META */}
          <label htmlFor="metaInput">Definir Meta:</label>
          {/* INPUT Y ATRIBUTOS */}
          <input className="nueva-meta"
            type="text"
            placeholder="añade-tarea"
            id="metaInput"
            value={meta}
            // TODO LO ESCRITO SE AGREGAR EN LA VARIABLE SETMETA
            onChange={(e) => setMeta(String(e.target.value))} // Fix typo here
            />
        </div>
        <input type="submit" value="Añadir" />
        {mensaje}
      </form>
    </div>
  );
};

export default NuevaMeta;





























            // import React from 'react'
            
            // const Meta = ({meta, setMeta}) => {
            //   return (
            // <div className='clase meta'>
            //     <form className='formulario'  action="">
            // <div>
            //     <label htmlFor="">Def</label>
            //     <input
            //     className=''
            //     type='text'
            //     placeholder='Agregar tu meta '
            //     />
            // </div>
            // <input type="submit" value="Añadir" />
            
            //     </form>
            // </div>
            //   )
            // }
            
            // export default Meta
            
            // import React from 'react';
            
            // const Meta = ({ meta, setMeta }) => {
            //   return (
            //     <div className='clase meta'>
            //       <form className='formulario' action=''>
            //         <div>
            //           <label htmlFor='metaInput'>Def</label>
            //           <input
            //             id='metaInput'  // Asocia el id con el atributo htmlFor del label
            //             className=''
            //             type='text'
            //             placeholder='Agregar tu meta'
            //             value={meta}
            //           />
            //         </div>
            //         <input type='submit' value='Añadir' />
            //       </form>
            //     </div>
            //   );
            // };
            
            // import React from "react";
            
            // const NuevaMeta = ({ meta, setMeta }) => {
            //   // Tu lógica para manipular la meta (si es necesario) iría aquí
            // const handleMeta = (e) => {
            //   e.preventDefault();
            //   console.log("Meta creada");
            
            //   if(!Number(meta) || meta.length < 6) {
            
            //     console.log('Es una meta');
            //   }
            //   else {
            //      console.log('No es una Meta');
            //    }
            
            // }
            //   return (
            //     <div>
            //       <form onSubmit={handleMeta}>
            //         <div>
            //           <label htmlFor="metaInput">Meta:</label>
            //           <input
            //             type="text"
            //             id="metaInput"
            //             value={meta}
            //             onChange={(e) => setMeta(e.target.value)}
            //           />
            //         </div>
            //         <input type="submit" value="Añadir" />
            //       </form>
            //     </div>
            //   );
            // }
            
            // export default NuevaMeta;
            
            // import {useState} from "react";
            
            // const NuevaMeta = ({
            //    meta,
            //     setMeta,
            //     setIsValidMeta }) => {
            
            //   const [mensaje, setMensaje] = useState('')
            //   // Expresión regular que verifica que la cadena contenga solo letras, tenga al menos 6 caracteres y pueda incluir espacios
            //   const regex = /^[A-Za-z\s]{6,}$/;
            
            //   const handleMeta = (e) => {
            //     e.preventDefault();
            
            //     if (!regex.test(meta)) {
            //       setMensaje("No es una meta válida");
            
            //       return
            //     }
            
            //     setMensaje('')
            //     setIsValidMeta(true)
            
            //   };
            
            //   return (
            //     <div>
            //       <form onSubmit={handleMeta}>
            //         <div>
            //           <label htmlFor="metaInput">Meta:</label>
            //           <input
            //             type="text"
            //             id="metaInput"
            //             value={meta}
            //             onChange={(e) => setMeta(String.target.value)}
            //           />
            //         </div>
            //         <input type="submit" value="Añadir" />
            //         {mensaje}
            //       </form>
            //     </div>
            //   );
            // };
            
            // export default NuevaMeta;
