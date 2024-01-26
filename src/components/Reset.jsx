
//LO HACE RARO //
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
            
            </button>
        </div>
    );
}

export default Reset;
