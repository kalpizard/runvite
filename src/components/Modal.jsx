// SI FUNCIONA!
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
  setTareaEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("");
  const [currUser, setCurrUser] = useState(
    localStorage.getItem("token") ?? ""
  );

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) {
      setNombre(tareaEditar.nombre);
      setDificultad(tareaEditar.dificultad);
      setDescripcion(tareaEditar.descripcion);
      setId(tareaEditar.id);
      // setFecha(tareaEditar.fecha);
      // Tu lógica aquí
    }
  }, []);

  const closeModal = () => {
    setTareaEditar({});
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 1000);
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
    }, 1000);
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
      // id: generarId(),
      nombre,
      dificultad,
      descripcion,
      id,
    });

    setNombre("");
    setDificultad("");
    setDescripcion("");
    setAnimarModal(true);
    closeModal();
  };

  return (
    <div>
        <div className="modal">
      <div className="close-modal" style={{ textAlign: "right" }}>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  className="icon icon-tabler icon-tabler-arrow-narrow-right"
  width="72"  
  height="92" 
  viewBox="0 0 24 24"
  strokeWidth="3"
  stroke="#ffffff" 
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
        <legend>{tareaEditar.nombre ? "Edit" : "Create a new task"} </legend>
        <div className="campo">
          <label htmlFor="Nombre de la tarea">Task title</label>
          <input
            id="tarea"
            type="text"
            placeholder="Add your new task"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dificultad">Difficulty</label>
          <select
            id="dificultad"
            value={dificultad}
            onChange={(e) => handleDificultadChange(e)}
          >
            <option value="">-- Selections --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div className="campo">
          <label htmlFor="descripcion">Describe the task</label>
          <input
            id="descripcion"
            type="text"
            placeholder="Add description"
            value={descripcion}
            onChange={(e) => handleDescripcionChange(e)}
          />
        </div>
        <input
          type="submit"
          value={tareaEditar.nombre ? "edit" : "Create a new task"}
        />
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
    </div>

    
  );
};

export default Modal;
