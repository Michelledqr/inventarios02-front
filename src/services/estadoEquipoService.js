import { axiosInstance } from '../helpers/axios-config';


const getEstadosEquipo = () =>{
    return  axiosInstance.get('estado-equipo', {
        headers: { 'Content-Type': 'application/json'}
    });
}

const postEstadoEquipo = (data) =>{
    return  axiosInstance.post('estado-equipo', data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

const putEstadoEquipo = (estadoEquipoId, data) =>{
    return  axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

export {getEstadosEquipo, postEstadoEquipo, putEstadoEquipo};