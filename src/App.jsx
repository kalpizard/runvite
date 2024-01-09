// myapp.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StartButton from './components/StartButton';
import Exit from './components/Exit';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Stats from './pages/Stats';
import Home from './pages/Home';

function MyApp() {
  return (







    <Router>
      <Routes>
        <Route path="/" element={
            <div>
              <Header />
              <StartButton />
            </div>
          }
        />
        <Route path="/navbar/*" element={<NavBar />}>
          <Route 
            path="home" 
            element={
              <div>
                <Home />
                <Exit />
               {/* <Registration/> */}
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

export default MyApp;
