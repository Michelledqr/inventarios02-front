import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import {Header} from './components/ui/Header';
import {InventarioView} from './components/inventarios/InventarioView';
import {UsuarioView} from './components/usuarios/UsuarioView';
import {MarcaView} from './components/marcas/MarcaView';
import {EstadoView} from './components/estados/EstadoView';
import {TipoView} from './components/tipos/TipoView';
import {InventarioUpdate} from './components/inventarios/InventarioUpdate';

const App=()=>{
    return <Router>

        <Header/>

        <Switch> 
            <Route exact path="/">                      <InventarioView/>   </Route> 
            <Route exact path="/inventario">            <InventarioView/>   </Route>
            <Route exact path="/usuario">               <UsuarioView/>      </Route>
            <Route exact path="/marca">                 <MarcaView/>        </Route>
            <Route exact path="/estado">                <EstadoView/>       </Route>
            <Route exact path="/tipo">                  <TipoView/>         </Route>
            <Route exact path="/inventario/edit/:inventarioId">   <InventarioUpdate/> </Route>
            <Redirect to='/' />
        </Switch>   


    
    
    </Router>
    
}

export{App}