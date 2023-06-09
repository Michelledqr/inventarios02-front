import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {
  return( 
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/" >IUD-Inventarios</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' aria-current="page" exact to="/inventario">Inventario</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" activeClassName='active' aria-current="page" exact to="/usuario"> Usuarios </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' aria-current="page" exact to="/marca" >Marcas</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' aria-current="page" exact to="/tipo">Tipos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName='active' aria-current="page" exact to="/estado">Estados</NavLink>
            </li>
        </ul>
    </div>
  </div>
</nav>
);

}
