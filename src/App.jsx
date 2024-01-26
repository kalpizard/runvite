// App.js ENTREGA
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
import "../src/styles/home.css";
import "../src/styles/stats.css";

import "../src/styles/navbar.css";
import { generarId, formatearFecha } from "./components/helpers";
import ListadoTareas from "./components/ListadoTareas";
import Modal from "./components/Modal";

import "./index.css";
import "./components/styles/home.css";
import "./components/styles/navbar.css";

import { LeadingActions } from "react-swipeable-list";
import { object } from "prop-types";
// import ProgressBar1 from "./components/ProgressBar1";
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
      return { goal: { tasks: [] } }; // Return a default value if no data is found
    }
    return goalStorage;
  };

  const [meta, setMeta] = useState(localStorage.getItem("meta") ?? "");
  const [currUser, setCurrUser] = useState(null);
  const [isValidMeta, setIsValidMeta] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [tareas, setTareas] = useState([]);

  const [tareaEditar, setTareaEditar] = useState({});

  useEffect(() => {
    if (Object.keys(tareaEditar).length > 0) setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 1000);
  }, [tareaEditar]);

  // useEffect(()=>{
  //   const preconfig1= "Estudio"
  //   const task = {"Buscar carrera":"matricular la U"}

  //   setGoal(preconfig1)

  //   setTareas([...goal, task]);

  // })

  // console.log(goal)

  // LOCAL_STORAGE_META
  useEffect(() => {
    // Save the current value of 'meta' to localStorage
    localStorage.setItem("meta", meta ?? "");
  }, [meta]);

  //LOCAL_STORAGE_TAREA
  useEffect(() => {
    // localStorage.setItem("tareas", JSON.stringify(tareas) ?? []);
    const goalStorage = getGoalFromStorage();
    setTimeout(() => {
      if (goalStorage.goal === undefined) {
        localStorage.setItem("goal", "{}");
      } else {
        goalStorage.goal.tasks = tareas;
        localStorage.setItem("goal", JSON.stringify(goalStorage) ?? []);
      }
    }, 300);
  }, [tareas]);

  useEffect(() => {
    const metaLS = localStorage.getItem("meta");
    const nombreUsuarioLS = localStorage.getItem("nombreUsuario") ?? "";

    console.log(currUser);
    // si viene nulo no tiene nombre de usuario,
    // if (data.user_name !== null) {
    //   localStorage.setItem("nombreUsuario", data.user_name);
    // } else {
    //   setIsValidMeta(true);
    // }
    if (nombreUsuarioLS !== "" && metaLS !== null) {
      setIsValidMeta(true);
    }
  }, []);

  useEffect(() => {
    if (tokenUser) {
      // Obtén la cadena JSON almacenada en el localStorage
      const storedData = localStorage.getItem("data"); // Sustituye 'tu_clave_de_almacenamiento' por la clave que hayas utilizado

      // Convierte la cadena JSON a un objeto JavaScript
      const userData = JSON.parse(storedData);

      // Ahora, puedes acceder a la propiedad 'user_name' del objeto
      const userName = userData.user_name;

      console.log(userName);
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

      console.log(goalStorage);
    }, 500);
  }, []);

  // Uncomment the function
  // const handleNuevaTareaClick = () => {
  //   setModal(true);
  //   setTareaEditar({});

  //   setTimeout(() => {
  //     setAnimarModal(true);
  //   }, 1000);
  // };
  const handleNuevaTareaClick = () => {
    setModal(true);
    setTareaEditar({});
    setAnimarModal(true);
  };

  const guardarTarea = (tarea) => {
    const fechaActual = Date.now(); // Obtén la marca de tiempo actual

    if (tarea.id) {
      // actualizar
      const tareasActualizadas = tareas.map((tareaState) =>
        tareaState.id === tarea.id ? tarea : tareaState
      );
      setTareas(tareasActualizadas);
      setTareaEditar({});
    } else {
      tarea.id = generarId();
      tarea.fecha = fechaActual; // Utiliza la fecha actual como la fecha de la tarea
      setTareas([...tareas, tarea]);
    }

    setAnimarModal(false);

    setTimeout(() => {
      setModal(false);
    }, 5000);
  };

  const eliminarTarea = (id) => {
    // console.log('eliminando', id);
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    //  console.log(tareasActualizadas);
    setTareas(tareasActualizadas);
  };

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    //VALIDATE IF THERE IS A USER LOGGED
    //LEER DESDE EL LOCALSTORAGE EL USUARIO LOGUEADO
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
                        <ListadoTareas
                          tareas={tareas}
                          setTareaEditar={setTareaEditar}
                          eliminarTarea={eliminarTarea}
                        />
                      </main>
                      <div className="nuevo-gasto">
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

                      {/* <div>
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
                      </div> */}
                    </>
                  )}
                  {modal && (
                    <Modal
                      setModal={setModal}
                      guardarTarea={guardarTarea}
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                      tareaEditar={tareaEditar}
                      setTareaEditar={setTareaEditar}
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
                  {/* Pass the creation date to the Stats component */}
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
                      // tareas={tareas}
                      // setTareas={setTareas}

                      //   nombreUsuario={nombreUsuario}
                      //   setNombreUsuario={setNombreUsuario}
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
