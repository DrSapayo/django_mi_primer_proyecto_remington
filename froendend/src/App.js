import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PeliculaList from './components/PeliculaList'
import PeliculaForm from './components/PeliculaForm';
import './App.css'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PeliculaList />}></Route>
          <Route path="/peliculas/crear" element={<PeliculaForm />}></Route>
          <Route path="/peliculas/editar/:id" element={<PeliculaForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
