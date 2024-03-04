import React, { Fragment } from 'react';
import Header from '../src/componentes/layout/Header';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Proveedores from './componentes/proveedores/proveedores';
import Navigation from '../src/componentes/layout/Navigation';
import NuevoProveedor from './componentes/proveedores/nuevoProveedor';
import Productos from './componentes/productos/productos';
import NuevoProducto from './componentes/productos/nuevoProducto';

function App(){
  return(
    <Router>
      <Fragment>
        <Header/>
        <Navigation/>
          <main class="main">
            <Routes>
              <Route path='/proveedores' element={<Proveedores/>}/> 
              <Route path='/nuevoProveedor' element={<NuevoProveedor/>}/> 
              <Route path='/productos' element={<Productos/>}/>
              <Route path='/nuevoProducto' element={<NuevoProducto/>}/>
            </Routes>
          </main>
      </Fragment>
    </Router>
  );
}


export default App;

