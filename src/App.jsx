import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './Components/Gallery/Gallery';
import HomePage from './Components/Homepage/Homepage'; // Nuova Home con Navbar
import { useState } from 'react';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<HomePage setPlayState={setPlayState} />} />
      <Route path="/gallery" element={<Gallery />} /> 
    </Routes>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
