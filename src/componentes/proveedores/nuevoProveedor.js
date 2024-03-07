import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

function NuevoProveedor() {

    const [proveedor, guardarProveedores] = useState({
        action: 'insert',
        nombre: '',
        activo: ''
    });

    const [error, setError] = useState('');

    const actualizarState = e => {
        guardarProveedores({
            ...proveedor,
            [e.target.name]: e.target.value
        });
    };

    const AgregarProveedor = e => {
        e.preventDefault();
        // Validar campos
        if (proveedor.nombre.trim() === '' || proveedor.activo.trim() === '') {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Enviar datos al servidor
        ClienteAxios.post('/proveedores', proveedor)
            .then(res => {
                alert("Proveedor agregado con éxito");
                window.location.reload();
                console.log(res);
            });
    };

    return (
        <Fragment>
            <h2>Agregar proveedor</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            <form onSubmit={AgregarProveedor}>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre del proveedor" name="nombre" onChange={actualizarState} />
                </div>
                
                <div className="campo">
                    <label>Activo</label>
                    <select name="activo" onChange={actualizarState}>
                        <option value="">Seleccione una opción</option>
                        <option value="1">Activo</option>
                        <option value="0">Inactivo</option>
                    </select>
                </div>
                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Agregar Alumno"  />
                </div>
            </form>
        </Fragment>
    );
}

export default NuevoProveedor;
