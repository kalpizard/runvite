// Tarea.jsx
import React from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatearFecha } from "../components/helpers";
import Icono1 from "../imgs/dificultad_1.png";
import Icono2 from "../imgs/dificultad_2.png";
import Icono3 from "../imgs/dificultad_3.png";

const diccionarioIconos = {
  1: Icono1,
  2: Icono2,
  3: Icono3,
};

const Tarea = ({ tarea, setTareaEditar, eliminarTarea }) => {
  const { dificultad, nombre, descripcion, id, fecha } = tarea;

  const fechaFormateada = formatearFecha(fecha);
  const fechaCreacion = formatearFecha(tarea.fechaCreacion);

  const handleEliminarTarea = () => {
    if (dificultad == 3) {
      // Mostrar alerta si la dificultad es 3 y luego eliminar la tarea
      window.alert('¡Cuidado! Esta tarea tiene dificultad 3. ¿Estás seguro de eliminarla?');
    } else {
      // Lógica de eliminación de tarea aquí si la dificultad no es 3
      eliminarTarea();
      window.alert('La tarea ha sido eliminada exitosamente.');
    }
  };

  return (
    <SwipeableList>
      <SwipeableListItem
        key={id}
        leadingActions={
          <LeadingActions>
            <SwipeAction onClick={handleEliminarTarea} destructive={true}>
              Borrar
            </SwipeAction>
          </LeadingActions>
        }
        trailingActions={
          <TrailingActions>
            <SwipeAction onClick={() => setTareaEditar(tarea)}>
              Editar
            </SwipeAction>
          </TrailingActions>
        }
      >
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
              src={diccionarioIconos[dificultad]}
              alt={`icono-dificultad-${dificultad}`}
            />

            <div className="descripcion gasto">
              <p className="nombre">{nombre}</p>
              <p className="descripcion">{descripcion}</p>
            </div>
          </div>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Tarea;






































// //USADO ANTERIORMENTE, FUNCIONA EN YA BORAAAA
// // // Tarea.jsx
// import React from "react";

// import {
//   LeadingActions,
//   SwipeableList,
//   SwipeableListItem,
//   SwipeAction,
//   TrailingActions,
// } from "react-swipeable-list";
// import "react-swipeable-list/dist/styles.css";
// import { formatearFecha } from "../components/helpers";
// import Icono1 from "../imgs/dificultad_1.png";
// import Icono2 from "../imgs/dificultad_2.png";
// import Icono3 from "../imgs/dificultad_3.png";

// const diccionarioIconos = {
//   1: Icono1,
//   2: Icono2,
//   3: Icono3,
// };

// const Tarea = ({
//   tarea,
//    setTareaEditar,
//    eliminarTarea
//    }) => {
//   const { dificultad, nombre, descripcion, id, fecha } = tarea;

//   return (
//     // Move SwipeableList outside the Tarea component to avoid unnecessary re-rendering
//     <SwipeableList>
//       <SwipeableListItem
//         leadingActions={
//           <LeadingActions>
//             {/* Use an anonymous arrow function to pass arguments to the onClick handler */}
//             <SwipeAction onClick={() => eliminarTarea(id)}

//             destructive={true}

//             >

//             </SwipeAction>
//           </LeadingActions>
//         }
//         trailingActions={
//           <TrailingActions>
//             {/* Use an anonymous arrow function to pass arguments to the onClick handler */}
//             <SwipeAction onClick={() => setTareaEditar(tarea)}>
//               editar
//             </SwipeAction>
//           </TrailingActions>
//         }
//       >
//         <div className="gasto sombra">
//           <div className="contenido-gasto">
//             {/* Use alt text that provides a better description */}
//             <img
//               src={diccionarioIconos[dificultad]}
//               alt={`icono-dificultad-${dificultad}`}
//             />

//             <div className="descripcion gasto">
//               <p className="nombre">{nombre}</p>
//               <p className="descripcion">{descripcion}</p>
//               <p className="fecha">
//                 Agregado el: <span>{formatearFecha(fecha)}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwipeableListItem>
//     </SwipeableList>
//   );
// };

// export default Tarea;

// //USADO ANTERIORMENTE
// // // Tarea.jsx
// import React from "react";

// import {
//   LeadingActions,
//   SwipeableList,
//   SwipeableListItem,
//   SwipeAction,
//   TrailingActions,
// } from "react-swipeable-list";
// import "react-swipeable-list/dist/styles.css";
// import { formatearFecha } from "../components/helpers";
// import Icono1 from "../imgs/dificultad_1.png";
// import Icono2 from "../imgs/dificultad_2.png";
// import Icono3 from "../imgs/dificultad_3.png";

// const diccionarioIconos = {
//   1: Icono1,
//   2: Icono2,
//   3: Icono3,
// };

// const Tarea = ({ tarea, setTareaEditar }) => {
//   const { dificultad, nombre, descripcion, fecha } = tarea;

//   return (
//     // Move SwipeableList outside the Tarea component to avoid unnecessary re-rendering
//     <SwipeableList>
//       <SwipeableListItem
//         leadingActions={
//           <LeadingActions>
//             {/* Use an anonymous arrow function to pass arguments to the onClick handler */}
//             <SwipeAction onClick={() => console.log("eliminar")}>
//               eliminar
//             </SwipeAction>
//           </LeadingActions>
//         }
//         trailingActions={
//           <TrailingActions>
//             {/* Use an anonymous arrow function to pass arguments to the onClick handler */}
//             <SwipeAction onClick={() => setTareaEditar(tarea)}>
//               editar
//             </SwipeAction>
//           </TrailingActions>
//         }
//       >
//         <div className="gasto sombra">
//           <div className="contenido-gasto">
//             {/* Use alt text that provides a better description */}
//             <img
//               src={diccionarioIconos[dificultad]}
//               alt={`icono-dificultad-${dificultad}`}
//             />

//             <div className="descripcion gasto">
//               <p className="nombre">{nombre}</p>
//               <p className="descripcion">{descripcion}</p>
//               <p className="fecha">
//                 Agregado el: <span>{formatearFecha(fecha)}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwipeableListItem>
//     </SwipeableList>
//   );
// };

// export default Tarea;

// // Tarea.jsx
// import React from "react";
// import {
//   LeadingActions,
//   SwipeableList,
//   SwipeableListItem,
//   SwipeAction,
//   TrailingActions,
// } from "react-swipeable-list";
// import "react-swipeable-list/dist/styles.css";
// import { formatearFecha } from "../components/helpers";
// import Icono1 from "../imgs/dificultad_1.png";
// import Icono2 from "../imgs/dificultad_2.png";
// import Icono3 from "../imgs/dificultad_3.png";

// const diccionarioIconos = {
//   1: Icono1,
//   2: Icono2,
//   3: Icono3,
// };
// // EXTRAER EL SETTAREAEDITAR
// const Tarea = ({ tarea, setTareaEditar }) => {
//   const { dificultad, nombre, descripcion, fecha } = tarea;

//   return (
//     <SwipeableList>
//       <SwipeableListItem
//         leadingActions={
//           <LeadingActions>
//             <SwipeAction onClick={() => console.log("editar");}>
//               eliminar
//             </SwipeAction>
//           </LeadingActions>
//         }
//         trailingActions={
//           <TrailingActions>
//             <SwipeAction onClick={() => setTareaEditar(tarea)}>
//               editar
//             </SwipeAction>
//           </TrailingActions>
//         }
//       >
//         <div className="gasto sombra">
//           <div className="contenido-gasto">
//             <img
//               src={diccionarioIconos[dificultad]}
//               alt={`icono${dificultad}`}
//             />

//             <div className="descripcion gasto">
//               <p className="nombre">{nombre}</p>
//               <p className="descripcion">{descripcion}</p>
//               <p className="fecha">
//                 Agregado el: <span>{formatearFecha(fecha)}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwipeableListItem>
//     </SwipeableList>
//   );
// };

// export default Tarea;

//SECUNDAIOP
// // Tarea.jsx
// import React from "react";
// import {
//   LeadingActions,
//   SwipeableList,
//   SwipeableListItem,
//   SwipeAction,
//   TrailingActions,
// } from "react-swipeable-list";
// import "react-swipeable-list/dist/styles.css";
// import { formatearFecha } from "../components/helpers";
// import Icono1 from "../imgs/dificultad_1.png";
// import Icono2 from "../imgs/dificultad_2.png";
// import Icono3 from "../imgs/dificultad_3.png";

// const diccionarioIconos = {
//   1: Icono1,
//   2: Icono2,
//   3: Icono3,
// };

// const Tarea = ({ tarea }) => {
//   const { dificultad, nombre, descripcion, fecha } = tarea;

//   const leadingActions = (
//     <LeadingActions>
//       <SwipeAction onClick={() => console.log("Eliminar")}>
//         eliminar
//       </SwipeAction>
//     </LeadingActions>
//   );

//   const TrailingActions = (
//     <TrailingActions>
//       <SwipeAction onClick={() => console.log("editar")}>editar</SwipeAction>
//     </TrailingActions>
//   );

//   return (
//     <SwipeableList>
//       <SwipeableListItem
//         leadingActions={leadingActions}
//         trailingActions={TrailingActions}
//       >
//         <div className="gasto sombra">
//           <div className="contenido-gasto">
//             <img
//               src={diccionarioIconos[dificultad]}
//               alt={`icono${dificultad}`}
//             />

//             <div className="descripcion gasto">
//               <p className="nombre">{nombre}</p>
//               <p className="descripcion">{descripcion}</p>
//               <p className="fecha">
//                 Agregado el: <span>{formatearFecha(fecha)}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </SwipeableListItem>
//     </SwipeableList>
//   );
// };

// export default Tarea;
