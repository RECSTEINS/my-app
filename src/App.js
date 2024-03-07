import React, { Fragment } from 'react';
import Header from '../src/componentes/layout/Header';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Alumnos from '../src/componentes/alumnos/alumnos';
import Calificaciones from '../src/componentes/calificaciones/calificaciones';
import Carreras from '../src/componentes/carreras/carreras';
import NuevoAlumno from './componentes/alumnos/nuevoAlumno';


/*import './App.css';
import axios from 'axios';
axios.get('http://localhost:8888/alumnos')
.then((response)=>{
  console.log(response.data);})
  .catch((error) =>{
    console.error(error);});

function App() {
  return (
    <p>Hola</p>
  );
}*/

function App(){
  return(
    <Router>
      <Fragment>
        <Header/>
        <Navigation/>
          <main class="main">
            <Routes>
              <Route path='/alumnos' element={<Alumnos/>}/>
              <Route path='/calificaciones' element={<Calificaciones/>}/>
              <Route path='/carreras' element={<Carreras/>}/>
              <Route path='/nuevoAlumno' element={<NuevoAlumno/>}/>
            </Routes>
          </main>
      </Fragment>
    </Router>
  );
}


export default App;

