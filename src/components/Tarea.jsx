import React from 'react';

function Tarea({ tarea }) {
  const { dificultad, nombre, descripcion, id } = tarea;

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        {/* Contenido del gasto */}
      </div>

      <div className='descripcion gasto'>
        <p className='categoria'>{dificultad}</p>
        <p className='nombre'>{nombre}</p>
        <p className='descripcion'>{descripcion}</p>
      </div>
    </div>
  );
}

export default Tarea;
