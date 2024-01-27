import React from 'react';

const Reset = ({
  setTareas,
  setMeta,
  setIsValidMeta,
  setNombreUsuario
}) => {
  const handleResetApp = () => {
    const resultado = window.confirm("¿VOLVER A COMENZAR?");
    if (resultado) {
      setTareas([]);
      setMeta("");
      setIsValidMeta(false);
      setNombreUsuario("");
    }
  };

  return (
    <div className="contenido-meta">
      <button className="reset-app" type="button" onClick={handleResetApp}>
        {/* Puedes poner texto o icono dentro del botón */}
        {/* Por ejemplo: <span>Reset</span> */}
      </button>
    </div>
  );
}

export default Reset;
