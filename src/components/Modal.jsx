// Modal.jsx
import React, { useState, useEffect } from "react";
import { generarId } from "./helpers";
import Mensaje from "./Mensaje";

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarTarea,
  tareaEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) {
      setNombre(tareaEditar.nombre)
      setDificultad(tareaEditar.dificultad)
      setDescripcion(tareaEditar.descripcion)
      // Tu lógica aquí
    }
  }, []);

  const closeModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  const handleDificultadChange = (e) => {
    setDificultad(e.target.value);
  };

  const handleDescripcionChange = (e) => {
    setDescripcion(e.target.value);
  };

  const handleNuevaTareaClick = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setMensaje("Tarea es obligatoria");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }

    guardarTarea({
      id: generarId(),
      nombre,
      dificultad,
      descripcion,
    });

    setNombre("");
    setDificultad("");
    setDescripcion("");
    setAnimarModal(true);
    closeModal();
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
          onClick={closeModal}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l14 0" />
          <path d="M15 16l4 -4" />
          <path d="M15 8l4 4" />
        </svg>
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{tareaEditar.nombre ? 'Editar tarea' : 'Alguna nueva tarea'}</legend>
        <div className="campo">
          <label htmlFor="Nombre de la tarea">Tareas</label>
          <input
            id="tarea"
            type="text"
            placeholder="Añade tu nueva tarea"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
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
        <div className="campo">
          <label htmlFor="descripcion">Describe la tarea</label>
          <input
            id="descripcion"
            type="text"
            placeholder="Añade descripción"
            value={descripcion}
            onChange={(e) => handleDescripcionChange(e)}
          />
        </div>
        <input 
             type="submit"
             value={tareaEditar.nombre ? 'Guardar tarea' : 'Añade nueva tarea'}
             
              />
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Modal;


























































//SI FUNCIONA!
// // Modal.jsx
// import React, { useState, useEffect } from "react";
// import { generarId } from "./helpers";
// import Mensaje from "./Mensaje";

// const Modal = ({
//   setModal,
//   animarModal,
//   setAnimarModal,
//   guardarTarea,
//   tareaEditar,
// }) => {
//   const [nombre, setNombre] = useState("");
//   const [dificultad, setDificultad] = useState("");
//   const [descripcion, setDescripcion] = useState("");
//   const [mensaje, setMensaje] = useState("");

//   useEffect(() => {
//     if (Object.keys(tareaEditar).length > 0) {
//       handleNuevaTareaClick();
//       // Tu lógica aquí
//     }
//   }, []);

//   const closeModal = () => {
//     setAnimarModal(false);
//     setTimeout(() => {
//       setModal(false);
//     }, 5000);
//   };

//   const handleDificultadChange = (e) => {
//     setDificultad(e.target.value);
//   };

//   const handleDescripcionChange = (e) => {
//     setDescripcion(e.target.value);
//   };

//   const handleNuevaTareaClick = () => {
//     setModal(true);

//     setTimeout(() => {
//       setAnimarModal(true);
//     }, 5000);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (nombre.trim() === "") {
//       setMensaje("Tarea es obligatoria");
//       setTimeout(() => {
//         setMensaje("");
//       }, 3000);
//       return;
//     }

//     guardarTarea({
//       id: generarId(),
//       nombre,
//       dificultad,
//       descripcion,
//     });

//     setNombre("");
//     setDificultad("");
//     setDescripcion("");
//     setAnimarModal(true);
//     closeModal();
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
//           onClick={closeModal}
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//           <path d="M5 12l14 0" />
//           <path d="M15 16l4 -4" />
//           <path d="M15 8l4 4" />
//         </svg>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className={`formulario ${animarModal ? "animar" : "cerrar"}`}
//       >
//         <legend>Alguna nueva tarea</legend>
//         <div className="campo">
//           <label htmlFor="Nombre de la tarea">Tareas</label>
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
//         <div className="campo">
//           <label htmlFor="descripcion">Describe la tarea</label>
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


























// //USADO ANTERIORMENTE
// // // Modal.jsx
// import { useState, useEffect } from "react";
// import { generarId } from "./helpers";
// import Tarea from "./Tarea";
// import Mensaje from "./Mensaje";
// const Modal = ({
//   setModal,
//   animarModal,
//   setAnimarModal,
//   guardarTarea,
//   tareaEditar,
// }) => {
//   // NOMBRE DE LA TAREA
//   const [nombre, setNombre] = useState("");
//   //SELECCION DE DIFICULTAD
//   const [dificultad, setDificultad] = useState("");
//   //DESCRIPCION DE LA TAREA
//   const [descripcion, setDescripcion] = useState("");
//   const [mensaje, setMensaje] = useState("");

//   useEffect(() => {
//     if (Object.keys(tareaEditar).length > 0) {
//       handleNuevaTareaClick();
//       // Tu lógica aquí
//     }
//   }, []);

//   //TRANSICION PARA OCULTAR MODAL
//   const closeModal = () => {
//     setAnimarModal(false);
//     setTimeout(() => {
//       setModal(false);
//     }, 5000);
//   };

//   const handleDificultadChange = (e) => {
//     setDificultad(e.target.value);
//   };

//   const handleDescripcionChange = (e) => {
//     setDescripcion(e.target.value);
//   };
//   //FUNCION PARA AGREGAR LA TAREA A LA LISTA DE TAREAS
//   const handleSubmit = (e) => {
//     //PREVIENE LA ACCION POR DEFECTO DE ENVIAR FORMULARIO
//     e.preventDefault();
//     //VALIDACIONES PARA EL FORMULARIO DE LA TAREA
//     // if (nombre.trim() === "") {
//     //   setMensaje("Tarea es obligatoria");
//     //   setTimeout(() => {
//     //     setMensaje("");
//     //   }, 3000);
//     //   return;
//     if (nombre.trim() === "") {
//       setMensaje("Tarea es obligatoria");
//       setTimeout(() => {
//         setMensaje("");
//       }, 3000);
//       return;
//     }

//     guardarTarea({
//       id: generarId(),
//       nombre,
//       dificultad,
//       descripcion,
//     });

//     console.log("Task:", nombre);
//     console.log("Difficulty:", dificultad);
//     console.log("Description:", descripcion);

//     setNombre("");
//     setDificultad("");
//     setDescripcion("");
//     setAnimarModal(true);
//     closeModal();
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
//           onClick={closeModal}
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//           <path d="M5 12l14 0" />
//           <path d="M15 16l4 -4" />
//           <path d="M15 8l4 4" />
//         </svg>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className={`formulario ${animarModal ? "animar" : "cerrar"}`}
//       >
//         <legend>Alguna nueva tarea</legend>
//         {/* {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} */}
//         {/* CAMPO DE NOMBRE DE LA TAREA */}
//         <div className="campo">
//           <label htmlFor="Nombre de la tarea">Tareas</label>
//           <input
//             id="tarea"
//             type="text"
//             placeholder="Añade tu nueva tarea"
//             // VALOR SERÁ LO QUE TENGA EN nombre
//             value={nombre}
//             // EVENTO QUE ACTUALIZA EL STATE CADA VEZ QUE ESCRIBAN SOBRE ÉL
//             onChange={(e) => setNombre(e.target.value)}
//           />
//         </div>
//         {/* CAMPO DE DIFICULTAD */}
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
//         {/* CAMPO DE DESCRIPCION  */}
//         <div className="campo">
//           <label htmlFor="descripcion">Describe la tarea</label>
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
