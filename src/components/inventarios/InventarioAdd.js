import React, {useState, useEffect} from 'react';
import {getEstadosEquipo} from '../../services/estadoEquipoService';
import {getMarcas} from '../../services/marcaService';
import {getTiposEquipo} from '../../services/tipoEquipoService';
import {getUsuarios} from '../../services/usuarioService';
import {postInventario} from '../../services/inventarioService';

export const InventarioAdd = ({closeOption}) => {
    /**  ----------------------------------------------- consulta de listas para seleccion en formulario*/

    const [usuarios, setUsuarios] = useState([])
    const [marcas, setMarcas] = useState([])
    const [estadosEquipo, setEstadosEquipo] = useState([])
    const [tiposEquipo, setTiposEquipo] = useState([])

    useEffect(()=> {
       const getData = async ()=>{
            try {  const {data}  = await getUsuarios();  setUsuarios(data); }
            catch (error) { console.log(error); }
        }
        getData();    
    },[]);
    useEffect(()=> {
        const getData = async ()=>{
             try {  const {data}  = await getMarcas();  setMarcas(data); }
             catch (error) { console.log(error); }
         }
         getData();    
    },[]);
    useEffect(()=> {
        const getData = async ()=>{
             try {  const {data}  = await getEstadosEquipo();  setEstadosEquipo(data); }
             catch (error) { console.log(error); }
         }
         getData();    
    },[]);
    useEffect(()=> {
        const getData = async ()=>{
             try {  const {data}  = await getTiposEquipo();  setTiposEquipo(data); }
             catch (error) { console.log(error); }
         }
         getData();    
    },[]);
 
    /**  ----------------------------------------------------------  grabar contenido de formulario*/
 
    const [contFormulario, setcontFormulario] = useState({});
    const { serial='', modelo='', descripcion='', color='', imagen='', fechaCompra='', precio='', usuario ='', marca='',tipo='', estado=''} = contFormulario;

    const handleOnChange = ({ target }) =>{
        const {name, value} = target;
        setcontFormulario({...contFormulario, [name]: value});
    }

    const handleOnsubmit = async (e)=>{
        e.preventDefault();
        const inventario = {
            serial, modelo, descripcion, color, imagen, fechaCompra, precio, 
            usuario:{_id: usuario}, marca:{_id: marca}, 
            tipoEquipo: { _id: tipo}, estadoEquipo: {_id: estado}
        }
        console.log(inventario);

        try{
            const {data} = await postInventario(inventario);
            console.log(data);
        }catch (error){
            console.log(error);
        }
    }


    /**  ---------------------------------------------------------- detalle contenido de formulario */
    const HeaderForm = () =>{
        return (
            <>
            <div className="column"> 
                <div className="sidebar-header">
                    <h2>Agregar Item Inventario</h2>
                    <i className="fa-solid fa-xmark " onClick={closeOption} ></i>
                </div>
            </div>
            </>
        )
    }
    const ContentRow01 = () => {
        return (
            <>
            <div className="row">
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Serial</label>
                        <input  type="text" 
                                required
                                name="serial" 
                                value={serial} 
                                onChange={(e)=> handleOnChange(e)}                                       
                                className="form-control">
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Modelo</label>
                        <input  type="text" 
                                required
                                name="modelo" 
                                value={modelo} 
                                onChange={(e)=> handleOnChange(e)}    
                                className="form-control">
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Descipción</label>
                        <input  type="text"
                                required 
                                name="descripcion" 
                                value={descripcion} 
                                onChange={(e)=> handleOnChange(e)}    
                                className="form-control">
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input  type="text"
                                required 
                                name="color" 
                                value={color} 
                                onChange={(e)=> handleOnChange(e)}    
                                className="form-control">
                        </input>
                    </div>
                </div>
            </div>
            </>
        )

    }
     
    const ContentRow02 = () => {
        return( 
            <>
            <div className="row">
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">URL Imágen</label>
                        <input  type="url" 
                                name="imagen" 
                                required
                                value={imagen} 
                                onChange={(e)=> handleOnChange(e)}>
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Fecha Compra</label>
                        <input  type="date" 
                                name="fechaCompra" 
                                required
                                value={fechaCompra} 
                                onChange={(e)=> handleOnChange(e)}  
                                className="form-control">
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input  type="number"
                                required 
                                name="precio" 
                                value={precio}
                                onChange={(e)=> handleOnChange(e)}    
                                className="form-control">
                        </input>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <select className="form-select"
                                required
                                name = 'usuario'
                                value= {usuario}
                                onChange={(e)=> handleOnChange(e)}>
                            <option > -- seleccionar usuario --</option>
                            {  usuarios.map((usuario)=>{
                                    return <option key={usuario._id} value={usuario._id} >{usuario.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            </>
        )    
    }
    
    const ContentRow03 = () => {
        return(
            <>
            <div className="row">
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Marca</label>
                        <select className="form-select"
                                name = 'marca'
                                required
                                value = {marca}
                                onChange={(e)=> handleOnChange(e)}>
                                <option > -- seleccionar marca --</option>
                            {  marcas.map((marca)=>{
                                    return <option key={marca._id} value={marca._id}>{marca.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Tipo Equipo</label>
                        <select className="form-select"
                                name = 'tipo'
                                value = {tipo}
                                required
                                onChange={(e)=> handleOnChange(e)}>
                                <option > -- seleccionar tipo equipo --</option>
                            {  tiposEquipo.map((tipo)=>{
                                    return <option key={tipo._id} value={tipo._id}>{tipo.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className='col'>
                    <div className="mb-3">
                        <label className="form-label">Estado Equipo</label>
                        <select className="form-select"
                                required
                                name = 'estado'
                                value = {estado}
                                onChange={(e)=> handleOnChange(e)}>
                            <option > -- seleccionar estado equipo --</option>
                            {  estadosEquipo.map((estado)=>{
                                    return <option key={estado._id} value={estado._id}>{estado.nombre}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            </>
        )
    }
    
    const ContentRow04 = () => {
        return (
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary">Guardar</button>
                </div>
            </div>            
        )
    }


    /**  --------------------------------------------------------------- Despliegue formulario */

    return (
    <div className="sidebar">
        <div className = "container-fluid">
            {/** ----------------------------------------------------Encabezado de fomrmulario*/}
            {HeaderForm()} 
            <div><hr/></div>
            <form onSubmit={(e)=> handleOnsubmit(e)}>
                {/** ---------------------------------------------------------- formulario linea 1*/}
                {ContentRow01()}
                {/** ---------------------------------------------------------- formulario linea 2*/}
                {ContentRow02()}
                {/** ---------------------------------------------------------- formulario linea 3*/}
                {ContentRow03()}
                {/** ---------------------------------------------------------- formulario linea 4*/}
                {ContentRow04()}
            </form>
        </div>
    </div>
   )



}
