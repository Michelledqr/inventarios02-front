import { axiosInstance } from '../helpers/axios-config';


const getTiposEquipo = () =>{
    return  axiosInstance.get('tipo-equipo', {
        headers: { 'Content-Type': 'application/json'}
    });
}

const postTipoEquipo = (data) =>{
    return  axiosInstance.post('tipo-equipo', data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

const putTipoEquipo = (tipoEquipoId, data) =>{
    return  axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

export {getTiposEquipo, postTipoEquipo, putTipoEquipo};