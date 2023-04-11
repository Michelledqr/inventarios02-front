import React from 'react'


export const InventarioCard = (props) => {
  const {linea}= props;
  return (
    <div className="col">
      <div className="card h-500">
        <img src={linea.imagen} className="object-fit-md-contain border rounded" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{linea.serial}</h5>
          <hr/>
          <p className="card-text">{linea.descripcion}</p>
          <p className="card-text">{`marca: ${linea.marca.nombre}`}</p>
          <p className="card-text">{`estado: ${linea.estadoEquipo.nombre}`}</p>
        </div>
      </div>
    </div>
  );   
}
