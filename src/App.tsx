import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './views/Navbar'
import Main from './views/Main'
import Characters from './views/Characters'
import Character from './views/Character'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/characters' element={<Characters />} />
          <Route path='/characters/:id' element={<Character />} />
          <Route path='/*' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
