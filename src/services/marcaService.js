import { axiosInstance } from '../helpers/axios-config';


const getMarcas = () =>{
    return  axiosInstance.get('marca', {
        headers: { 'Content-Type': 'application/json'}
    });
}

const postMarca = (data) =>{
    return  axiosInstance.post('marca', data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

const putMarca = (marcaId, data) =>{
    return  axiosInstance.put(`marca/${marcaId}`, data, {
        headers: { 'Content-Type': 'application/json'}
    });
}

export {getMarcas, postMarca, putMarca};