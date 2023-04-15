import {axiosInstance} from '../helpers/axios-config';


const getInventarios = () =>{
    return  axiosInstance.get('inventario', {
        headers: { 'Content-Type': 'application/json'}
    });
}

const getInventarioId = (inventarioId) =>{
    return  axiosInstance.get(`inventario/${inventarioId}`, {
        headers: { 'Content-Type': 'application/json'}
    });
}



const postInventario = (data) =>{
    return  axiosInstance.post('inventario', data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

const putInventario = (inventarioId, data) =>{  
    return  axiosInstance.put(`inventario/${inventarioId}`, data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

export{getInventarios, postInventario, putInventario,  getInventarioId};