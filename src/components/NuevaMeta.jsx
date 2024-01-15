






























































// NuevaMeta.js
import React, { useState } from "react";
import { formatearFecha } from "../components/helpers"; // Make sure to import formatearFecha

const NuevaMeta = ({ meta, setMeta, setIsValidMeta, fecha }) => {
  const [mensaje, setMensaje] = useState("");
  const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;

  const handleMeta = (e) => {
    e.preventDefault();
    if (!regex.test(meta)) {
      setMensaje("No es una meta válida");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
      return;
    }
    setMensaje("");
    setIsValidMeta(true);
  };

  return (
    <div className="contenedor-meta">
      <form className="formulario" onSubmit={handleMeta}>

    


        <div className="campo">
          <label htmlFor="metaInput">Definir Meta:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="añade el nombre de la meta"
            id="metaInput"
            value={meta}
            onChange={(e) => setMeta(String(e.target.value))}
          />
          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>
        <input type="submit" value="Añadir" />
        {mensaje}
      </form>
    </div>
  );
};

export default NuevaMeta;
