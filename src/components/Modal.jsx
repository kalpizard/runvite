
// VENTANA MODAL
import React, { useState } from "react";
import { generarId } from "./helpers"; // Import the generarId function

const Modal = ({ setModal, guardarTarea }) => {

  // STATES
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  const ocultarModal = () => {
    setModal(false);
    document.body.classList.remove("modal-active");
  };

  const handleDificultadChange = (e) => {
    setDificultad(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //CONDICION, TAREA NO PUEDE SER VACIA 
    if (nombre.trim() === "") {
      setMensaje("Tarea es obligatoria");
      console.log("Fallo");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    // 
    guardarTarea({
      id: generarId(), // Now generarId should be defined
      nombre,
      dificultad,
      descripcion,
    });

    // Proceed with form submission
    console.log("Task:", nombre);
    console.log("Difficulty:", dificultad);
    console.log("Description:", descripcion);
    
    // Clear form inputs
    setNombre("");
    setDificultad("");
    setDescripcion("");
    
    // Hide the modal
    ocultarModal();
  };

  return (
    <div className="modal">
      <div className="close-modal" style={{ textAlign: "right" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-arrow-narrow-right"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ cursor: "pointer" }}
          onClick={ocultarModal}
          >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </div>

      <form 
      onSubmit={handleSubmit}>
        <div>
          {/* SECCION TAREAS NUEVAS  */}
          <label htmlFor="tarea">Tareas</label>
          <input
            id="tarea"
            type="text"
            placeholder="Añade tu nueva tarea"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            />
        </div>

        <div>
          {/* SECCION SELECCION DIFICULTAD */}
          <label htmlFor="dificultad">Dificultad</label>
          <select
            id="dificultad"
            value={dificultad}
            onChange={(e) => handleDificultadChange(e)}
            >
            <option value="">-- selecciones --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div>
          {/* SECCION SELECCION DE DESCRIPCION  */}
          <label htmlFor="descripcion">Descripción</label>
          <input
            id="descripcion"
            type="text"
            placeholder="Añade descripción"
            value={descripcion}
            onChange={(e) => handleDescripcionChange(e)}
            />
        </div>

        <input type="submit" value="Añadir" />
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Modal;































  // import React from 'react';
  // import CerrarModal from '../imgs/equiz.png';
  
  // const Modal = ({ setModal }) => {
  
  //   const ocultarModal = () => {
  //     setModal(false)
  //   }
  
  //   return (
  //     <div className='modal'>
  //       <div className='close-modal' style={{ textAlign: 'right' }}>
  //         <img
  //           className='cerrar-tarea'
  //           src={CerrarModal}
  //           alt="Cerrar modal"
  //           onClick={ocultarModal}
  //           style={{ cursor: 'pointer' }}  // Añade un estilo para indicar que es interactivo
  //         />
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Modal;
  
  // import React from "react";
  
  // const Modal = ({ setModal }) => {
  //   const ocultarModal = () => {
  //     setModal(false);
  //   };
  
  //   return (
  //     <div className="modal">
  //       <div className="close-modal" style={{ textAlign: "right" }}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="icon icon-tabler icon-tabler-arrow-narrow-right"
  //           width="36"
  //           height="36"
  //           viewBox="0 0 24 24"
  //           strokeWidth="3"
  //           stroke="#000000"
  //           fill="none"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           style={{ cursor: "pointer" }} // Añade un estilo para indicar que es interactivo
  //           onClick={ocultarModal}
  //         >
  //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //           <path d="M5 12l14 0" />
  //           <path d="M15 16l4 -4" />
  //           <path d="M15 8l4 4" />
  //         </svg>
  //         <form>
  //           <div>
  //             <label htmlFor="nombre">Tareas</label>
  
  //             <input
  //             id="tarea"
  //              type="text"
  //               placeholder="Añade tu nueva tarea" />
  //           </div>
  
  //           <div>
  //             <input
  //             id="dificultad"
  //             type="number"
  //              placeholder="Añade d<ificulad"
  //              />
  
  //           <div>
  //           <label htmlFor="nombre">Descrpción</label>
  //             <input
  //             id="descripcion"
  //              type="text"
  //               placeholder="Añade dificulad"
  //               />
  //           </div>
  
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };
  
  // import React, { useState } from "react";
  
  // const Modal = ({ setModal }) => {
  //   const [nombre, setNombre] = useState('');
  //   const [dificultad, setDificultad] = useState('');
  //   const [descripcion, setDescripcion] = useState('');
  
  // const [mensaje, setMensaje] = useState('');
  
  //   const ocultarModal = () => {
  //     setModal(false);
  //     document.body.classList.remove("modal-active");
  //   };
  
  //   const handleDificultadChange = (e) => {
  //     setDificultad(e.target.value);
  //   };
  
  //   const handleDescripcionChange = (e) => {
  //     setDescripcion(e.target.value);
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  
  //     // Check if "nombre" (tarea) is empty
  //     if (nombre.trim() === '') {
  //     setMensaje('Tarea es obligatoria')
  //       return;
  //     }
  
  //     // Proceed with form submission
  //     console.log("Task:", nombre);
  //     console.log("Difficulty:", dificultad);
  //     console.log("Description:", descripcion);
  
  //     // Clear form inputs
  //     setNombre('');
  //     setDificultad('');
  //     setDescripcion('');
  
  //     // Hide the modal
  //     ocultarModal();
  //   };
  
  //   return (
  //     <div className="modal">
  //       <div className="close-modal" style={{ textAlign: "right" }}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="icon icon-tabler icon-tabler-arrow-narrow-right"
  //           width="36"
  //           height="36"
  //           viewBox="0 0 24 24"
  //           strokeWidth="3"
  //           stroke="#000000"
  //           fill="none"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           style={{ cursor: "pointer" }}
  //           onClick={ocultarModal}
  //         >
  //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //           <path d="M5 12l14 0" />
  //           <path d="M15 16l4 -4" />
  //           <path d="M15 8l4 4" />
  //         </svg>
  //       </div>
  
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="tarea">Tareas</label>
  //           <input
  //             id="tarea"
  //             type="text"
  //             placeholder="Añade tu nueva tarea"
  //             value={nombre}
  //             onChange={(e) => setNombre(e.target.value)}
  //           />
  //         </div>
  
  //         <div>
  //           <label htmlFor="dificultad">Dificultad</label>
  //           <select
  //             id="dificultad"
  //             value={dificultad}
  //             onChange={(e) => setDificultad(e.target.value)}
  //           >
  //             <option value="">-- selecciones --</option>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //           </select>
  //         </div>
  
  //         <div>
  //           <label htmlFor="descripcion">Descripción</label>
  //           <input
  //             id="descripcion"
  //             type="text"
  //             placeholder="Añade descripción"
  //             value={descripcion}
  //             onChange={handleDescripcionChange}
  //           />
  //         </div>
  
  //         <input type="submit" value="Añadir" />
  //       </form>
  //     </div>
  //   );
  // };
  
  // // Modal.jsx
  // import React, { useState } from "react";
  
  // const Modal = ({ setModal, guardarTarea }) => {
  //   const [nombre, setNombre] = useState("");
  //   const [dificultad, setDificultad] = useState("");
  //   const [descripcion, setDescripcion] = useState("");
  //   const [mensaje, setMensaje] = useState("");
  
  //   const ocultarModal = () => {
  //     setModal(false);
  //     document.body.classList.remove("modal-active");
  //   };
  
  //   const handleDificultadChange = (e) => {
  //     setDificultad(e.target.value);
  //   };
  
  //   const handleDescripcionChange = (e) => {
  //     setDescripcion(e.target.value);
  //   };
  
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  
  //     // Check if "nombre" (tarea) is empty
  //     if (nombre.trim() === "") {
  //       setMensaje("Tarea es obligatoria");
  //       console.log("Fallo");
  //       setTimeout(() => {
  //         setMensaje("");
  //       }, 3000);
  //       return;
  //     }
  
  //     // Call the correct prop function
  //     guardarTarea({ nombre, dificultad, descripcion });
  
  //     // Proceed with form submission
  //     console.log("Task:", nombre);
  //     console.log("Difficulty:", dificultad);
  //     console.log("Description:", descripcion);
  
  //     // Clear form inputs
  //     setNombre("");
  //     setDificultad("");
  //     setDescripcion("");
  
  //     // Hide the modal
  //     ocultarModal();
  //   };
  
  //   return (
  //     <div className="modal">
  //       <div className="close-modal" style={{ textAlign: "right" }}>
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="icon icon-tabler icon-tabler-arrow-narrow-right"
  //           width="36"
  //           height="36"
  //           viewBox="0 0 24 24"
  //           strokeWidth="3"
  //           stroke="#000000"
  //           fill="none"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           style={{ cursor: "pointer" }}
  //           onClick={ocultarModal}
  //         >
  //           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //           <path d="M5 12l14 0" />
  //           <path d="M15 16l4 -4" />
  //           <path d="M15 8l4 4" />
  //         </svg>
  //       </div>
  
  //       <form onSubmit={handleSubmit}>
  //         <div>
  //           <label htmlFor="tarea">Tareas</label>
  //           <input
  //             id="tarea"
  //             type="text"
  //             placeholder="Añade tu nueva tarea"
  //             value={nombre}
  //             onChange={(e) => setNombre(e.target.value)}
  //           />
  //         </div>
  
  //         <div>
  //           <label htmlFor="dificultad">Dificultad</label>
  //           <select
  //             id="dificultad"
  //             value={dificultad}
  //             onChange={(e) => handleDificultadChange(e)}
  //           >
  //             <option value="">-- selecciones --</option>
  //             <option value="1">1</option>
  //             <option value="2">2</option>
  //             <option value="3">3</option>
  //           </select>
  //         </div>
  
  //         <div>
  //           <label htmlFor="descripcion">Descripción</label>
  //           <input
  //             id="descripcion"
  //             type="text"
  //             placeholder="Añade descripción"
  //             value={descripcion}
  //             onChange={(e) => handleDescripcionChange(e)}
  //           />
  //         </div>
  
  //         <input type="submit" value="Añadir" />
  //       </form>
  //       {mensaje && <p>{mensaje}</p>}
  //     </div>
  //   );
  // };
  // export default Modal;