import React, { useEffect, useState } from "react";
import NuevaMeta from "../components/NuevaMeta";
import ControlMetas from "../components/ControlMetas";
import Progress from "../components/Progress";
import Footer from "../components/Footer";

const Home = ({
  meta,
  setMeta,
  isValidMeta,
  setIsValidMeta,
  nombreUsuario,
  setNombreUsuario,
  setTareas
}) => {
  // USEFECT jalar metas y tareas del usuario 
  // get al backend y paso el id del usuario, debe estar autenticado 

  return (
    <header>
      <Progress />
      <h1 className="planifica">The future for goal planning.</h1>

      {isValidMeta ? (
        <ControlMetas
          nombreUsuario={nombreUsuario}
          setNombreUsuario={setNombreUsuario}
          tareas={setTareas}
          setTareas={setTareas}
          meta={meta}
          setMeta={setMeta}
          setIsValidMeta={setIsValidMeta}
        />
      ) : (
        <NuevaMeta
          nombreUsuario={nombreUsuario}
          setNombreUsuario={setNombreUsuario}
          meta={meta}
          setMeta={setMeta}
          isValidMeta={isValidMeta}
          setIsValidMeta={setIsValidMeta}
        />
      )}
    </header>
  );
};

export default Home;

