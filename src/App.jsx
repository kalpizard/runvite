// IMPORTACION USESTATE
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Exit from "./components/Exit";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import { generarId } from "./components/helpers";
import ListadoTareas from "./components/ListadoTareas";

import Modal from "./components/Modal";
import "./index.css";

function App() {
  //STATE META, SETMETA
  const [meta, setMeta] = useState("");
  //STATE CURRUSER, SETCURRUSER
  const [currUser, setCurrUser] = useState(null);
  //STATE PARA VALIDAR PRESUPUESTO, SE PASAN A HOME
  const [isValidMeta, setIsValidMeta] = useState(false);
  //STATE PARA MOSTRAR MODAL
  const [modal, setModal] = useState(false);
  //STATE PARA SETEAR TAREAS
  const [tareas, setTareas] = useState([]);

  const handleNuevatarea= () => {
    console.log("Diste click");
    // MODAL CAMBIA A TRUE 
    setModal(true);
    document.body.classList.add("modal-active");
  };
// VALIDACION PARA NUEVAS TAREAS
  const guardarTarea = (tarea) => {
    tarea.id = generarId();
    setTareas((prevTareas) => [...prevTareas, tarea]);
  };

  const closeModal = () => {
    setModal(false);
    document.body.classList.remove("modal-active");
  };

  return (
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
              // DIV DEL HOME
              <div>
                
                <Home
                  meta={meta}
                  setMeta={setMeta}
                  isValidMeta={isValidMeta}
                  setIsValidMeta={setIsValidMeta}
                />
                {/* CUANDO SE VALIDO SE EJECUTA EL CODIGO */}
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
                        onClick={handleNuevatarea}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 5l0 14" />
                        <path d="M5 12l14 0" />
                      </svg>
                    </div>
                  </>
                )}
                {modal && (
                  <Modal setModal={setModal} guardarTarea={guardarTarea} />
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
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
