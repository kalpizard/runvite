import React from 'react';
import { formatearFecha } from '../components/helpers';

const Date = ({ fecha }) => {
  return (
    <div>
      <p className="fecha-gasto">
        Agregado el: <span>{formatearFecha(fecha)}</span>
      </p>
    </div>
  );
};

export default Date;




// import React from 'react'
// import { formatearFecha } from "../components/helpers";

// function Date(
//     fecha
// ) {
//   return (
//     <div>


// <p className="fecha-gasto">
//             Agregado el: <span>{formatearFecha(fecha)}</span>
//           </p>

//     </div>
//   )
// }

// export default Date;