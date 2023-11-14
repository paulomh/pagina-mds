import { HashRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './Home'
import Sobre from './Sobre'
import Pesquisa from './Pesquisa'

function App() {
  return (
    <div>
      <Router basename='/'>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/Pesquisa" element={<Pesquisa />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;