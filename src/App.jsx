import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import NavbarTop from './components/Partiels/Navbar/Navbar';
import Footer from './components/Partiels/Footer/Footer';
import { Apropos } from './components/Pages/APropos/Apropos';
import { Formations } from './components/Pages/Formations/Formations';
import { Home } from './components/Pages/Home/Home';


function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
      <NavbarTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path = '/Formations' element={<Formations />} />
        <Route path = '/a_propos' element={<Apropos />} />
      </Routes>
      </BrowserRouter>
    </div>
    <div>
    <Footer />
    </div>
    </>
  );
}

export default App;
