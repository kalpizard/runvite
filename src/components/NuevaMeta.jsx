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







// NuevaMeta.js
import { useState } from "react";

const NuevaMeta = ({ meta, setMeta, setIsValidMeta }) => {
  const [mensaje, setMensaje] = useState('');
  const regex = /^[A-Za-z\s]{6,}$/;

  const handleMeta = (e) => {
    e.preventDefault();
console.log(meta);
    if (!regex.test(meta)) {
      setMensaje("No es una meta válida");
      return;
    }

    setMensaje("");
    setIsValidMeta(true);
  };

  return (
    <div>
      <form onSubmit={handleMeta}>
        <div>
          <label htmlFor="metaInput">Meta:</label>
          <input
            type="text"
            id="metaInput"
            value={meta}
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




