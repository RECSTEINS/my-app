import React, {Fragment, useEffect, useState} from "react";
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Productos(){
    const [productos, guardarProductos] = useState([]);
    const ConsultarAPI = async() =>{
        const ProductosConsulta = await ClienteAxios.get('/productos');

        //STATE
        guardarProductos(ProductosConsulta.data);
        console.log(productos);
    }
    useEffect( () =>{
        ConsultarAPI();
    },[]);

    const deleteProducto = async(id) =>{
        try{
            const response = await ClienteAxios.delete('/productos/'+id+'');
            alert("Producto eliminado con éxito");
            window.location.reload();
        }catch(error){
            console.error(error);
        }
    };
    

    return(
        <Fragment>
        
        <h1>Productos</h1>

        <Link to={"/nuevoProducto"} class="btn btn-verde nvo-alumno"> <i class="fas fa-plus-circle"></i>
            Agregar Producto
        </Link>

        <ul class="listado-alumno">
        {productos.map(producto =>
            <li class="alumno">
            <div class="info-alumno">
                <p class="nombre">{producto.Productos_Nombre}</p>
                <p class="nombreProv">{producto.Proveedor_Nombre}</p>
                <p class="precio">{producto.Productos_Precio}</p>
                <p class="descripcion">{producto.Productos_Descripcion}</p>
            </div>
            <div class="acciones">
                <a  class="btn btn-azul">
                    <i class="fas fa-pen-alt"></i>
                    Editar
                </a>
                <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteProducto()}>
                    <i class="fas fa-times"></i>
                    Eliminar
                </button>
            </div>
            </li>
            )}
        </ul>
        </Fragment>
    )
}

export default Productos;