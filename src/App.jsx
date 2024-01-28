import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Exit from "./components/Exit";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import Options from "./pages/Options";
import Footer from "./components/Footer";
import ListadoTareas from "./components/ListadoTareas";
import Modal from "./components/Modal";
import { generarId, formatearFecha } from "./components/helpers";

import "../src/styles/home.css";
import "../src/styles/stats.css";
import "../src/styles/navbar.css";
import "./index.css";
import "./components/styles/home.css";
import "./components/styles/navbar.css";
import iconoNuevaMeta from  './imgs/add.png';
import { LeadingActions } from "react-swipeable-list";
import { object } from "prop-types";

function App() {
  const [nombreUsuario, setNombreUsuario] = useState(
    localStorage.getItem("nombreUsuario") ?? ""
  );

  const [tokenUser, setTokenUser] = useState(
    localStorage.getItem("token") ?? ""
  );
  const getGoalFromStorage = () => {
    const itemStorage = localStorage.getItem("goal");
    if (itemStorage === "" || itemStorage === undefined) {
      return {};
    }
    const goalStorage = JSON.parse(itemStorage);

    if (!goalStorage || !goalStorage.goal) {
      return { goal: { tasks: [] } };
    }
    return goalStorage;
  };

  const [meta, setMeta] = useState(localStorage.getItem("meta") ?? "");
  const [isValidMeta, setIsValidMeta] = useState(false);
  const [currUser, setCurrUser] = useState(null);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [tareas, setTareas] = useState([]);

  const [tareaEditar, setTareaEditar] = useState({});

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 600);
  }, [tareaEditar]);

  useEffect(() => {
    // LOCAL_STORAGE_META
    localStorage.setItem("meta", meta ?? "");
  }, [meta]);

  useEffect(() => {
    // LOCAL_STORAGE_TAREA
    const goalStorage = getGoalFromStorage();
    setTimeout(() => {
      if (goalStorage.goal === undefined) {
        localStorage.setItem("goal", "{}");
      } else {
        goalStorage.goal.tasks = tareas;
        localStorage.setItem("goal", JSON.stringify(goalStorage) ?? []);
      }
    }, 600);
  }, [tareas]);

  useEffect(() => {
    const metaLS = localStorage.getItem("meta");
    const nombreUsuarioLS = localStorage.getItem("nombreUsuario") ?? "";

    if (nombreUsuarioLS !== "" && metaLS !== null) {
      setIsValidMeta(true);
    }
  }, []);

  useEffect(() => {
    if (tokenUser) {
      const storedData = localStorage.getItem("data");
      const userData = JSON.parse(storedData);

      const userName = userData.user_name != null ? userData.user_name : userData.name;
      setNombreUsuario(userName);
    } else {
      localStorage.setItem("nombreUsuario", nombreUsuario ?? "");
    }
  }, [nombreUsuario]);

  useEffect(() => {
    const goalStorage = getGoalFromStorage();
    setTimeout(() => {
      if (goalStorage.goal && goalStorage.goal.tasks) {
        setTareas(goalStorage.goal.tasks);
      } else {
        setTareas([]);
      }
    }, 600);
  }, []);

// Funcion modal
const handleNuevaTareaClick = () => {
  setModal(true);
  setTareaEditar({});
  setAnimarModal(false);
  setTimeout(() => {
    setAnimarModal(true);
  }, 600);
};

  const guardarTarea = (tarea) => {
    const fechaActual = Date.now();

    if (tarea.id) {
      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? tarea : tareaState
      );
      setTareas(tareasActualizadas);
      setTareaEditar({});
    } else {
      tarea.id = generarId();
      tarea.fecha = fechaActual;
      setTareas([...tareas, tarea]);
    }

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 600);
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (setLogged(true)) {
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <StartButton />
                <User currUser={currUser} setCurrUser={setCurrUser} />
                <Footer />
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
                    nombreUsuario={nombreUsuario}
                    setNombreUsuario={setNombreUsuario}
                    tareas={tareas}
                    setTareas={setTareas}
                  />

                  {isValidMeta && (
                    <>
                      <main>
                        <div className="nuevo-gasto">
                          <img
                            src={iconoNuevaMeta}
                            onClick={handleNuevaTareaClick}
                          />
                        </div>
                        <ListadoTareas
                          tareas={tareas}
                          setTareaEditar={setTareaEditar}
                          eliminarTarea={eliminarTarea}
                        />
                      </main>
                    </>
                  )}
                  {modal && 
                    <Modal
                      setModal={setModal}
                      guardarTarea={guardarTarea}
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                      tareaEditar={tareaEditar}
                      setTareaEditar={setTareaEditar}
                    />
                  }
                  <Exit />
                </div>
              }
            />
            <Route
              path="stats"
              element={
                <div>
                  <Stats
                    tareas={tareas}
                    fecha={
                      tareas.length > 0 ? tareas[tareas.length - 1].fecha : null
                    }
                  />
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
                      meta={meta}
                      setMeta={setMeta}
                      isValidMeta={isValidMeta}
                      setIsValidMeta={setIsValidMeta}
                      nombreUsuario={nombreUsuario}
                      setNombreUsuario={setNombreUsuario}
                      tareas={tareas}
                      setTareas={setTareas}
                    />
                    <Exit />
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
