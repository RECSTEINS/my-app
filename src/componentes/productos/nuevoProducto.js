import React, { Fragment, useEffect, useState } from 'react';
import ClienteAxios from '../../config/axios';
import { Link } from 'react-router-dom';

function NuevoProducto() {
    const [proveedores, guardarProveedor] = useState([]);
    useEffect(() => {
        const ConsultarAPI = async () => {
            const ProveedorConsulta = await ClienteAxios.get('/proveedores');
            guardarProveedor(ProveedorConsulta.data);
            console.log(ProveedorConsulta.data);
        }
        ConsultarAPI();
    }, []);

    const [producto, guardarProductos] = useState({
        action: 'insert',
        nombre: '',
        descripcion: '',
        tipo:'',
        precio:'',
        idProveedor:''
    });

    const [error, setError] = useState('');

    const actualizarState = e => {
        guardarProductos({
            ...producto,
            [e.target.name]: e.target.value
        });
    };

    const AgregarProducto = e => {
        e.preventDefault();
        // Validar campos
        if (producto.nombre.trim() === '' || producto.descripcion.trim() === ''|| producto.tipo.trim() === '' || producto.precio.trim() === '' || producto.idProveedor.trim() === '') {
            setError('Todos los campos son obligatorios');
            return;
        }

        // Enviar datos al servidor
        ClienteAxios.post('/productos', producto)
            .then(res => {
                alert("Producto agregado con éxito");
                window.location.reload();
                console.log(res);
            });
    };

    return (
        <Fragment>
            <h2>Agregar producto</h2>
            {error ? <div className="alert alert-danger" role="alert">{error}</div> : null}
            <form onSubmit={AgregarProducto}>
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input type="text" placeholder="Nombre del producto" name="nombre" onChange={actualizarState} />
                </div>
                <div className="campo">
                    <label>Descripción:</label>
                    <input type="text" placeholder="Agrega una descripción" name="descripcion" onChange={actualizarState} />
                </div>
                <div className="campo">
                    <label>Tipo:</label>
                    <input type="text" placeholder="Tipo de producto" name="tipo" onChange={actualizarState} />
                </div>
                <div className="campo">
                    <label>Precio:</label>
                    <input type="text" placeholder="Agrega un precio" name="precio" onChange={actualizarState} />
                </div>
                <div className="campo">
                    <label>Proveedor</label>
                    <select name="idProveedor" onChange={actualizarState}>
                        <option value="">Seleccione una opción</option>
                        {proveedores.map(proveedor =>
                            <option key={proveedor.Proveedor_Id} value={proveedor.Proveedor_Id}>{proveedor.Proveedorccd_Nombre}</option>
                        )}
                    </select>
                </div>
                <div className="enviar">
                    <input type="submit" className="btn btn-azul" value="Agregar Alumno"  />
                </div>
            </form>
        </Fragment>
    );
}

export default NuevoProducto;