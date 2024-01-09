# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

import Read from 'react'

const Header = () => {

return (

    <div>


    </div>

)

}



//DIRIGE A LA ENTRADA AL PRECIONAR HOME 

import React from 'react';
import Header from './components/Header';
import StartButton from './components/StartButton';
import NavBar from './components/NavBar';
import Stats from './pages/Stats';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <StartButton />
              </div>
            }
          />
          <Route path="/navbar/*" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="stats" element={<Stats />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
