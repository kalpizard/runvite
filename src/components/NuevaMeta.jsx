import React, { useState } from "react";
import { formatearFecha } from "../components/helpers";
import Profile from "../components/Profile";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const NuevaMeta = ({
  nombreUsuario,
  setNombreUsuario,
  meta,
  setMeta,
  setIsValidMeta,
}) => {
  const [mensaje, setMensaje] = useState("");
  const regex = /^[A-Za-záéíóúÁÉÍÓÚ\s]{3,}$/;

  const location = useLocation();
  const token = localStorage.getItem("token");

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

    // Actualizar el estado 'fecha' con el valor de 'meta'
  };

  return (
    <div className="contenedor-meta">
      <form className="formulario" onSubmit={handleMeta}>
        {/* Comentario eliminado, ya que el bloque de código está comentado */}
        {/* <div className="campo">
          <label htmlFor="usuarioInput">Cual es tu nombre:</label>
          <input
            className="nueva-meta"
            type="text"
            placeholder="añadi el nombre tuyo"
            id="userInput"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(String(e.target.value))}
          />
        </div> */}

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
        </div>

        <input className="input-goal" type="submit" value="Set Goal" />
        {mensaje && <p>{mensaje}</p>}
      </form>

      {location.pathname !== "/navbar/home" && (
        <Profile nombreUsuario={nombreUsuario} />
      )}

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NuevaMeta;








