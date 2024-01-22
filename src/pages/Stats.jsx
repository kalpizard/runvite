import React, { useState, useEffect } from 'react';
import { formatearFecha } from '../components/helpers';
import Date from '../components/Date';

const Stats = ({ tareas, fecha }) => {
  const [contadorTareas, setContadorTareas] = useState(0);

  useEffect(() => {
    setContadorTareas(tareas.length);
  }, [tareas]);

  return (
    <div className='stats-back'>
      <div className='div-stats'>
        <div className='circulo'>
          <p className='fecha'>
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>

        <div className='des-stats'>
          <h1>Tu primera tarea comenzó</h1>
        </div>
      </div>
      <div className='div-stats'>
        <div className='circulo'>
          <p className='fecha'>
          <h2>{contadorTareas ? `Tareas (${contadorTareas})` : 'No Hay Tareas'}</h2>
          </p>
        </div>

        <div className='des-stats'>
          <h1>Tu primera tarea comenzó</h1>
        </div>
      </div>

      {/* Mostrar el contador de tareas en lugar de la lista */}
      <div className='div-stats'>
        <div className='circulo'>
          <p className='fecha'>
            Agregado el: <span>{formatearFecha(fecha)}</span>
          </p>
        </div>

        <div className='des-stats'>
          <h1>Tu primera tarea comenzó</h1>
        </div>
      </div>
    </div>
  );
};

export default Stats;










// const Stats = (
  
//   fecha
// ) =>
//  {
//   return (
//     <div className="stats">
//         <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>
//     </div>
//   );
// }

// export default Stats;