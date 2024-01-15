import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Exit from "./components/Exit";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import Options from "./pages/Options";
import { generarId } from "./components/helpers";
import ListadoTareas from "./components/ListadoTareas";

import Modal from "./components/Modal";
import "./index.css";

function App() {
  // STATE PARA DEFINIR NOMBRE DEL PERFIL DEL USUARIO
  const [nombreUsuario, setNombreUsuario] = useState("");

  // STATE PARA META Y SETMETA
  const [meta, setMeta] = useState("");
  // STATE PARA CURRUSER Y SETCURRUSER
  const [currUser, setCurrUser] = useState(null);
  // STATE PARA VALIDAR PRESUPUESTO, SE PASA A HOME
  const [isValidMeta, setIsValidMeta] = useState(false);
  // STATE PARA MOSTRAR MODAL
  const [modal, setModal] = useState(false);
  // STATE PARA ANIMAR MODAL
  const [animarModal, setAnimarModal] = useState(false);
  // STATE PARA SETEAR TAREAS
  const [tareas, setTareas] = useState([]);

  // FUNCION PARA AGREGAR ESTILO A MODAL CON TIEMPO
  const handleNuevaTareaClick = () => {
    console.log("Diste click");
    // MODAL CAMBIA A TRUE
    setModal(true);

    setTimeout(() => {
      // Código que se ejecutará después de 5000 ms (5 segundos)
      // document.body.classList.add("modal-active");
      console.log("Animando modal");
      setAnimarModal(true);
    }, 5000);
  };

  // FUNCION PARA GUARDAR UNA NUEVA TAREA
  const guardarTarea = (tarea) => {
    tarea.id = generarId();
    tarea.fecha = Date.now();
    // console.log("ID de nueva tarea:", tarea.id);
    setTareas([...tareas, tarea]);

    // FUNCION PARA CERRAR EL MODAL DESPUÉS DE CIERTO TIEMPO
    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  return (
    <>
      {/* <div className={modal && 'fijar'}></div> */}

      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <StartButton />
                <User currUser={currUser} setCurrUser={setCurrUser} />
              </div>
            }
          />
          <Route path="/navbar/*" element={<NavBar />}>
            <Route
              path="home"
              element={
                <div>
                  <Home
                    meta={meta}
                    setMeta={setMeta}
                    isValidMeta={isValidMeta}
                    setIsValidMeta={setIsValidMeta}
                  />
                  {isValidMeta && (
                    <>
                      <main>
                        <ListadoTareas tareas={tareas} />
                      </main>

                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="agregarTareas"
                          width="100"
                          height="100"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="#009988"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          onClick={handleNuevaTareaClick}
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M12 5l0 14" />
                          <path d="M5 12l14 0" />
                        </svg>
                      </div>
                    </>
                  )}
                  {modal && (
                    <Modal
                      setModal={setModal}
                      guardarTarea={guardarTarea}
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                    />
                  )}
                  <Exit />
                </div>
              }
            />
            <Route
              path="stats"
              element={
                <div>
                  <Stats />
                  <Exit />
                </div>
              }
            />
            <Route
              path="options"
              element={
                <div>
                  <h1>
                    <Options
                      nombreUsuario={nombreUsuario}
                      setNombreUsuario={setNombreUsuario}
                    />
                  </h1>
                </div>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;














// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import StartButton from "./components/StartButton";
// import Exit from "./components/Exit";
// import NavBar from "./components/NavBar";
// import User from "./components/User";
// import Stats from "./pages/Stats";
// import Home from "./pages/Home";
// import Options from "./pages/Options";
// import { generarId } from "./components/helpers";
// import ListadoTareas from "./components/ListadoTareas";

// import Modal from "./components/Modal";
// import "./index.css";

// function App() {

// //STATE PARA DEFINIR NOMBRE DEL PERFIL DEL USUARIO
// const [nombreUsuario, setNombreUsuario] = useState("");

//   // STATE PARA META Y SETMETA
//   const [meta, setMeta] = useState("");
//   // STATE PARA CURRUSER Y SETCURRUSER
//   const [currUser, setCurrUser] = useState(null);
//   // STATE PARA VALIDAR PRESUPUESTO, SE PASA A HOME
//   const [isValidMeta, setIsValidMeta] = useState(false);
//   // STATE PARA MOSTRAR MODAL
//   const [modal, setModal] = useState(false);
//   // STATE PARA ANIMAR MODAL
//   const [animarModal, setAnimarModal] = useState(false);
//   // STATE PARA SETEAR TAREAS
//   const [tareas, setTareas] = useState([]);

//   // FUNCION PARA AGREGAR ESTILO A MODAL CON TIEMPO
//   const handleNuevaTareaClick = () => {
//     console.log("Diste click");
//     // MODAL CAMBIA A TRUE
//     setModal(true);

//     setTimeout(() => {
//       // Código que se ejecutará después de 5000 ms (5 segundos)
//       // document.body.classList.add("modal-active");
//       console.log("Animando modal");
//       setAnimarModal(true);
//     }, 5000);
//   };

//   // FUNCION PARA GUARDAR UNA NUEVA TAREA
//   const guardarTarea = (tarea) => {
//     tarea.id = generarId();
//     tarea.fecha = Date.now();
//     // console.log("ID de nueva tarea:", tarea.id);
//     setTareas([...tareas, tarea]);

//     // FUNCION PARA CERRAR EL MODAL DESPUÉS DE CIERTO TIEMPO
//     setAnimarModal(false);

//     setTimeout(() => {
//       setModal(false);
//     }, 5000);
//   };
//   return (
//     <div className={modal ? 'fijar' : ''}   > </div>
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <div>
//               <Header />
//               <StartButton />
//               <User currUser={currUser} setCurrUser={setCurrUser} />
//             </div>
//           }
//         />
//         <Route path="/navbar/*" element={<NavBar />}>
//           <Route
//             path="home"
//             element={
//               <div>

//                 <Home
//                   meta={meta}
//                   setMeta={setMeta}
//                   isValidMeta={isValidMeta}
//                   setIsValidMeta={setIsValidMeta}
//                   />
//                 {isValidMeta && (
//                   <>
//                     <main>
//                       <ListadoTareas tareas={tareas} />
//                     </main>

//                     <div>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="agregarTareas"
//                         width="100"
//                         height="100"
//                         viewBox="0 0 24 24"
//                         strokeWidth="3"
//                         stroke="#009988"
//                         fill="none"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         onClick={handleNuevaTareaClick}
//                       >
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <path d="M12 5l0 14" />
//                         <path d="M5 12l14 0" />
//                       </svg>
//                     </div>
//                   </>
//                 )}
//                 {modal && (
//                   <Modal
//                     setModal={setModal}
//                     guardarTarea={guardarTarea}
//                     animarModal={animarModal}
//                     setAnimarModal={setAnimarModal}
//                   />
//                 )}
//                 <Exit />
//               </div>
//             }
//           />
//           <Route
//             path="stats"
//             element={
//               <div>
//                 <Stats />
//                 <Exit />
//               </div>
//             }
//           />
//           <Route
//             path="options"
//             element={
//               <div>
//                 <h1>

//              <Options

//              nombreUsuario={nombreUsuario}
//              setNombreUsuario={setNombreUsuario}
//              />
//                 </h1>
//               </div>
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
