import React, { useState } from "react";
import { formatearFecha } from "../components/helpers";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom";

const NuevaMeta = ({
  nombreUsuario,
  setNombreUsuario,
  meta,
  setMeta,
  setIsValidMeta,
}) => {
  const [mensaje, setMensaje] = useState("");
  const location = useLocation();
  const token = localStorage.getItem("token");

  const handleMeta = (e) => {
    e.preventDefault();

    const trimmedMeta = meta.trim();

    const MAX_CHARACTERS = 20;

    if (!trimmedMeta) {
      setMensaje("La meta no puede estar vacía");
      setTimeout(() => {
        setMensaje("");
      }, 600);
      return;
    }

    if (trimmedMeta.length > MAX_CHARACTERS) {
      setMensaje(`La meta no puede tener más de ${MAX_CHARACTERS} caracteres`);
      setTimeout(() => {
        setMensaje("");
      }, 600);
      return;
    }

    setMensaje("");
    setIsValidMeta(true);
  };

  return (
    <div className="contenedor-meta">
      <form className="formulario" onSubmit={handleMeta}>
        <div className="campo">
          <label htmlFor="metaInput">Name Your Objective:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="Enter Your Goal Name"
            id="metaInput"
            value={meta}
            onChange={(e) => setMeta(String(e.target.value))}
          />
        </div>

        <input className="input-goal" type="submit" value="Set Goal" />
        {mensaje && <p>{mensaje}</p>}
      </form>

      {location.pathname !== "/navbar/home" && (
        <Profile nombreUsuario={nombreUsuario} />
      )}

      <div></div>
    </div>
  );
};

export default NuevaMeta;
