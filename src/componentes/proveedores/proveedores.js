import React, {Fragment, useEffect, useState} from "react";
import ClienteAxios from '../../config/axios';
import {Link} from 'react-router-dom';

function Proveedores(){
    const [proveedores, guardarProveedores] = useState([]);
    const ConsultarAPI = async() =>{
        const ProveedoresConsulta = await ClienteAxios.get('/proveedores');

        //STATE
        guardarProveedores(ProveedoresConsulta.data);
        console.log(proveedores);
    }
    useEffect( () =>{
        ConsultarAPI();
    },[]);

    const deleteProveedor = async(id) =>{
        try{
            const response = await ClienteAxios.delete('/proveedores/'+id+'');
            alert("Proveedor eliminado con éxito");
            window.location.reload();
        }catch(error){
            console.error(error);
        }
    };

    const estadoProveedor = (estado) => {
        return estado ? "Activo" : "Inactivo";
    }
    

    return(
        <Fragment>
        
        <h1>Proveedores</h1>

        <Link to={"/nuevoProveedor"} class="btn btn-verde nvo-alumno"> <i class="fas fa-plus-circle"></i>
            Nuevo Proveedor
        </Link>

        <ul class="listado-alumno">
        {proveedores.map(proveedor =>
            <li class="alumno">
            <div class="info-alumno">
                <p class="nombre">{proveedor.Proveedor_Nombre}</p>
                <p class="activo">{estadoProveedor(proveedor.Proveedor_Activo)}</p>
            </div>
            <div class="acciones">
                <a  class="btn btn-azul">
                    <i class="fas fa-pen-alt"></i>
                    Editar
                </a>
                <button type="button" class="btn btn-rojo btn-eliminar" onClick={() => deleteProveedor(proveedor.Proveedor_Id)}>
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

export default Proveedores;