import React from "react";

function Mensaje({ tipo, children }) {
  return (
    <div className={`alerta ${tipo}`}>{children}</div>
  );
}

export default Mensaje;
