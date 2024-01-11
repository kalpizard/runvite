// myapp.jsx
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import StartButton from "./components/StartButton";
import Exit from "./components/Exit";
import NavBar from "./components/NavBar";
import User from "./components/User";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import NuevaTarea from "./imgs/agregar.png";

function App() {
  const [meta, setMeta] = useState("");
  const [currUser, setCurrUser] = useState(null);
  const [isValidMeta, setIsValidMeta] = useState(false);
  const handleNuevaTarea = () => {
    console.log("click");
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
              <div>
                <Home
                  meta={meta}
                  setMeta={setMeta}
                  isValidMeta={isValidMeta}
                  setIsValidMeta={setIsValidMeta}
                />

                {isValidMeta && (
                  <div>
                    <img
                      className="agregarTareas"
                      src={NuevaTarea}
                      alt="icono tarea nueva"
                      onClick={handleNuevaTarea}
                    />
                  </div>
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
