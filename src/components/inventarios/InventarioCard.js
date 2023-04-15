import React from 'react';
import {Link} from 'react-router-dom';

export const InventarioCard = (props) => {
  const {linea}= props;
  return (
    <div className="col">
      <div className="card h-500 d-flex">
        <img src={linea.imagen} className="card-img-top h-300  object-fit-md-contain border rounded" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{linea.serial}</h5>
          <hr/>
          <p className="card-text">{linea.descripcion}</p>
          <p className="card-text">{`marca: ${linea.marca.nombre}`}</p>
          <p className="card-text">{`estado: ${linea.estadoEquipo.nombre}`}</p>
          <Link to={`inventario/edit/${linea._id}`}>Editar..</Link>
        </div>
      </div>
    </div>
  );   
}
