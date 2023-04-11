import React, {useState, useEffect} from 'react';
import {getInventarios} from '../../services/inventarioService';
import {InventarioCard} from './InventarioCard';
import { InventarioAdd } from './InventarioAdd';

export const InventarioView = () => {
  
  const [inventarios, setInventarios ] =useState([]);
  const [agregarItem, setAgregarItem] = useState(false);
 
  const listarInventarios = async () =>{
    try { 
      const {data} = await getInventarios();
      console.log(data);
      setInventarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect( ()=>{
    listarInventarios();
  },[]);

  const handleOnCLickAgregarItem= ()=> {
    setAgregarItem(!agregarItem);
  }


  return (
    <div className="container-fluid"> 
      <div className="mt-3 mb-3 row row-cols-1 row-cols-md-4 g-4">    
        {inventarios.map((linea)=>{
          return <InventarioCard linea={linea}  key={linea._id}/>
        })}
      </div>
      { agregarItem ?
          <InventarioAdd  closeOption={handleOnCLickAgregarItem}/>
        : 
          <button className="btn btn-primary fab" onClick={handleOnCLickAgregarItem}>
            <i className="fa-solid fa-plus"></i>
          </button>
      }


    </div>
  )
}
