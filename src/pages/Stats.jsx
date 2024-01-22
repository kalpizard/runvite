
// Stats.js
import React from 'react';
import { formatearFecha } from "../components/helpers";
import Date from '../components/Date';

const Stats = ({ fecha }) => {
  return (


    <div className='stats-back'>

    <div className="stats">
      <h1>STARTS</h1>
      <Date 
      fecha={fecha}  />
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